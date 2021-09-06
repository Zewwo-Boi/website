const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');

let settings = require('../../settings/settings.json');

function getAbsolutePath(_) {
	return path.join(__dirname, _);
}

app.use(express.static(getAbsolutePath('../../https/')));
app.use(compression());

app.get('/d', (req, res) => {
	res.sendFile(getAbsolutePath('../../https/desktop/html/home/index.html'));
});

app.get('/m', (req, res) => {
	res.sendFile(getAbsolutePath('../../https/mobile/html/home/index.html'));
});

app.get('/', (req, res) => {
	res.sendFile(getAbsolutePath('../../https/desktop/html/home/index.html'));
});

app.listen(process.env.PORT || 8000);
