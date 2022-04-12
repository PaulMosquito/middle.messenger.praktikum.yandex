import Block from '../../core/Block';
import { SVG } from '..';
import template from './button-submit.template';
import './lenta.css';

type Props = {
    events?: any
};

class ButtonSubmit extends Block {
    constructor(props: Props) {
        super({
            ...props,
            Icon: SVG({ width: '12px', height: '12px', icon: 'arrow' }),
        });
    }

    public override render() {
        return this.compile(template);
    }
}

export default (props: Props) => new ButtonSubmit(props);
