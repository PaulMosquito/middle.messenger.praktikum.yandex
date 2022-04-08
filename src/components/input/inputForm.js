import Block from '../../core/Block';
import './input.css';

class InputForm extends Block {
	onBlur () {
		console.log('BLUR-BLUR');
	}

	onFocus() {
		console.log('FOCUS-FOCUS');
	}

	render() {
		const { name, type='text', value, onFocus=this.onFocus, onBlur=this.onBlur } = this.props;

		return this.compile(`
			input.input-form__input(placeholder=name type=type value=value onblur=onBlur)
        `, {
			name,
			type,
			value,
			events: {
				focus: onFocus,
				blur: onBlur
			}
		});
	}
}

export default InputForm;
