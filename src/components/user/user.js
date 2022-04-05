import Block from '../../core/Block';
import { EditableForm, Link, SVG } from '../';
import './user.css';

class User extends Block {
	constructor(props) {
		super({
			...props,
			PhotoIcon: new SVG({ width: '40px', height: '40px', icon: 'photo' }),
			CloseIcon: new SVG({ icon: 'close' }),
			NameForm: new EditableForm({ id: 'name', name: 'Name', value: 'Dsadpsa', edit: true }),
			LastNameForm: new EditableForm({ id: 'last-name', name: 'Last Name', value: 'Kdsadsaew', edit: true }),
			LoginForm: new EditableForm({ id: 'login', name: 'Login', value: 'dsassdsa', edit: true }),
			MailForm: new EditableForm({ id: 'mail', name: 'Mail',  value: 'dsads@yandex.r', edit: true}),
			PhoneNumberForm: new EditableForm({ id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true }),
			EditProfileLink: new Link({href: './edit-profile.pug', title: 'Edit profile'}),
			ChangePasswordLink: new Link({href: './change-password', title: 'Change password'}),
			SignOutLink: new Link({href: '/', title: 'Sign Out'})

		});
	}
	render() {
		const { edit } = this.props;

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
                    if edit
                        button.user-info__buttons__save-button="Apply"
                    else
                        #{EditProfileLink}
                        #{ChangePasswordLink}
                        #{SignOutLink}


                a(class="user-info__close" href=edit ? './profile.pug': '/')
                    #{CloseIcon}
        `, { edit });
	}
}

export default User;
