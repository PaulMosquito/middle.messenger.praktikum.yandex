import Block from '../../core/Block';
import { SVG } from '..';
import { IconNames } from '../icons/icons';
import template from './button.template';
import './button.css';

type Props = {
    name?: string;
    events: any;
    icon?: IconNames;
};
class Button extends Block {
    constructor(props: Props) {
        super({
            ...props,
            ...(props.icon && { Icon: SVG({ width: '12px', height: '12px', icon: props.icon }) }),
            className: props.icon ? 'send-message' : 'button',
        });
    }

    public override render() {
        return this.compile(template);
    }
}

export default (props: Props) => new Button(props);
