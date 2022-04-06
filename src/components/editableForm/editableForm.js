import Block from '../../core/Block';
import { Input } from '../';
import './editableForm.css';


class EditableForm extends Block {
	constructor(props) {
		super({
			...props,
			Form: new Input({
				id: props.id,
				name: props.name,
				value: props.value
			})
		});
	}
	render() {
		const { id, name='', value='', edit } = this.props;

		return this.compile(`
            if edit
                #{Form}
            else
                .editable-form
                    .editable-form__name=name
                    .editable-form__value=value
        `, {
			id,
			name,
			value,
			edit
		});
	}
}

export default EditableForm;
