import Block from '../core/Block';
import { Title, Input, Link } from '../components';
import { InputProps } from '../components/input/input';
import { checkName, checkLogin, checkPassword, checkEmail, checkPhone } from '../utils/utils';
import template from './templates/auth.template';
import '../components/loginForm/loginForm.css';

class Auth extends Block {
	constructor() {
		super({
			Title: Title({ value: 'LET\'S TALK ABOUT YOURSELF', center: true }),
			FirstName: Input({ name: 'Name', checkValue: checkName } as InputProps),
			SecondName: Input({ name: 'Second name', checkValue: checkName } as InputProps),
			Login: Input({ name: 'Login', checkValue: checkLogin } as InputProps),
			Email: Input({ name: 'Email', checkValue: checkEmail } as InputProps),
			Phone: Input({ name: 'Phone number', checkValue: checkPhone } as InputProps),
			Password: Input({ name: 'Password', type: 'password', checkValue: checkPassword }),
			RepeatPassword: Input({ name: 'Repeat password', type: 'password', checkValue: checkPassword }),
			Auth: Link({ link: './chat.pug', title: 'Let\'s go!', isButton: true }),
			SignIn: Link({ link: '/', title: 'Sign in' })
		});
	}

	render() {
		return this.compile(template);
	}
}

export default () => new Auth();
