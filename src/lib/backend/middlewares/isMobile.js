module.exports = async (req, res) => {
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
		let url = `${req.protocol}://${req.get("host")}/m${req.originalUrl}`;
		await res.cookie("isRedirectedMobile", true, { maxAge: 1500, httpOnly: true });
		return res.redirect(url);
	}

	if (!isMobile(req.get("user-agent")) && req.originalUrl.startsWith("/m")) {
		let url = `${req.protocol}://${req.get("host")}${req.originalUrl.slice(2)}`;
		await res.cookie("isRedirectedMobile", true, { maxAge: 1500, httpOnly: true });
		return res.redirect(url);
	}
};
