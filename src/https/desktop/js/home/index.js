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
	document.getElementById(
		"header-login-link"
	).href = `http://${window.location.hostname}:${window.location.port}/login`;

	// Add observer for top header
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const element = document.getElementById("top-header");

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

	// Add observer for slide 1
	const observer2 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const element = document.getElementById("slide-expanded-1");

			if (entry.isIntersecting) {
				element.classList.add("slide-expanded-1-reveal");
				const slideExpanded1 = document.querySelector(
					".slide-expanded-1-reveal"
				);
				const slideExpanded1Text = document.getElementById(
					"#slide-expanded-text-1"
				);

				slideExpanded1.addEventListener("animationend", () => {
					//TODO: Add text reveal animation
				});
			}
		});
	});
	observer2.observe(document.getElementById("slide-expanded-1"));

	// Add observer for slide 2
	const observer3 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const element = document.getElementById("slide-expanded-2");

			if (entry.isIntersecting) {
				element.classList.add("slide-expanded-2-reveal");
			}
		});
	});
	observer3.observe(document.getElementById("slide-expanded-2"));
});
