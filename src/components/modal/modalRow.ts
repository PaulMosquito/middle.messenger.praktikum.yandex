import Block from '../../core/Block';
import { SVG } from '..';
import { IconNames } from '../icons/icons';
import template from './modalRow.template';
import './modal.css';

export type ModalRowProps = {
    link: string;
    title: string;
    icon: IconNames
};

class ModalRow extends Block {
    constructor(props:ModalRowProps) {
        super({
            ...props,
            Icon: SVG({ width: '22px', height: '22px', icon: props.icon }),
        });
    }

    render() {
        return this.compile(template);
    }
}

export default (props: ModalRowProps) => new ModalRow(props);
