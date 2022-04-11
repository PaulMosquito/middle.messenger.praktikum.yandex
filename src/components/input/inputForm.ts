import Block from '../../core/Block';
import template from './inputForm.template';
import './input.css';

type Props = {
	name: string;
	type: string;
	value: string;
	error: string;
	events: Record<string, any>
}

class InputForm extends Block {
	render() {
		return this.compile(template);
	}
}

export default (props:Props) => new InputForm(props);
