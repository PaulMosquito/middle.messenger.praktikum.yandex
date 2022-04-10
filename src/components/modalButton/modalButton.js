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
			})
		});
	}

	render() {
		const { id, icon='', isCreatingChat, list } = this.props;

		return this.compile(`
			button(id=id, class=className)
				if icon
					#{SVG}
				if list
					#{Modal}
        `, {
			className: `modal-button ${isCreatingChat ? 'modal-button__creating-chat' : 'modal-button__icon'}`,
			icon,
			id: `${id}-button`,
			list,
			events: {
				click: () => {
					const { id } = this.props;
					const modal = document.getElementById(id).lastChild;
					modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
				}
			}
		});
	}
}

export default props => new ModalButton(props);