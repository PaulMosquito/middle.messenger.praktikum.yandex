import Block from '../../core/Block';
import { Title, Input, Link } from '../';
import './loginForm.css';

class LoginForm extends Block {
	constructor(props) {
		super({
			...props,
			...props.inputs.reduce((acc, props, index) => ({
				...acc,
				[`Input_${index}`]: Input(props)
			}), {}),
			...props.links.reduce((acc, props, index) => ({
				...acc,
				[`Link_${index}`]: Link(props)
			}), {}),
			Title: Title(props.title)
		});
	}
	render() {
		const InputList = this.props.inputs.reduce((acc, curr, index) => (
			`${acc}			
	#{Input_${index}}
`), '');

		const LinkList = this.props.links.reduce((acc, curr, index) => (
			`${acc}			
	#{Link_${index}}
`), '');
		return this.compile(`
            div.login-form
                div.login-form__wrapper
                    #{Title}
                    div.login-form__wrapper__inputs
						${InputList}
					${LinkList}
    
        `);
	}
}

export default (props) => new LoginForm(props);
