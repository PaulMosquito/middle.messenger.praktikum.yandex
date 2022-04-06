import Block from '../core/Block';
import { Chats, Lenta } from '../components';

class Chat extends Block {
	constructor(props) {
		super({
			...props,
			Chats: new Chats(),
			Lenta: new Lenta()
		});
	}
	render() {
		return this.compile(`
			div.page
				div.left-block
					#{Chats}

				div.right-block
					#{Lenta}
        `);
	}
}

export default Chat;
