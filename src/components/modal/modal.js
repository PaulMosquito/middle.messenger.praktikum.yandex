import Block from '../../core/Block';
import { ModalRow } from './modalRow';
import './modal.css';

class Modal extends Block {
	constructor(props) {
		super({
			...props,
			ModalRow: props.list.map(rowProps => new ModalRow(rowProps))
		});
	}
	render() {
		const { id, position='top' } = this.props;

		return this.compile(`
            div(id=id class=class)
                #{ModalRow}
        `, {
			id,
			class: `modal modal_${position}`
		});
	}
}

export default Modal;