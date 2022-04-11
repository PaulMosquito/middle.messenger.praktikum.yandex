import Block from '../../core/Block';
import { ICONS, IconNames } from '../icons/icons';

type SVGProps = {
    width?: string;
    height?: string;
    icon: IconNames;
};
class SVG extends Block {
    constructor({ width = '18px', height = '18px', icon }: SVGProps) {
        super({ width, height, icon });
    }

    render() {
        const { icon } = this.props as SVGProps;

        return this.compile(ICONS[icon]);
    }
}

export default (props: SVGProps) => new SVG(props);
