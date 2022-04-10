import Block from '../../core/Block';
import { Input } from '../';
import './editableForm.css';


class EditableForm extends Block {
	constructor(props) {
		super({
			...props,
			Form: Input({
				id: props.id,
				name: props.name,
				value: props.value,
				onBlur: props.onBlur
			})
		});
	}
	render() {
		return this.compile(`
            if edit
                #{Form}
            else
                .editable-form
                    .editable-form__name=name
                    .editable-form__value=value
        `);
	}
}

export default (props) => new EditableForm(props);
