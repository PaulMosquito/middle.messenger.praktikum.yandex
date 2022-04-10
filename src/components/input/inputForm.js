import Block from '../../core/Block';
import './input.css';

class InputForm extends Block {
	constructor(props) {
		super(props);
	}
	render() {
		return this.compile(`
			input.input-form__input(placeholder=name type=type value=value)
        `);
	}
}

export default (props) => new InputForm(props);
