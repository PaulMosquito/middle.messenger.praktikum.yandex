import Block from '../../core/Block';
import template from './inputForm.template';
import './input.css';

type Props = {
    name: string;
    type: string;
    value: string;
    error: string;
    events: Record<string, any>,
    disabled?: boolean
};

class InputForm extends Block {
    constructor(props: Props) {
        super({
            ...props,
            className: props.error ? 'input-form__input_error' : 'input-form__input',
        });
    }

    public override render() {
        return this.compile(template);
    }
}

export default (props:Props) => new InputForm(props);
