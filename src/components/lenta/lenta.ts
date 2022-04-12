import Block from '../../core/Block';
import {
    ModalButton, Message, SVG, Button,
} from '..';
import LentaMessage from './lenta-message';
import CONVERSATION from './_mock';
import { checkMessage, logInfo } from '../../utils';
import template from './lenta.template';
import './lenta.css';

type State = {
    value: string
};
class Lenta extends Block {
    constructor() {
        super({
            ...CONVERSATION.reduce((acc, props, index) => ({
                ...acc,
                [`Message_${index}`]: Message(props),
            }), {}),
            ModalButton: ModalButton({
                id: 'setting-lenta',
                position: 'top-left',
                icon: 'settingDots',
                list: [{ link: '/account', title: 'Delete chat', icon: 'basket' }],
            }),
            Icon: SVG({ width: '12px', height: '12px', icon: 'arrow' }),
        });
    }

    public override getStateFromProps() {
        this.state = {
            value: '',
        };
    }

    public override render() {
        const { value } = this.state as State;

        const Messages = CONVERSATION.reduce((acc:string, _:any, index:number) => (
            `${acc}			
		#{Message_${index}}
`), '');

        this.children.LentaMessage = LentaMessage({
            value,
            events: {
                focusout: (event: Event & {
                    target: HTMLInputElement
                }) => {
                    const isError = !checkMessage(event.target.innerText);

                    if (isError) {
                        logInfo('Error: message is empty');
                    } else {
                        logInfo(JSON.stringify({ message: event.target.innerText }));
                    }
                },
                keyup: (event: KeyboardEvent & Event & {
                    target: HTMLInputElement
                }) => {
                    if (event.key === 'Escape') {
                        this.setState({ value: '', error: '' });
                    }
                },
            },
        });

        this.children.Button = Button({
            icon: 'arrow',
            events: {
                click: () => {
                    logInfo(JSON.stringify({ message: value }));
                },
            },
        });

        return this.compile(template(Messages));
    }
}

export default () => new Lenta();
