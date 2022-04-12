import Block from '../../core/Block';
import { SVG } from '..';
import template from './button-submit.template';
import './lenta.css';

type Props = {
    events?: any
};
type State = {
    value: string
};
class ButtonSubmit extends Block {
    constructor(props: Props) {
        console.log(props);
        super({
            ...props,
            Icon: SVG({ width: '12px', height: '12px', icon: 'arrow' }),
        });
    }

    render() {
        return this.compile(template);
    }
}

export default (props: Props) => new ButtonSubmit(props);
