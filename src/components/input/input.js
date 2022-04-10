import Block from '../../core/Block';
import InputForm from './inputForm';
import './input.css';

class Input extends Block {
	getStateFromProps(props) {
		this.state = {
			value: '',
			error: null
		};
	}

	render() {
		const { name, type='text' } = this.props;
		const { value, error } = this.state;

		this.children.InputForm = InputForm({
			name,
			type,
			value,
			error,
			events: {
				focusin: ({ target: { value } }) => {


					const isError = !this.props?.checkValue(value);

					if (isError) {
						console.log(`Error - ${value}`);
					} else {
						console.log(`${name} field - ${value}`);
					}
				},
				focusout: ({ target: { value } }) => {


					const isError = !this.props?.checkValue(value);

					if (!isError) {
						console.log(`Error - ${value}`);
					} else {
						console.log(`${name} field - ${value}`);
					}
				},
				keyup: (event) => {
					if (event.key === 'Escape') {
						this.setState({ value: '', error: '' });
					} else {
						this.setState({ value: event.target.value, error: 33 });
					}

				}
			}
		});

		return this.compile(`
            fieldset.input-form
				#{InputForm}
				legend.input-form__legend=type
        `);
	}
}

export default (props) => new Input(props);
