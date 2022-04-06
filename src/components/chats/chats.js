import Block from '../../core/Block';
import { Conversation, List, ModalButton } from '../';
import LIST from './_mock.json';
import './chats.css';

class Chats extends Block {
	constructor(props) {
		const Conversations = new List({ items: LIST.map(props => new Conversation(props)), name: 'Conversations' });

		super({
			...props,
			SettingModal: new ModalButton({
				id: 'setting-modal',
				position: 'top',
				icon: 'setting',
				list: [{href: '/profile', title: 'Profile', icon: 'user'}, {href:'/', title: 'Sign out', icon: 'sign-out'}]
			}),
			CreatingChatModal: new ModalButton({
				id: 'creating-chat',
				isCreatingChat: true,
				position: 'bottom',
				icon: 'pencil',
				list: [{href: '/create-chat', title: 'Create chat', icon: 'chat'}]
			}),
			Conversations
		});
	}
	render() {
		return this.compile(`
            div.chats 
                div.chats__title
                    #{SettingModal}
                    input.chats__title__search(placeholder="Search")

                div.chats__list
					div.chats__list__creating-chat
                        #{CreatingChatModal}

                    #{Conversations}  
        `);
	}
}

export default Chats;
