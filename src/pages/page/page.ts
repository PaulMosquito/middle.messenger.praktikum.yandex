import Block from '../../core/Block';
import {
    Account,
    Auth,
    Chat,
    EditProfile,
    Login,
} from '..';
import template from './page.template';
import './page.css';

const PAGES = [
    '#{Login}',
    '#{Auth}',
    '#{Chat}',
    '#{Account}',
    '#{EditProfile}',
];

type Components = '#{Login}' | '#{Auth}' | '#{Chat}' | '#{Account}' | '#{Login}' | '#{EditProfile}';

type State = {
    component: Components
};
class Page extends Block {
    constructor() {
        super({
            Account: Account(),
            Auth: Auth(),
            Chat: Chat(),
            EditProfile: EditProfile(),
            Login: Login(),
            events: {
                change: (event: any) => {
                    const { component } = this.state as State;
                    this.setState({
                        component: typeof event.target?.options?.selectedIndex === 'number'
                            ? PAGES[event.target.options.selectedIndex]
                            : component,
                    });
                },
            },
        });
    }

    public override getStateFromProps(_: any) {
        this.state = {
            component: '#{Login}',
        };
    }

    public override render() {
        const { component } = this.state as { component: string };
        return this.compile(template(component));
    }
}

export default Page;
