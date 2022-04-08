import Block from '../../core/Block';
import './input.css';

const logValue = (...value) => {
	console.log(value);
};
class InputForm extends Block {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

	}

	onBlur (event) {
		if (this.props?.onBlur) {
			return this.props.onBlur(event);
		}
		logValue('default BLUR', event);
	}

	onFocus(event) {
		if (this.props?.onFocus) {
			return this.props.onFocus(event);
		}
		logValue('default FOCUS', event);
	}

	onKeyDown(event) {
		if (this.props?.onKeyDown) {
			return this.props.onKeyDown(event);
		}

		if (event.key === 'Escape') {
			logValue('default onKeyDown', event.key);
		}
	}

	onChange(e) {
		if (this.props?.onChange) {
			return this.props.onChange(e);
		}

		console.log(e.target.value);
	}

	render() {
		const {
			name,
			type='text',
			onBlur=this.onBlur,
			onFocus=this.onFocus
		} = this.props;

		const {
			value
		} = this.state;

		return this.compile(`
			input.input-form__input(placeholder=name type=type value=value onblur=onBlur)
        `, {
			name,
			type,
			value,
			events: {
				focus: onFocus,
				blur: onBlur,
				keydown: this.onKeyDown,
				keyup: this.onChange
			}
		});
	}
}

class Input extends Block {
	constructor(props) {

		super({ ...props, InputForm: new InputForm({
			name: props.name,
			type: props.type,
			value: props.value,
			onBlur: props.onBlur
		}) });
	}

	render() {
		const { name, type='text', value } = this.props;

		return this.compile(`
            fieldset.input-form
				#{InputForm}
				legend.input-form__legend=type
        `, {
			onBlur: this.onBlur,
			id:`input-${name}`,
			name,
			type,
			value
		});
	}
}

export default Input;
