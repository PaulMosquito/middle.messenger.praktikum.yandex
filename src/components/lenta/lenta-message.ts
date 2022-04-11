import Block from '../../core/Block';
import template from './lenta-message.template';
import './lenta.css';

class LentaMessage extends Block {
    render() {
        return this.compile(template);
    }
}

export default (props:any) => new LentaMessage(props);
