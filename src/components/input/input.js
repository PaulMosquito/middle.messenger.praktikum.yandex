import Block from '../../core/Block';
import './input.css';

class Input extends Block {
	render() {
		const { name, type='text', value } = this.props;

		return this.compile(`
            fieldset.input-form
				input.input-form__input(placeholder=name type=type value=value)
				legend.input-form__legend=type
        `, {
			name,
			type,
			value
		});
	}
}

export default Input;
