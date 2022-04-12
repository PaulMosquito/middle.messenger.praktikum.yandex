import Block from '../../core/Block';
import {
    Button,
    Input,
    Link,
    SVG,
} from '..';
import { InputProps } from '../input/input';
import {
    checkName, checkLogin, checkEmail, checkPhone,
} from '../../utils/validation';
import logSubmit from '../../utils/logging';
import template from './user.template';
import './user.css';

type Props = {
    editable?: boolean
};
class User extends Block {
    constructor(props:Props) {
        super({
            ...props,
            PhotoIcon: SVG({ width: '40px', height: '40px', icon: 'photo' }),
            CloseIcon: SVG({ icon: 'close' }),
            NameForm: Input({
                id: 'first_name',
                name: 'Name',
                value: 'Dsadpsa',
                disabled: !props.editable,
                checkValue: checkName,
            } as InputProps),
            LastNameForm: Input({
                id: 'second_name',
                name: 'Second Name',
                value: 'Kdsadsaew',
                disabled: !props.editable,
                checkValue: checkName,
            } as InputProps),
            LoginForm: Input({
                id: 'login',
                name: 'Login',
                value: 'dsassdsa',
                disabled: !props.editable,
                checkValue: checkLogin,
            } as InputProps),
            MailForm: Input({
                id: 'email',
                name: 'Mail',
                value: 'dsads@yandex.r',
                disabled: !props.editable,
                checkValue: checkEmail,
            } as InputProps),
            PhoneNumberForm: Input({
                id: 'phone',
                name: 'Phone number',
                value: '+79101032243',
                disabled: !props.editable,
                checkValue: checkPhone,
            } as InputProps),
            ...(!props?.editable && {
                EditProfileLink: Link({ link: '/edit-profile', title: 'Edit profile' }),
                ChangePasswordLink: Link({ link: '/change-password', title: 'Change password' }),
                SignOutLink: Link({ link: '/', title: 'Sign Out' }),
            }),

        });
    }

    render() {
        const { editable } = this.props as Props;

        if (editable) {
            this.children.Button = Button({
                name: 'Apply',
                events: {
                    click: (event: Event) => {
                        const {
                            NameForm,
                            LastNameForm,
                            LoginForm,
                            MailForm,
                            PhoneNumberForm,
                        } = this.children;
                        const components = [
                            NameForm,
                            LastNameForm,
                            LoginForm,
                            MailForm,
                            PhoneNumberForm,
                        ];

                        event.preventDefault();
                        logSubmit(components);
                    },
                },
            });
        }
        return this.compile(template);
    }
}

export default (props:Props) => new User(props);
