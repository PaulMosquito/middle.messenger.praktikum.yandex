import Block from '../../core/Block';
import './link.css';

class Link extends Block {
	constructor(props) {
		super({
			...props,
			className: props.isButton ? 'link-button-component' : 'link-component'
		});
	}

	render() {
		return this.compile(`
			a(href=link class=className)=title
		`);
	}
}

export default (props) => new Link(props);