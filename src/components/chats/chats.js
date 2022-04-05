import Block from '../../core/Block';
import { Conversation, ModalButton } from '../';
import LIST from './_mock.json';
import './chats.css';

class Chats extends Block {
	constructor(props) {
		super({
			...props,
			SettingModal: new ModalButton({
				id: 'setting-modal',
				position: 'top',
				icon: 'setting',
				list: [{href: './profile.pug', title: 'Profile', icon: 'user'}, {href:'/', title: 'Sign out', icon: 'sign-out'}]
			}),
			CreatingChatModal: new ModalButton({
				id: 'creating-chat',
				isCreatingChat: true,
				position: 'bottom',
				icon: 'pencil',
				list: [{href: '/create-chat', title: 'Create chat', icon: 'chat'}]
			}),
			Conversations: LIST.map(v => new Conversation(v))
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
