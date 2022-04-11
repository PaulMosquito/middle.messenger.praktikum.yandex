import Block from '../../core/Block';
import { Input } from '..';
import { InputProps } from '../input/input';
import template from './editableForm.template';
import './editableForm.css';

export type EditableFormProps = InputProps & {
	edit?: boolean
};

class EditableForm extends Block {
	constructor(props:EditableFormProps) {
		super({
			Form: Input({
				id: props.id,
				name: props.name,
				value: props.value
			} as InputProps)
		})
	}
	render() {
		return this.compile(template);
	}
}

export default (props:EditableFormProps) => new EditableForm(props);
