import Block from '../../core/Block';
import { EditableForm, SVG } from '..';
import './editableUser.css';


class EditableUser extends Block {
	constructor(props) {
		super({
			...props,
			CloseIcon: SVG({ icon: 'close' }),
			SecondNameForm: EditableForm({ id: 'second_name', name: 'Second Name', value: 'Kdsadsaew', edit: true }),
			LoginForm: EditableForm({ id: 'login', name: 'Login', value: 'dsassdsa', edit: true }),
			MailForm: EditableForm({ id: 'mail', name: 'Mail',  value: 'dsads@yandex.r', edit: true }),
			FirstNameForm: EditableForm({ id: 'first_name', name: 'Name', value: 'Dsadpsa', edit: true }),
			PhoneNumberForm: EditableForm({ id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true }),
			PhotoIcon: SVG({ width: '40px', height: '40px', icon: 'photo' })
		});
	}
	render() {
		return this.compile(`
            .user-info
                .user-info__photo
                    .user-info__photo__sekeleton
                        img(src="../../assets/photo.svg")
                        #{PhotoIcon}

                .user-info__main
                    #{FirstNameForm}
                    #{SecondNameForm}
                    #{LoginForm}
                    #{MailForm}
                    #{PhoneNumberForm}

                .user-info__buttons
                    button.user-info__buttons__save-button="Apply"


                a(class="user-info__close" href="/account")
                    #{CloseIcon}
        `);
	}
}

export default (props) => new EditableUser(props);
