import Block from '../../core/Block';
import { EditableForm, SVG } from '..';
import { checkName, checkLogin, checkEmail, checkPhone } from '../../utils/utils';
import { EditableFormProps } from '../editableForm/editableForm'
import template from './editableUser.template';
import './editableUser.css';


class EditableUser extends Block {
	constructor() {
		super({
			CloseIcon: SVG({ icon: 'close' }),
			SecondNameForm: EditableForm({ id: 'second_name', name: 'Second Name', value: 'Kdsadsaew', edit: true, checkValue: checkName } as EditableFormProps),
			LoginForm: EditableForm({ id: 'login', name: 'Login', value: 'dsassdsa', edit: true, checkValue: checkLogin } as EditableFormProps),
			MailForm: EditableForm({ id: 'mail', name: 'Mail',  value: 'dsads@yaex.r', edit: true, checkValue: checkEmail } as EditableFormProps),
			FirstNameForm: EditableForm({ id: 'first_name', name: 'Name', value: 'Dsadpsa', edit: true, checkValue: checkName } as EditableFormProps),
			PhoneNumberForm: EditableForm({ id: 'phone-number', name: 'Phone number', value: '+79101032243', edit: true, checkValue: checkPhone } as EditableFormProps),
			PhotoIcon: SVG({ width: '40px', height: '40px', icon: 'photo' })
		});
	}
	render() {
		return this.compile(template);
	}
}

export default () => new EditableUser();
