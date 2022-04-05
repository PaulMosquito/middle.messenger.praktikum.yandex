import { renderDOM }  from './core';

import Login from './pages/login';

const login = new Login();

document.addEventListener('DOMContentLoaded', () => {
	renderDOM(login);
});
