import Block from '../../core/Block';
import { ModalButton, Message, SVG, List } from '../';
import CONVERSATION from './_mock.json';
import './lenta.css';


class Lenta extends Block {
	constructor(props) {
		super({
			...props,
			ModalButton: ModalButton({
				id: 'setting-lenta',
				position: 'top-left',
				icon: 'settingDots',
				list: [ { link: '/account', title: 'Delete chat', icon: 'basket' } ]
			}),
			Icon: SVG({ width: '12px', height: '12px', icon: 'arrow' }),
			Messages: List({ items: CONVERSATION.map(v => Message(v)), name: 'Messages' })
		});
	}
	render() {
		return this.compile(`
			div.lenta
				header.lenta__header
					div.lenta__header__logo
						div.lenta__header__logo__image
					div.lenta__header__name="Jordan"            
					#{ModalButton}

				main#lenta-conversation.lenta__conversation
					#{Messages}
						

				footer.lenta__footer
					div(class="type-message" contenteditable=true)
					div(class="send-message")
						#{Icon}
		`);
	}
}

export default (props) => new Lenta(props);
