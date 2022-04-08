import Block from '../../core/Block';
import './link.css';

class Link extends Block {
	constructor(props) {
		super(props);
	}
	render() {
		const { link, title, isButton } = this.props;

		return this.compile(`
			a(href=link class=className onclick=onClick)=title
		`, {
			className: isButton ? 'link-button-component' : 'link-component',
			link,
			title
		});
	}
}

export default Link;