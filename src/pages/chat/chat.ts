import Block from '../../core/Block';
import { Chats, Lenta } from '../../components';
import template from './chat.template';

class Chat extends Block {
    constructor() {
        super({
            Chats: Chats(),
            Lenta: Lenta(),
        });
    }

    render() {
        return this.compile(template);
    }
}

export default () => new Chat();
