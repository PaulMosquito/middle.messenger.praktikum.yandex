import Block from '../core/Block';
import { LoginForm } from '../components';
import './style.css';


class LoginPage extends Block {
	constructor(props) {
		super({
			...props,
			LoginForm: new LoginForm({
				title: { value: 'WHO A U?', center: true },
				inputs: [
					{ name: 'Login' },
					{ name: 'Password', type: 'password' }
				],
				links: [
					{href: './chat.pug', title: 'Sign in', isButton: true},
					{href: './auth.pug', title: 'Sign up'}
				]
			})
		});
	}
	render() {
		return this.compile(`
            #{LoginForm}
        `);
	}
}

export default LoginPage;
