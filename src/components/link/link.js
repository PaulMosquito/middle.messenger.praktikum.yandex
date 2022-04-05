import Block from '../../core/Block';
import './link.css';


class Link extends Block {
	render() {
		const { href, title, isButton } = this.props;

		return this.compile(`
			a(href=href class=isButton ? 'link-button-component' : 'link-component')=title
		`, { href, title, isButton });
	}
}

export default Link;