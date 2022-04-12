import Block from '../../core/Block';
import { Chats, User } from '../../components';
import template from './edit-profile.template';

class EditProfile extends Block {
    constructor() {
        super({
            Chats: Chats(),
            User: User({ editable: true }),
        });
    }

    public override render() {
        return this.compile(template);
    }
}

export default () => new EditProfile();
