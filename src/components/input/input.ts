import Block from '../../core/Block';
import InputForm from './inputForm';
import template from './input.template';
import { checkName } from '../../utils/validation';
import './input.css';

export type InputProps = {
    name: string;
    type: string;
    title?: string;
    id?: string;
    value?: string;
    checkValue?: typeof checkName;
    disabled?: boolean;
};

type State = {
    value: string;
    error: string;
};

class Input extends Block {
    getStateFromProps(props: InputProps) {
        this.state = {
            value: props.value || '',
            error: '',
        };
    }

    render() {
        const {
            name,
            type = 'text',
            checkValue = () => {},
            disabled,
            id,
        } = this.props as InputProps;
        const { value, error } = this.state as State;

        this.children.InputForm = InputForm({
            name,
            type,
            value,
            error,
            disabled,
            events: {
                // только на focusout иначе будет перерендер и теряется фокус
                focusout: (event: Event & {
                    target: HTMLInputElement
                }) => {
                    this.setState({ value: event.target.value });

                    const isError = !checkValue(event.target.value);
                    if (isError) {
                        console.log(`Error: ${id} - ${event.target.value}`);
                        this.setState({ error: 'Ошибка валидации, наведите на поле чтобы увидеть подсказку' });
                    } else {
                        console.log(`${id} - ${event.target.value}`);
                        this.setState({ error: '' });
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

        return this.compile(template);
    }
}

export default (props:InputProps) => new Input(props);
