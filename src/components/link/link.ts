import Block from '../../core/Block';
import template from './link.template';
import './link.css';

export type LinkProps = {
	link: string,
	title: string,
	className?: string,
	isButton?: boolean
}
class Link extends Block {
	constructor(props:LinkProps) {
		super({
			...props,
			className: props.isButton ? 'link-button-component' : 'link-component'
		});
	}

	render() {
		return this.compile(template);
	}
}

export default (props:LinkProps) => new Link(props);