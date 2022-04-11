import Block from '../../core/Block';
import { Modal, SVG } from '..';
import { ModalProps } from '../modal/modal';
import { IconNames } from '../icons/icons';
import template from './modalButton.template';
import './modalButton.css';

type ModalButtonProps = ModalProps & {
    icon: IconNames;
    id: string;
    isCreatingChat?: boolean;

};
class ModalButton extends Block {
    constructor(props:ModalButtonProps) {
        super({
            ...props,
            SVG: SVG({ icon: props.icon }),
            Modal: Modal({
                id: props.id,
                list: props.list,
                position: props.position,
            }),
            className: `modal-button ${props.isCreatingChat ? 'modal-button__creating-chat' : 'modal-button__icon'}`,
            events: {
                click: () => {
                    const { id } = this.props as ModalButtonProps;
                    const modal = document.getElementById(id).lastChild as HTMLElement;
                    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
                },
            },
        });
    }

    render() {
        return this.compile(template);
    }
}

export default (props:ModalButtonProps) => new ModalButton(props);
