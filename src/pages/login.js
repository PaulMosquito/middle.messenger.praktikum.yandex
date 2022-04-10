import Block from '../core/Block';
import { Title, Input, Link } from '../components';
import { checkLogin, checkPassword } from '../utils/utils';
import '../components/loginForm/loginForm.css';

class Login extends Block {
	constructor(props) {
		super({
			...props,
			Title: Title({ value: 'WHO A U?', center: true }),
			LoginInput: Input({ name: 'Login', checkValue: checkLogin }),
			PasswordInput: Input({ name: 'Password', type: 'password', checkValue: checkPassword  }),
			SignIn: Link({ link: '/chat', title: 'Sign in', isButton: true }),
			SignUp: Link({ link: '/auth', title: 'Sign up' })
		});
	}

	render() {
		return this.compile(`
            div.login-form
                div.login-form__wrapper
					#{Title}
					div.login-form__wrapper__inputs
						#{LoginInput}
						#{PasswordInput}
					#{SignIn}
					#{SignUp}
        `);
	}
}

export default (props) => new Login(props);
