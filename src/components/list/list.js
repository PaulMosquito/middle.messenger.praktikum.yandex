import Block from '../../core/Block';


class List extends Block {
	constructor(props) {
		const Childrens = props.items.reduce((acc, item, i) => ({...acc, [`${props.name}_${i}`]: item}), {});

		super({
			...props,
			...Childrens
		});
	}


	render() {
		const { items, name } = this.props;

		const Names = items.map((item, i) => `#{${name}_${i}}`).join('\n');

		return this.compile(Names);
	}
}

export default List;