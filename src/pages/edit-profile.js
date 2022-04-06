import Block from '../core/Block';
import { Chats, EditableUser } from '../components';

class EditProfile extends Block {
	constructor(props) {
		super({
			...props,
			Chats: new Chats(),
			User: new EditableUser()
		});
	}
	render() {
		return this.compile(`
			div.page
				div.left-block
					#{Chats}
	
			div.right-block.right-block__center
				#{User}  
		`);
	}
}

export default EditProfile;
