import Block from '../core/Block';
import { LoginForm } from '../components';

class Auth extends Block {
	constructor(props) {
		super({
			...props,
			LoginForm: new LoginForm({
				title: { value: 'LET\'S TALK ABOUT YOURSELF', center: true },
				inputs: [
					{ name: 'Name' },
					{ name: 'Last Name' },
					{ name: 'Login' },
					{ name: 'Mail' },
					{ name: 'Phone number' },
					{ name: 'Password', type: 'password' },
					{ name: 'Repeat password', type: 'password' }
				],
				links: [
					{href: './chat.pug', title: 'Let\'s go!', isButton: true},
					{href: '/', title: 'Sign in'}
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

export default Auth;
