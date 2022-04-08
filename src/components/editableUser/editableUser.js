import Block from '../../core/Block';
import { EditableForm, SVG } from '..';
import './editableUser.css';

const CloseIcon = new SVG({ icon: 'close' });

const NameForm = new EditableForm({ id: 'first_name', name: 'Name', value: 'Dsadpsa', edit: true });
const LastNameForm = new EditableForm({ id: 'second_name', name: 'Last Name', value: 'Kdsadsaew', edit: true });

const LoginForm = new EditableForm({ id: 'login', name: 'Login', value: 'dsassdsa', edit: true });
const MailForm = new EditableForm({ id: 'mail', name: 'Mail',  value: 'dsads@yandex.r', edit: true });
const PhoneNumberForm = new EditableForm({ id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true });
const PhotoIcon = new SVG({ width: '40px', height: '40px', icon: 'photo' });

class EditableUser extends Block {
	constructor(props) {
		super({
			...props,
			CloseIcon,
			LastNameForm,
			LoginForm,
			MailForm,
			NameForm,
			PhoneNumberForm,
			PhotoIcon
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
                    #{NameForm}
                    #{LastNameForm}
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
