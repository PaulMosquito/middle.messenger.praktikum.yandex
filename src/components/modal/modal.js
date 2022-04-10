import Block from '../../core/Block';
import ModalRow from './modalRow';
import './modal.css';

class Modal extends Block {
	constructor(props) {
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
		const ListComponent = this.props.list.reduce((acc, curr, index) => (
			`${acc}			
		#{ModalRow_${index}}
`), '');

		return this.compile(`
			div(id=id class=className)
				${ListComponent}
		`);
	}
}

export default props => new Modal(props);