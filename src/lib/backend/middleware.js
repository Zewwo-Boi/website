module.exports = (req, res) => {
	try {
		if (!req.cookies.isRedirectedMobile) require("./middlewares/isMobile")(req, res);
	} catch (lol) {
		console.error(lol);
	}
};
