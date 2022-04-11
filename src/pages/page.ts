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
import './page.css';

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
} as any;

const NAME_PAGE_BY_PATHNAMES = {
	'/': 'Login',
	'/auth': 'Auth',
	'/chat': 'Chat',
	'/edit-profile': 'EditProfile',
	'/login': 'Login',
	'/account': 'Account'
} as any;

const PAGE_BY_PATHNAMES = {
	'/': Login(),
	'/auth': Auth(),
	'/chat': Chat(),
	'/edit-profile': EditProfile(),
	'/login': Login(),
	'/account': Account()
} as any;

class Page extends Block {
	constructor() {
		const { pathname } = document.location as Location;
		

		if (NAME_PAGE_BY_PATHNAMES[pathname]) {
			const Component = PAGE_BY_PATHNAMES[pathname] ;
			
			super({
				[NAME_PAGE_BY_PATHNAMES[pathname]]:Component
			});
		} else {
			super({
				Error: Error({errorCode: 404})
			});
		}

		
	}
	render() {
        const template:string|undefined = PAGES[document.location.pathname];

        if (template) {
            return this.compile(template);
        }

        return this.compile(`
            #{Error}
        `);
	}
}

export default Page;
