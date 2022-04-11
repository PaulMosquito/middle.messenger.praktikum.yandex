import Block from '../../core/Block';
import InputForm from './inputForm';
import template from './input.template';
import { checkName } from '../../utils/utils';
import './input.css';

export type InputProps = {
	name: string;
	type: string;
	id?: string;
	value?: string;
	checkValue?: typeof checkName;
}

type State = {
	value: string;
	error: string|null;
}

class Input extends Block {
	getStateFromProps(props: InputProps) {
		this.state = {
			value: '',
			error: null
		};
	}

	render() {
		const { name, type='text', checkValue } = this.props as InputProps;
		const { value, error } = this.state as State;

		this.children.InputForm = InputForm({
			name,
			type,
			value,
			error,
			events: {
				focusin: (event: Event & {
					target: HTMLInputElement
				}) => {
					const { value } = event.target;

					const isError = !checkValue(value);

					if (isError) {
						console.log(`Error - ${value}`);
					} else {
						console.log(`${name} field - ${value}`);
					}
				},
				focusout: (event: Event & {
					target: HTMLInputElement
				}) => {
					const { value } = event.target;
					const isError = !checkValue(value);

					if (!isError) {
						console.log(`Error - ${value}`);
					} else {
						console.log(`${name} field - ${value}`);
					}
				},
				keyup: (event: KeyboardEvent & Event & {
					target: HTMLInputElement
				}) => {
					if (event.key === 'Escape') {
						this.setState({ value: '', error: '' });
					}
				}
			}
		});

		return this.compile(template);
	}
}

export default (props:InputProps) => new Input(props);
