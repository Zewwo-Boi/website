let isMobile;

if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	isMobile = true;
} else {
	isMobile = false;
}

if (isMobile) {
	window.location.replace(`http://localhost:8000/m`);
}

console.log('Loaded');