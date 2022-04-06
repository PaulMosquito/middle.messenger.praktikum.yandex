/* eslint-disable */
import Block from '../core/Block';
import {
	Account,
	Auth,
	Chat,
	EditProfile,
	Error,
	Login,
} from './';
import './style.css';

const PAGES = {
    '/auth': `
#{Auth}
`,
    '/chat': `
#{Chat}
`,
    '/editprofile': `
#{EditProfile}
`,
    '/error': `
#{Error}
`,
    '/login': `
#{Login}
`,
	'/': `
#{Login}
`,
    '/account': `#{Account}
`
}

const NAME_PAGE_BY_PATHNAMES = {
	'/': 'Login',
	'/auth': 'Auth',
	'/chat': 'Chat',
	'/edit-profile': 'EditProfile',
	'/login': 'Login',
	'/account': 'Account'
}
const PAGE_BY_PATHNAMES = {
	'/': new Login(),
	'/auth': new Auth(),
	'/chat': new Chat(),
	'/edit-profile': new EditProfile(),
	'/login': new Login(),
	'/account': new Account()
}

class Page extends Block {
	constructor(props) {
		const { pathname } = document.location;
		
		const page = {};

		if ([NAME_PAGE_BY_PATHNAMES[pathname]]) {
			const Component = PAGE_BY_PATHNAMES[pathname];
			page[NAME_PAGE_BY_PATHNAMES[pathname]] = Component;
		} else {
			page['Error'] = new Error();
		}

		super({
			...props,
        	...page
		});
	}
	render() {

        const template = PAGES[document.location.pathname];

        if (template) {
            return this.compile(template);
        }

        return this.compile(`
            #{Error}
        `, {errorCode: 404});
	}
}

export default Page;
