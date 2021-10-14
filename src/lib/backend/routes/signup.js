const path = require("path");

exports.desktop = (req, res) => {
	res.sendFile(path.join(__dirname, "../../../https/desktop/html/signup.html"));
};

exports.mobile = (req, res) => {
	res.sendFile(path.join(__dirname, "../../../https/mobile/html/signup.html"));
};
