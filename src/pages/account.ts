import Block from '../core/Block';
import { Chats, User } from '../components';
import template from './templates/account.template';

class Account extends Block {
    constructor() {
        super({
            Chats: Chats(),
            User: User(),
        });
    }

    render() {
        return this.compile(template);
    }
}

export default () => new Account();
