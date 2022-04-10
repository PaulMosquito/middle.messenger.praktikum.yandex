import Block from '../../core/Block';
import { Conversation, ModalButton } from '../';
import LIST from './_mock.json';
import './chats.css';

class Chats extends Block {
	constructor(props) {

		super({
			...props,
			...LIST.reduce((acc, props, index) => ({
				...acc,
				[`Conversation_${index}`]: Conversation(props)
			}), {}),
			SettingModal: ModalButton({
				id: 'setting-modal',
				position: 'top',
				icon: 'setting',
				list: [ { link: '/account', title: 'Account', icon: 'user' }, { link:'/', title: 'Sign out', icon: 'signOut' } ]
			}),
			CreatingChatModal: ModalButton({
				id: 'creating-chat',
				isCreatingChat: true,
				position: 'bottom',
				icon: 'pencil',
				list: [ { link: '/create-chat', title: 'Create chat', icon: 'chat' } ]
			})
		});
	}

	render() {
		const Conversations = LIST.reduce((acc, curr, index) => (
			`${acc}			
		#{Conversation_${index}}
`), '');

		return this.compile(`
            div.chats 
                div.chats__title
                    #{SettingModal}
                    input.chats__title__search(placeholder="Search")
                div.chats__list
					div.chats__list__creating-chat
                        #{CreatingChatModal}
                    ${Conversations}
        `);
	}
}

export default (props) => new Chats(props);
