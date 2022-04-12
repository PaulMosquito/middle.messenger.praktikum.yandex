import Block from '../../core/Block';
import { Title, Input, Link } from '../../components';
import { InputProps } from '../../components/input/input';
import {
    checkName,
    checkLogin,
    checkPassword,
    checkEmail,
    checkPhone,
    logSubmit,
} from '../../utils';
import template from './auth.template';
import './auth.css';

class Auth extends Block {
    constructor() {
        super({
            Title: Title({ value: 'LET\'S TALK ABOUT YOURSELF', center: true }),
            FirstName: Input({
                name: 'First Name',
                id: 'first_name',
                title: 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
                checkValue: checkName,
            } as InputProps),
            SecondName: Input({
                name: 'Second name',
                id: 'second_name',
                title: 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
                checkValue: checkName,
            } as InputProps),
            Login: Input({
                name: 'Login',
                id: 'login',
                title: 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
                checkValue: checkLogin,
            } as InputProps),
            Email: Input({
                name: 'Email',
                checkValue: checkEmail,
                id: 'email',
                title: 'латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы',
            } as InputProps),
            Phone: Input({
                name: 'Phone number',
                checkValue: checkPhone,
                id: 'phone',
                title: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
            } as InputProps),
            Password: Input({
                name: 'Password',
                type: 'password',
                checkValue: checkPassword,
                id: 'password',
                title: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
            }),
            RepeatPassword: Input({
                name: 'Repeat password',
                type: 'password',
                id: 'repeat_password',
                title: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
                checkValue: checkPassword,
            }),
            SignIn: Link({ link: '/', title: 'Sign in' }),
        });
    }

    public override render() {
        this.children.Auth = Link({
            link: '/auth',
            title: 'Let\'s go!',
            isButton: true,
            events: {
                click: (event: Event) => {
                    const {
                        FirstName,
                        SecondName,
                        Login,
                        Email,
                        Phone,
                        Password,
                        RepeatPassword,
                    } = this.children;

                    const components = [
                        FirstName,
                        SecondName,
                        Login,
                        Email,
                        Phone,
                        Password,
                        RepeatPassword,
                    ];

                    event.preventDefault();
                    logSubmit(components);
                },
            },
        });

        return this.compile(template);
    }
}

export default () => new Auth();
