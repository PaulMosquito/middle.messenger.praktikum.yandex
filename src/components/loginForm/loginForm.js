import Block from '../../core/Block';
import { Title, Input, Link } from '../';
import './loginForm.css';

class LoginForm extends Block {
	constructor(props) {
		const Inputs = props.inputs.map(inputProps => new Input(inputProps));
		const Links = props.links.map(linkProps => new Link(linkProps));

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
