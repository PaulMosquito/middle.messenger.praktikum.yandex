import Block from '../../core/Block';
import ModalRow, { ModalRowProps } from './modalRow';
import template from './modal.template';
import './modal.css';

export type ModalProps = { 
	id: string;
	list: ModalRowProps[];
	position: 'top' | 'top-left' | 'bottom'
}

class Modal extends Block {
	constructor(props:ModalProps) {
		super({
			...props,
			...props.list.reduce((acc, rowProps, index) => ({
				...acc,
				[`ModalRow_${index}`]: ModalRow(rowProps)
			}), {}),
			className: `modal modal_${props.position || 'top'}`
		});
	}


	render() {

		const { list } = this.props as ModalProps;
		const ListComponent = list.reduce((acc, curr, index) => (
			`${acc}			
		#{ModalRow_${index}}
`), '');

		return this.compile(template(ListComponent));
	}
}

export default (props: ModalProps) => new Modal(props);