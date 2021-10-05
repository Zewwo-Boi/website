const path = require("path");

exports.desktop = (req, res) => {
	res.sendFile(path.join(__dirname, "../../../https/desktop/html/home.html"));
};

exports.mobile = (req, res) => {
	res.sendFile(path.join(__dirname, "../../../https/mobile/html/home.html"));
};
