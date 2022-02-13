const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.set('view engine', 'pug')
app.set('views', path.resolve("src/pages"));

const ROUTES = [
	'auth',
	'chat',
	'login',
	'profile',
	'edit-profile',
]

app.get('/', (req, res) => {
	res.render('chat');
});

ROUTES.forEach(route => {
	app.get(`/${route}`, (req, res) => {
		res.render(route);
	})
});


app.use((req, res) => {
	res.status(400).render('404');
	res.status(500).render('500');
});



app.listen(PORT);