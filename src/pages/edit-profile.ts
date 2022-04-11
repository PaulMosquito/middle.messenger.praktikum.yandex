import Block from '../core/Block';
import { Chats, EditableUser } from '../components';
import template from './templates/edit-profile.template';

class EditProfile extends Block {
	constructor() {
		super({
			Chats: Chats(),
			User: EditableUser()
		});
	}
	render() {
		return this.compile(template);
	}
}

export default () => new EditProfile();
