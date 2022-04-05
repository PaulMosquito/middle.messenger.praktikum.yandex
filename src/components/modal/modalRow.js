import Block from '../../core/Block';
import { SVG } from '../';
import './modal.css';

class ModalRow extends Block {
	constructor(props) {
		super({
			...props,
			SVG: new SVG({ width: '22px', height: '22px', icon: props.icon })
		});
	}
	render() {
		const { href, title } = this.props;

		return this.compile(`                    
			a(class="modal__row" href=href)
				div.modal__row__icon
					#{SVG}
				span=title
        `, {
			href,
			title
		});
	}
}

export default ModalRow;