import Block from '../../core/Block';
import template from './button.template';
import './button.css';

type Props = {
    name?: string;
    events: any;
};
class Button extends Block {
    render() {
        return this.compile(template);
    }
}

export default (props: Props) => new Button(props);
