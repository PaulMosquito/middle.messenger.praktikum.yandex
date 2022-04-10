import Block from '../core/Block';
import { Title, Input, Link } from '../components';
import { checkName, checkLogin, checkPassword, checkEmail, checkPhone } from '../utils/utils';
import '../components/loginForm/loginForm.css';

class Auth extends Block {
	constructor(props) {
		super({
			...props,
			Title: Title({ value: 'LET\'S TALK ABOUT YOURSELF', center: true }),
			FirstName: Input({ name: 'Name', checkValue: checkName }),
			SecondName: Input({ name: 'Second name', checkValue: checkName }),
			Login: Input({ name: 'Login', checkValue: checkLogin }),
			Email: Input({ name: 'Email', checkValue: checkEmail }),
			Phone: Input({ name: 'Phone number', checkValue: checkPhone }),
			Password: Input({ name: 'Password', type: 'password', checkValue: checkPassword }),
			RepeatPassword: Input({ name: 'Repeat password', type: 'password', checkValue: checkPassword }),
			Auth: Link({ link: './chat.pug', title: 'Let\'s go!', isButton: true }),
			SignIn: Link({ link: '/', title: 'Sign in' })
		});
	}

	render() {
		return this.compile(`
            div.login-form
                div.login-form__wrapper
					#{Title}
					div.login-form__wrapper__inputs
						#{FirstName}
						#{SecondName}
						#{Login}
						#{Email}
						#{Phone}
						#{Password}
						#{RepeatPassword}
					#{Auth}
					#{SignIn}
        `);
	}
}

export default () => new Auth();
