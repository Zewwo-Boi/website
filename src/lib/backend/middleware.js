module.exports = (req, res) => {
	function isMobile(useragent) {
		let isMobile;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(useragent)) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		return isMobile;
	}
	if (isMobile(req.get("user-agent")) && !req.originalUrl.startsWith("/m")) {
		res.redirect(`${req.protocol}://${req.get("host")}/m${req.originalUrl}`);
	} else if (!isMobile(req.get("user-agent")) && req.originalUrl.startsWith("/m")) {
		res.redirect(`${req.protocol}://${req.get("host")}${req.originalUrl.slice(2)}`);
	}
};
