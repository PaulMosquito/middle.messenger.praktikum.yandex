import Block from '../../core/Block';
import './message.css';

class Message extends Block {
	render() {
		return this.compile(`
            div(class=isMe? 'message_right' : 'message_left')
                div(class=isMe? 'my-message' : 'other-message')
                    span=message
                    div.message-time=date
		`);
	}
}

export default props => new Message(props);