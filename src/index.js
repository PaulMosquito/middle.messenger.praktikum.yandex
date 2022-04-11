import { renderDOM } from './core';

import { Page } from './pages';

const page = new Page();

document.addEventListener('DOMContentLoaded', () => {
    renderDOM(page);
});
