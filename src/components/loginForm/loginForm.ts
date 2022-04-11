import Block from '../../core/Block';
import { Title, Input, Link } from '../';
import { InputProps } from '../input/input';
import { LinkProps } from '../link/link';
import { TitleProps } from '../title/title';


import template from './loginForm.template';
import './loginForm.css';

type Props = {
	inputs: InputProps[];
	links: LinkProps[];
	title: TitleProps;
}

class LoginForm extends Block {
	constructor(props: Props) {
		super({
			...props,
			...props.inputs.reduce((acc, props, index) => ({
				...acc,
				[`Input_${index}`]: Input(props)
			}), {}),
			...props.links.reduce((acc, props, index) => ({
				...acc,
				[`Link_${index}`]: Link(props)
			}), {}),
			Title: Title(props.title)
		});
	}
	render() {
		const { inputs, links } = this.props as Props;
		const InputList = inputs.reduce((acc, curr, index) => (
			`${acc}			
	#{Input_${index}}
`), '');

		const LinkList = links.reduce((acc, curr, index) => (
			`${acc}			
	#{Link_${index}}
`), '');
		return this.compile(template(InputList, LinkList));
	}
}

export default (props: Props) => new LoginForm(props);
