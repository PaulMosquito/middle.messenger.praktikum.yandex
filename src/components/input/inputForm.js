import Block from '../../core/Block';
import './input.css';

class InputForm extends Block {
	render() {
		const {
			name,
			type='text',
			events,
			value
		} = this.props;

		return this.compile(`
			input.input-form__input(placeholder=name type=type value=value onblur=onBlur)
        `, {
			name,
			type,
			value,
			events
		});
	}
}

export default (props) => new InputForm(props);
