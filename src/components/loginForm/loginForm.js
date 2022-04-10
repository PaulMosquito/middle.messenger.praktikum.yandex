import Block from '../../core/Block';
import { Title, Input, Link, List } from '../';
import './loginForm.css';

class LoginForm extends Block {
	constructor(props) {

		const Inputs = List({ items: props.inputs.map(inputProps => Input(inputProps)), name: 'Inputs' });
		const Links = List({ items: props.links.map(inputProps => Link(inputProps)), name: 'Links' });

		super({
			...props,
			Title: Title(props.title),
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

export default (props) => new LoginForm(props);
