import Block from '../../core/Block';
import { ICONS } from '../icons/icons';

class SVG extends Block {
	render() {
		const { width='18px', height='18px', icon } = this.props;

		return this.compile(ICONS[icon], {
			height,
			width
		});
	}
}

export default props => new SVG(props);