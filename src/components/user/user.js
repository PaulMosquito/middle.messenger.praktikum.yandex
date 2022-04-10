import Block from '../../core/Block';
import { EditableForm, Link, SVG } from '../';
import './user.css';

class User extends Block {
	constructor(props) {
		super({
			...props,
			PhotoIcon: SVG({ width: '40px', height: '40px', icon: 'photo' }),
			CloseIcon: SVG({ icon: 'close' }),
			NameForm: EditableForm({ id: 'name', name: 'Name', value: 'Dsadpsa', edit: true }),
			LastNameForm: EditableForm({ id: 'last-name', name: 'Last Name', value: 'Kdsadsaew', edit: true }),
			LoginForm: EditableForm({ id: 'login', name: 'Login', value: 'dsassdsa', edit: true }),
			MailForm: EditableForm({ id: 'mail', name: 'Mail',  value: 'dsads@yandex.r', edit: true }),
			PhoneNumberForm: EditableForm({ id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true }),
			EditProfileLink: Link({ link: '/edit-profile', title: 'Edit profile' }),
			ChangePasswordLink: Link({ link: '/change-password', title: 'Change password' }),
			SignOutLink: Link({ link: '/', title: 'Sign Out' })
		});
	}
	render() {
		return this.compile(`
            .user-info
                .user-info__photo
                    .user-info__photo__sekeleton
                        #{PhotoIcon}

                .user-info__main
                    #{NameForm}
                    #{LastNameForm}
                    #{LoginForm}
                    #{MailForm}
                    #{PhoneNumberForm}

                .user-info__buttons
                    #{EditProfileLink}
                    #{ChangePasswordLink}
                    #{SignOutLink}


                a(class="user-info__close" link="/account")
                    #{CloseIcon}
        `);
	}
}

export default props => new User(props);
