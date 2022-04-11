import Block from '../../core/Block';
import { ModalButton, Message, SVG } from '../';
import CONVERSATION from './_mock';
import template from './lenta.template';
import './lenta.css';


class Lenta extends Block {
	constructor() {
		super({
			...CONVERSATION.reduce((acc, props, index) => ({
				...acc,
				[`Message_${index}`]: Message(props)
			}), {}),
			ModalButton: ModalButton({
				id: 'setting-lenta',
				position: 'top-left',
				icon: 'settingDots',
				list: [ { link: '/account', title: 'Delete chat', icon: 'basket' } ]
			}),
			Icon: SVG({ width: '12px', height: '12px', icon: 'arrow' })
		});
	}
	render() {
		const Messages = CONVERSATION.reduce((acc:string, _:any, index:number) => (
			`${acc}			
		#{Message_${index}}
`), '');
		return this.compile(template(Messages));
	}
}

export default () => new Lenta();
