import Block from '../../core/Block';


class SVG extends Block {
	constructor({ width ='18px', height='18px', icon, ...props }) {
		super({ width, height, icon, ...props });
	}

	render() {
		const { width, height, icon } = this.props;
		return this.compile(`
            svg(width=width, height=height)
                use(xlink:href=href)
		`, {
			href:`../assets/${icon}.svg#${icon}Root`,
			height,
			width
		});
	}
}

export default SVG;