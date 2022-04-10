import Block from '../../core/Block';
import { List } from '../';
import ModalRow from './modalRow';
import './modal.css';

class Modal extends Block {
	constructor(props) {
		const Rows = List({ items: props.list.map(rowProps => ModalRow(rowProps)), name: 'Rows' });

		super({
			...props,
			Rows
		});
	}
	render() {
		const { id, position='top' } = this.props;

		return this.compile(`
			div(id=id class=className)
				#{Rows}
		`, {
			id,
			className: `modal modal_${position}`
		});
	}
}

export default props => new Modal(props);