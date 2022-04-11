import Block from '../../core/Block';
import { EditableForm, Link, SVG } from '..';
import { EditableFormProps } from '../editableForm/editableForm';
import template from './user.template';
import './user.css';

class User extends Block {
    constructor() {
        super({
            PhotoIcon: SVG({ width: '40px', height: '40px', icon: 'photo' }),
            CloseIcon: SVG({ icon: 'close' }),
            NameForm: EditableForm({
                id: 'name', name: 'Name', value: 'Dsadpsa', edit: true,
            } as EditableFormProps),
            LastNameForm: EditableForm({
                id: 'last-name', name: 'Last Name', value: 'Kdsadsaew', edit: true,
            } as EditableFormProps),
            LoginForm: EditableForm({
                id: 'login', name: 'Login', value: 'dsassdsa', edit: true,
            } as EditableFormProps),
            MailForm: EditableForm({
                id: 'mail', name: 'Mail', value: 'dsads@yandex.r', edit: true,
            } as EditableFormProps),
            PhoneNumberForm: EditableForm({
                id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true,
            } as EditableFormProps),
            EditProfileLink: Link({ link: '/edit-profile', title: 'Edit profile' }),
            ChangePasswordLink: Link({ link: '/change-password', title: 'Change password' }),
            SignOutLink: Link({ link: '/', title: 'Sign Out' }),
        });
    }

    render() {
        return this.compile(template);
    }
}

export default () => new User();
