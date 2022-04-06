import Block from '../../core/Block';
import './link.css';

class Link extends Block {
	constructor(props) {
		super(props);
	}
	render() {
		const { href, title, isButton } = this.props;

		return this.compile(`
			a(href=href class=className)=title
		`, {
			className: isButton ? 'link-button-component' : 'link-component',
			href,
			title
		});
	}
}

export default Link;