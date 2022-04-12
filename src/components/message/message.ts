import Block from '../../core/Block';
import template from './message.template';
import './message.css';

type MessageProps = {
    isMe?: boolean;
    date: string;
    message: string;
};
class Message extends Block {
    public override render() {
        return this.compile(template);
    }
}

export default (props:MessageProps) => new Message(props);
