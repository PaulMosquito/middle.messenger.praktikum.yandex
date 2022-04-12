import Block from '../../core/Block';
import template from './error.template';

type ErrorProps = {
    errorCode?: number
};
class Error extends Block {
    constructor({ errorCode = 404 }: ErrorProps) {
        super(({
            errorCode,
        }));
    }

    public override render() {
        return this.compile(template);
    }
}

export default (props: ErrorProps) => new Error(props);
