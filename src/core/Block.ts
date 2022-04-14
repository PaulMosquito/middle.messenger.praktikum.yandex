import { v4 as uuidv4 } from 'uuid';
import { render } from 'pug';
import EventBus from './EventBus';

export type Keys<T extends Record<string, unknown>> = keyof T;
export type Values<T extends Record<string, unknown>> = T[Keys<T>];
type Events = Values<typeof Block.EVENTS>;

export default class Block<P = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    protected _element: HTMLElement | null = null;

    protected readonly props: P;

    protected children: { [id: string]: Block } = {};

    protected state = {};

    _meta:{
        props: P
    } | null = null;

    _id = uuidv4();

    eventBus: () => EventBus<Events>;

    public constructor(propsAndChildren:P) {
        const eventBus = new EventBus();

        const { children, props = {} } = this._getChildren(propsAndChildren);

        this.children = children;
        this._meta = {
            props,
        };

        this.getStateFromProps(props);
        this.props = this._makePropsProxy({ ...props, __id: this._id });
        this.state = this._makePropsProxy(this.state);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT, this.props);
    }

    protected getStateFromProps(_: any): void {
        this.state = {};
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        this._element = this._createDocumentElement('div');
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount(props: P) {
        this.componentDidMount(props);

        Object.values(this.children).forEach((child) => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount(_: P) {
    }

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: P, newProps: P) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(_oldProps: P, _newProps: P) {
        return true;
    }

    setProps = (nextProps:P) => {
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
        const newElement = fragment.firstElementChild!;

        this._element!.replaceWith(newElement);

        this._element = newElement as HTMLElement;

        this._addEvents();
    }

    compile(template:string):DocumentFragment {
        const propsAndStubs:Record<string, any> = {
            ...this.state,
            ...this.props,
            children: this.children,
        };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `div data-id=${child._id}`;
        });

        const fragment = document.createElement('template');

        fragment.innerHTML = render(template, propsAndStubs);

        Object.values(this.children).forEach((child) => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

            if (!stub) {
                return;
            }

            stub.replaceWith(child.getContent());
        });

        return fragment.content;
    }

    protected render():DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        const element = this._element;
        // Хак, чтобы вызвать CDM только после добавления в DOM
        if (element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            setTimeout(() => {
                if (element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
                }
            }, 100);
        }

        return this._element!;
    }

    _makePropsProxy(props:any) {
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
            },
        });
    }

    _getChildren(propsAndChildren: P) {
        const children:Record<string, Block> = {};
        const props:any = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    setState = (nextState:any) => {
        if (typeof nextState === 'undefined') {
            return;
        }

        Object.assign(this.state, nextState);
    };

    _createDocumentElement(tagName:string) {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this._id);
        return element;
    }

    _removeEvents() {
        const { events }: Record<string, () => void> = this.props || {};

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener);
        });
    }

    _addEvents() {
        const { events }: Record<string, () => void> = this.props || {};
        if (!events) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        });
    }

    show() {
        this.getContent().style.display = 'block';
    }

    hide() {
        this.getContent().style.display = 'none';
    }
}
