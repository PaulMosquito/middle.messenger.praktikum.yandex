import Block from '../../core/Block';
import { Title, Input, Link, List } from '../';
import './loginForm.css';

class LoginForm extends Block {
	constructor(props) {

		const Inputs = new List({ items: props.inputs.map(inputProps => new Input(inputProps)), name: 'Inputs' });
		const Links = new List({ items: props.links.map(inputProps => new Link(inputProps)), name: 'Links' });

		super({
			...props,
			Title: new Title(props.title),
			Inputs,
			Links
		});
	}
	render() {
		return this.compile(`
            div.login-form
                div.login-form__wrapper
                    #{Title}
                    div.login-form__wrapper__inputs
                        #{Inputs}
                    #{Links}
    
        `);
	}
}

export default LoginForm;
