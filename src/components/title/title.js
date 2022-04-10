import Block from '../../core/Block';
import './title.css';

class Title extends Block {
	render() {
		return this.compile(`
			div(class=center ? 'title title_center' : 'title')=value
		`);
	}
}

export default props => new Title(props);