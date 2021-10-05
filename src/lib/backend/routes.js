const express = require("express");
const router = express.Router();
const path = require("path");
const middleware = require("./middleware");

// Routes
const index = require("./routes/index");
const login = require("./routes/login");

function getAbsolutePath(_) {
	return path.join(__dirname, _);
}

router.use((req, res, next) => {
	try {
		middleware(req, res, next);
	} catch (err) {}
});

// Index
router.get("/", index.desktop);
router.get("/m", index.mobile);

// Login
router.get("/login", login.desktop);
router.get("/m/login", login.mobile);

module.exports = router;
