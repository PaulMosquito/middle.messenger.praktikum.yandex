import Block from '../../core/Block';
import { Title, Input, Link } from '../../components';
import { checkLogin, checkPassword } from '../../utils/validation';
import logSubmit from '../../utils/logging';
import { InputProps } from '../../components/input/input';
import template from './login.template';
import './login.css';

class Login extends Block {
    constructor() {
        super({
            Title: Title({ value: 'WHO A U?', center: true }),
            LoginInput: Input({
                name: 'Login',
                id: 'login',
                title: 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
                checkValue: checkLogin,
            } as InputProps),
            PasswordInput: Input({
                name: 'Password',
                id: 'password',
                type: 'password',
                title: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
                checkValue: checkPassword,
            } as InputProps),
            SignUp: Link({ link: '/auth', title: 'Sign up' }),
        });
    }

    render() {
        this.children.SignIn = Link({
            link: '/chat',
            title: 'Sign in',
            isButton: true,
            events: {
                click: (event: Event) => {
                    const {
                        LoginInput,
                        PasswordInput,
                    } = this.children;

                    const components = [
                        LoginInput,
                        PasswordInput,
                    ];

                    event.preventDefault();
                    logSubmit(components);
                },
            },
        });
        return this.compile(template);
    }
}

export default () => new Login();
