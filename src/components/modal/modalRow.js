import Block from '../../core/Block';
import { SVG } from '../';
import './modal.css';

class ModalRow extends Block {
	constructor(props) {
		super({
			...props,
			Icon: SVG({ width: '22px', height: '22px', icon: props.icon })
		});
	}
	render() {
		const { link, title } = this.props;

		return this.compile(`
			a(class="modal__row" href=link)
				div.modal__row__icon
					#{Icon}
				span=title
        `);
	}
}

export default (props) => new ModalRow(props);