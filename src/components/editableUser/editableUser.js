import Block from '../../core/Block';
import { EditableForm, SVG } from '..';
import './editableUser.css';


class EditableUser extends Block {
	constructor(props) {
		console.log('photo');
		console.log('close');
		super({
			...props,
			CloseIcon: new SVG({ icon: 'close' }),
			SecondNameForm: new EditableForm({ id: 'second_name', name: 'Second Name', value: 'Kdsadsaew', edit: true }),
			LoginForm: new EditableForm({ id: 'login', name: 'Login', value: 'dsassdsa', edit: true }),
			MailForm: new EditableForm({ id: 'mail', name: 'Mail',  value: 'dsads@yandex.r', edit: true }),
			FirstNameForm: new EditableForm({ id: 'first_name', name: 'Name', value: 'Dsadpsa', edit: true }),
			PhoneNumberForm: new EditableForm({ id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true }),
			PhotoIcon: new SVG({ width: '40px', height: '40px', icon: 'photo' })
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

export default EditableUser;
