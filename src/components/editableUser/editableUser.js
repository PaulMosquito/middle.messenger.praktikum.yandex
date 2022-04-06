import Block from '../../core/Block';
import { EditableForm, SVG } from '..';
import './editableUser.css';

class EditableUser extends Block {
	constructor(props) {
		super({
			...props,
			PhotoIcon: new SVG({ width: '40px', height: '40px', icon: 'photo' }),
			CloseIcon: new SVG({ icon: 'close' }),
			NameForm: new EditableForm({ id: 'name', name: 'Name', value: 'Dsadpsa', edit: true }),
			LastNameForm: new EditableForm({ id: 'last-name', name: 'Last Name', value: 'Kdsadsaew', edit: true }),
			LoginForm: new EditableForm({ id: 'login', name: 'Login', value: 'dsassdsa', edit: true }),
			MailForm: new EditableForm({ id: 'mail', name: 'Mail',  value: 'dsads@yandex.r', edit: true}),
			PhoneNumberForm: new EditableForm({ id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true })
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
                    button.user-info__buttons__save-button="Apply"


                a(class="user-info__close" href="/profile")
                    #{CloseIcon}
        `);
	}
}

export default EditableUser;
