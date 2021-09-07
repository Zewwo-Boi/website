//Is it mobile?
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
	window.location.replace(
		`http://${window.location.hostname}:${window.location.port}/m`
	);
}



if (history.scrollRestoration) {
	history.scrollRestoration = "manual";
} else {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};
}

//Determine screen resolution
let resolution;
let resolutionType;

if (screen.width == 2560 && screen.height == 1440) {
	resolution = "2560x1440";
	resolutionType = "1440p";
} else if (screen.width == 1920 && screen.height == 1080) {
	resolution = "1920x1080";
	resolutionType = "1080p";
} else if (screen.width == 3840 && screen.height == 2160) {
	resolution = "3840x2160";
	resolutionType = "2160p";
}

//Is it loaded? Then run the code in the chunk below
window.addEventListener("load", () => {
	if (resolutionType === "1440p") {
		document.getElementById("header-text-div").style.top = "40%";
		document.getElementById("header-text-main").style.fontSize = "600%";
		document.getElementById("header-text-sub").style.fontSize = "450%";
	}

	document.getElementById(
		"header-login-link"
	).href = `http://${window.location.hostname}:${window.location.port}/login`;

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const element = document.getElementById("top-header");
			const elements = document.getElementsByClassName("top-header-links");

			if (entry.isIntersecting) {
				if (element.classList.contains("top-header-opacity-visible")) {
					element.classList.remove("top-header-opacity-visible");
					element.classList.add("top-header-opacity-none");
				} else {
					element.classList.add("top-header-opacity-none");
				}
			} else {
				element.classList.remove("top-header-opacity-none");
				element.classList.add("top-header-opacity-visible");
			}
		});
	});
	observer.observe(document.querySelector(".header-animation-body"));
});
