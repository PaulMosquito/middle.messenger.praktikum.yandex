import Block from '../core/Block';
import { Chats, User } from '../components';

class Account extends Block {
	constructor(props) {
		super({
			...props,
			Chats: new Chats(),
			User: new User()
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

export default Account;
