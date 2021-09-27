const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const routes = require("./routes");
const middleware = require("./middleware");

function getAbsolutePath(_) {
	return path.join(__dirname, _);
}

app.use(express.static(getAbsolutePath("../../https/")));
app.use(compression());

// Routes & Middleware combined
app.use(routes);

// Error 404
app.use(function (req, res, next) {
	res.status(404).sendFile(getAbsolutePath("../../https/desktop/html/404/index.html"));
});

// Listen at port 8000
app.listen(process.env.PORT || 8000);
