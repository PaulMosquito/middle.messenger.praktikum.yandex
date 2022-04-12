import Block from '../../core/Block';
import template from './title.template';
import './title.css';

export type TitleProps = {
    center?: boolean;
    value: string;
};

class Title extends Block {
    public override render() {
        return this.compile(template);
    }
}

export default (props:TitleProps) => new Title(props);
