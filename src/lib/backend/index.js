const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const routes = require("./routes");
const middleware = require("./middleware");
const uglify = require("uglify-js");
const cookieParser = require("cookie-parser");
const { cookie } = require("express/lib/response");

function getAbsolutePath(_) {
	return path.join(__dirname, _);
}
app.use(compression());
app.use(cookieParser());
app.use(express.static(getAbsolutePath("../../https/")));

// Routes & Middleware combined
app.use(routes);

// Error 404
app.use(function (req, res, next) {
	res.status(404).sendFile(getAbsolutePath("../../https/desktop/html/404.html"));
});

// Listen at port 8000
app.listen(process.env.PORT || 8000);
