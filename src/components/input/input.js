import Block from '../../core/Block';
import './input.css';

class InputForm extends Block {
	constructor(props) {
		super(props);
	}

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

class Input extends Block {
	constructor(props) {
		const state = {
			value: '',
			error: null
		};
		super({
			...props,
			InputForm: new InputForm({
				name: props.name,
				type: props.type,
				value: state.value,
				events: {
					blur: (event) => {
						if (this.props?.onBlur) {
							return this.props.onBlur(event);
						}
					},
					focus: (event) => {
						if (this.props?.onFocus) {
							return this.props.onFocus(event);
						}
					},
					keydown: (event) => {
						if (this.props?.onKeyDown) {
							return this.props.onKeyDown(event);
						}


						if (event.key === 'Escape') {
							this.setState({ value: '' });
						} else {

							this.setState({ value: event.target.value });
						}

					}
				}
			})
		});

		this.state = state;
	}

	render() {
		const { name, type='text' } = this.props;

		return this.compile(`
            fieldset.input-form
				#{InputForm}
				legend.input-form__legend=type
        `, {
			onBlur: this.onBlur,
			id:`input-${name}`,
			name,
			type
		});
	}
}

export default Input;
