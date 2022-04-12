import Block from '../../core/Block';
import template from './conversation.template';
import './conversation.css';

class Conversation extends Block {
    public override render() {
        return this.compile(template);
    }
}

export default (props:any) => new Conversation(props);
