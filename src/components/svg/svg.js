import Block from '../../core/Block';
import { ICONS } from '../icons/icons';

class SVG extends Block {
	constructor({ width='18px', height='18px', icon }) {
		super({ width, height, icon });
	}
	render() {
		const { icon } = this.props;

		return this.compile(ICONS[icon]);
	}
}

export default props => new SVG(props);