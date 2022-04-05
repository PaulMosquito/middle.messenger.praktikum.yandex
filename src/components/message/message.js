import Block from '../../core/Block';
import './message.css';

class Message extends Block {
	render() {
		const { isMe, message, date } = this.props;

		return this.compile(`
            div(class=isMe? 'message_right' : 'message_left')
                div(class=isMe? 'my-message' : 'other-message')
                    span=message
                    div.message-time=date
		`, { isMe, message, date });
	}
}

export default Message;