import EventBus from './EventBus';
import { v4 as uuidv4 } from 'uuid';
import pug from 'pug';

export default class Block {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render'
	};


	_element = null;
	_meta = null;
	_id = null;


	constructor(propsAndChildren={}, tagName='div') {
		const eventBus = new EventBus();

		const { children, props={} } = this._getChildren(propsAndChildren);

		this._id = uuidv4();
		this.children = children;
		this._meta = {
			tagName,
			props
		};

		this.getStateFromProps(props);
		this.props = this._makePropsProxy({ ...props, __id: this._id });
		this.state = this._makePropsProxy(this.state);

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT, this.props);

	}

	getStateFromProps(props) {
		this.state = {};
	}

	_registerEvents(eventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources() {
		const { tagName } = this._meta;
		this._element = this._createDocumentElement(tagName);
	}

	init() {
		this._createResources();
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	_componentDidMount(props) {
		this.componentDidMount(props);

		Object.values(this.children).forEach(child => {
			child.dispatchComponentDidMount();
		});
	}

	componentDidMount() {
		return;
	}

	dispatchComponentDidMount() {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	_componentDidUpdate(oldProps, newProps) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	componentDidUpdate() {
		return true;
	}

	setProps = (nextProps) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element() {
		return this._element;
	}

	_render() {
		const fragment = this.render();

		this._removeEvents();
		const newElement = fragment.firstElementChild;

		this._element?.replaceWith(newElement);

		this._element = newElement;

		this._addEvents();
	}

	compile(template) {
		const propsAndStubs = { ...this.state, ...this.props, children: this.children, refs: this.refs };

		Object.entries(this.children).forEach(([ key, child ]) => {
			propsAndStubs[key] = `div data-id=${child._id}`;
		});

		const fragment = document.createElement('template');

		template = pug.compile(template.replaceAll('    ', '\t').replaceAll('\n\t\t\t', '\n'));
		fragment.innerHTML = template(propsAndStubs);

		Object.values(this.children).forEach(child => {
			const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

			if (!stub) {
				return;
			}

			stub.replaceWith(child.getContent());
		});

		return fragment.content;
	}

	render() {
		return '';
	}

	getContent() {
		const element = this._element;
		// Хак, чтобы вызвать CDM только после добавления в DOM
		if (element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			setTimeout(() => {
				if (element?.parentNode?.nodeType !==  Node.DOCUMENT_FRAGMENT_NODE ) {
					this.eventBus().emit(Block.EVENTS.FLOW_CDM);
				}
			}, 100);
		}

		return this._element;
	}

	_makePropsProxy(props) {
		/* eslint-disable @typescript-eslint/no-this-alias */
		const self = this;

		return new Proxy(props, {
			get(target, prop) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target, prop, value) {
				target[prop] = value;

				self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			}
		});
	}

	_getChildren(propsAndChildren) {
		const children = {};
		const props = {};

		Object.entries(propsAndChildren).forEach(([ key, value ]) => {
			if (value instanceof Block) {
				children[key] = value;
			} else {
				props[key] = value;
			}
		});

		return { children, props };
	}

	setState(nextState) {
		if (typeof nextState === 'undefined') {
			return;
		}

		Object.assign(this.state, nextState);
	}

	_createDocumentElement(tagName) {
		const element = document.createElement(tagName);
		element.setAttribute('data-id', this._id);
		return element;
	}

	_removeEvents() {
		const { events } = this.props || {};

		if (!events || !this._element) {
			return;
		}


		Object.entries(events).forEach(([ event, listener ]) => {
			this._element.removeEventListener(event, listener);
		});
	}

	_addEvents() {
		const { events } = this.props || {};
		if (!events) {
			return;
		}

		Object.entries(events).forEach(([ event, listener ]) => {
			this._element.addEventListener(event, listener);
		});
	}

	show() {
		this._element.style.display = 'block';
	}

	hide() {
		this.getContent().style.display = 'none';
	}
}