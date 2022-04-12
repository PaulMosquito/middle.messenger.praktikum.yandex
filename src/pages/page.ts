import Block from '../core/Block';
import {
    Account,
    Auth,
    Chat,
    EditProfile,
    Error,
    Login,
} from '.';
import template from './templates/page.template';
import './page.css';

class Page extends Block {
    constructor() {
        super({
            Account: Account(),
            Auth: Auth(),
            Chat: Chat(),
            EditProfile: EditProfile(),
            Login: Login(),
            events: {
                change: ({ target: { options } }: any) => {
                    this.setState({
                        component: [
                            '#{Login}',
                            '#{Auth}',
                            '#{Chat}',
                            '#{Account}',
                            '#{Login}',
                            '#{EditProfile}',
                        ][options.selectedIndex],
                    });
                },
            },
        });
    }

    getStateFromProps(props: any) {
        this.state = {
            page: '/',
            component: '',
        };
    }

    render() {
        const { component } = this.state as { component: string };
        return this.compile(template(component));
    }
}

export default Page;
