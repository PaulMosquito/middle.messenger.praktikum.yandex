import Block from '../../core/Block';


class SVG extends Block {
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