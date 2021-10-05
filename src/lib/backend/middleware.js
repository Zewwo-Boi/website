const isMobile = require("./middlewares/isMobile");

module.exports = (req, res, next) => {
	try {
		isMobile(req, res);
	} catch (lol) {}
	next();
};
