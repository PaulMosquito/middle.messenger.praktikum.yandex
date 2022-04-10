import Block from '../../core/Block';
import { Modal, SVG } from '../';
import './modalButton.css';

class ModalButton extends Block {
	constructor(props) {
		super({
			...props,
			SVG: SVG({ icon: props.icon }),
			Modal: Modal({
				id: props.id,
				list: props.list,
				position: props.position
			}),
			className: `modal-button ${props.isCreatingChat ? 'modal-button__creating-chat' : 'modal-button__icon'}`,
			events: {
				click: () => {
					const { id } = this.props;
					const modal = document.getElementById(id).lastChild;
					modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
				}
			}
		});
	}

	render() {
		return this.compile(`
			button(id=id, class=className)
				if icon
					#{SVG}
				if list
					#{Modal}
        `);
	}
}

export default props => new ModalButton(props);