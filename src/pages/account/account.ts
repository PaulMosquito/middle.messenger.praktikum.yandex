import Block from '../../core/Block';
import { Chats, User } from '../../components';
import template from './account.template';

class Account extends Block {
    constructor() {
        super({
            Chats: Chats(),
            User: User({ editable: false }),
        });
    }

    render() {
        return this.compile(template);
    }
}

export default () => new Account();
