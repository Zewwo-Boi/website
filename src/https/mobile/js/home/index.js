let isMobile

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = true
} else {
	isMobile = false
};


if (!isMobile) {
	window.location.replace(`http://${window.location.hostname}:${window.location.port}`);
};