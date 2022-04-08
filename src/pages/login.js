import Block from '../core/Block';
import { LoginForm } from '../components';

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
					{link: '/chat', title: 'Sign in', isButton: true},
					{link: '/auth', title: 'Sign up'}
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
