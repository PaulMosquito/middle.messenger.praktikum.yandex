import Block from '../../core/Block';
import { Modal, SVG } from '../';
import './modalButton.css';

class ModalButton extends Block {
	constructor(props) {
		super({
			...props,
			SVG: new SVG({ icon: props.icon }),
			Modal: new Modal({
				id: props.id,
				list: props.list,
				position: props.position
			})
		});
	}
	handleOpenModal(buttonId) {
		const modal = document.getElementById(buttonId)?.lastChild;

		return (event) => {
			modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
			event.stopImmediatePropagation();
		};
	}

	render() {
		const { id, icon='', isCreatingChat, list } = this.props;

		return this.compile(`
			button( id=id, class=class, onclick=onclick )
				if icon
					#{SVG}
				if list
					#{Modal}
        `, {
			class: `modal-button ${isCreatingChat ? 'modal-button__creating-chat' : 'modal-button__icon'}`,
			icon,
			id: `${id}-button`,
			list,
			onclick: this.handleOpenModal(id)
		});
	}
}

export default ModalButton;