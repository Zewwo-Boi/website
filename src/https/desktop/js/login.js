window.addEventListener("load", () => {
	const passwordVisibilityImage = document.getElementById("password-visibility-toggle");
	const passwordInput = document.getElementById("passwordInput");
	const root = document.querySelector(":root");

	passwordVisibilityImage.addEventListener("click", (event) => {
		if (passwordVisibilityImage.classList.contains("disabled")) {
			passwordVisibilityImage.classList.replace("disabled", "enabled");
			root.style.setProperty("--password-visibility-image", 'url("/public/image/svg/visibility_black_24dp.svg")');
		} else {
			passwordVisibilityImage.classList.replace("enabled", "disabled");
			root.style.setProperty("--password-visibility-image", 'url("/public/image/svg/visibility_off_black_24dp.svg")');
		}
	});
});
