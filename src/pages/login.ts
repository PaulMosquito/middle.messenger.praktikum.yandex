import Block from '../core/Block';
import { Title, Input, Link } from '../components';
import { checkLogin, checkPassword } from '../utils/utils';
import { InputProps } from '../components/input/input';
import template from './templates/login.template';
import '../components/loginForm/loginForm.css';

class Login extends Block {
    constructor() {
        super({
            Title: Title({ value: 'WHO A U?', center: true }),
            LoginInput: Input({ name: 'Login', checkValue: checkLogin } as InputProps),
            PasswordInput: Input({ name: 'Password', type: 'password', checkValue: checkPassword } as InputProps),
            SignIn: Link({ link: '/chat', title: 'Sign in', isButton: true }),
            SignUp: Link({ link: '/auth', title: 'Sign up' }),
        });
    }

    render() {
        return this.compile(template);
    }
}

export default () => new Login();
