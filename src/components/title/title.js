import Block from '../../core/Block';
import './title.css';

class Title extends Block {
	render() {
		const { center, value } = this.props;

		return this.compile(`
			div(class=center ? 'title title_center' : 'title')=value
		`, {
			center,
			value
		});
	}
}

export default props => new Title(props);