(function() {
	window.addEventListener('DOMContentLoaded', function() {
		const conversation = document.getElementById('lenta-conversation');
		conversation?.scrollTo(0, conversation.scrollHeight);
	});
})();

import Block from '../../core/Block';
import { ModalButton, Message, SVG } from '../';
import CONVERSATION from './_mock.json';
import './lenta.css';


class Lenta extends Block {
	constructor(props) {
		super({
			...props,
			ModalButton: new ModalButton({
				id: 'setting-lenta',
				position: 'top-left',
				icon: 'setting_dots',
				list: [{href: './profile.pug', title: 'Delete chat', icon: 'basket'}]
			}),
			Messages: CONVERSATION.map(v => new Message(v)),
			Icon: new SVG({ width: '12px', height: '12px', icon:'arrow' })
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

export default Lenta;
