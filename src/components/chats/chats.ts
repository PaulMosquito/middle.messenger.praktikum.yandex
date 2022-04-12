import Block from '../../core/Block';
import { Conversation, ModalButton } from '..';
import template from './chats.template';
import LIST from './_mock';
import './chats.css';

class Chats extends Block {
    constructor() {
        super({
            ...LIST.reduce((acc, props, index) => ({
                ...acc,
                [`Conversation_${index}`]: Conversation(props),
            }), {}),
            SettingModal: ModalButton({
                id: 'setting-modal',
                position: 'top',
                icon: 'setting',
                list: [{ link: '/account', title: 'Account', icon: 'user' }, { link: '/', title: 'Sign out', icon: 'signOut' }],
            }),
            CreatingChatModal: ModalButton({
                id: 'creating-chat',
                isCreatingChat: true,
                position: 'bottom',
                icon: 'pencil',
                list: [{ link: '/create-chat', title: 'Create chat', icon: 'chat' }],
            }),
        });
    }

    public override render() {
        const Conversations:string = LIST.reduce((acc, _, index) => (
            `${acc}			
		#{Conversation_${index}}
`), '');

        return this.compile(template(Conversations));
    }
}

export default () => new Chats();
