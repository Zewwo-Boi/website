const express = require("express");
const router = express.Router();
const path = require("path");
const middleware = require("./middleware");

function getAbsolutePath(_) {
	return path.join(__dirname, _);
}

router.use((req, res, next) => {
	middleware(req, res);
	next();
});

// Index
router.get("/", function (req, res) {
	res.sendFile(getAbsolutePath("../../https/desktop/html/home/index.html"));
});

router.get("/m", function (req, res) {
	res.sendFile(getAbsolutePath("../../https/mobile/html/home/index.html"));
});

// Login
router.get("/login", function (req, res) {
	res.sendFile(getAbsolutePath("../../https/desktop/html/login/index.html"));
});

router.get("/m/login", function (req, res) {
	res.sendFile(getAbsolutePath("../../https/mobile/html/login/index.html"));
});

module.exports = router;
