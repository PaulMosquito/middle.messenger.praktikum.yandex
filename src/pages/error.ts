import Block from '../core/Block';
import template from './templates/error.template';

type ErrorProps = {
    errorCode?: number
}
class Error extends Block {
    constructor({errorCode = 404}: ErrorProps) {
        super(({
            errorCode
        }))
    }
	render() {
		return this.compile(template);
	}
}

export default (props: ErrorProps) => new Error(props);
