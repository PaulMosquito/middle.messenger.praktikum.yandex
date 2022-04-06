import Block from '../core/Block';

class Error extends Block {
	render() {
		const { errorCode = 404 } = this.props;
		return this.compile(`
            div.page
                div.right-block.right-block__center 
                    h1 errorCode
        `, { errorCode });
	}
}

export default Error;
