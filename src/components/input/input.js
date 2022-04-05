import Block from '../../core/Block';
import { Title } from '../';
import './input.css';


class Input extends Block {
	constructor(props) {
		super({
			...props,
			Title: new Title({ value: 'title' })
		});
	}
	render() {
		const { name, type='text', value } = this.props;

		return this.compile(`
            fieldset.input-form
				input.input-form__input(placeholder=name type=type value=value)
				legend.input-form__legend=type
				#{Title}
        `, {
			name,
			type,
			value
		});
	}
}

export default Input;
