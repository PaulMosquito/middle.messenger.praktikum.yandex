import Block from '../../core/Block';
import { ModalButton, Message, SVG } from '..';
import LentaMessage from './lenta-message';
import ButtonSubmit from './button-submit';
import CONVERSATION from './_mock';
import { checkMessage } from '../../utils/validation';
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

    getStateFromProps() {
        this.state = {
            value: '',
        };
    }

    render() {
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
                        /* eslint-disable-next-line no-console */
                        console.log('Error: message is empty');
                    } else {
                        /* eslint-disable-next-line no-console */
                        console.log(`Message field - ${event.target.innerText}`);
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

        this.children.ButtonSubmit = ButtonSubmit({
            events: {
                click: () => {
                    console.log(JSON.stringify({ message: value }));
                },
            },
        });

        return this.compile(template(Messages));
    }
}

export default () => new Lenta();
