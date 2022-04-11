export default function renderDOM(block) {

	const root = document.querySelector('#app');

	root.innerHTML = '';
	root.appendChild(block.getContent());
}
