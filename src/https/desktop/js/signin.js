window.addEventListener("load", () => {
	const passwordVisibilityImage = document.getElementById("password-visibility-toggle");
	const passwordInput = document.getElementById("passwordInput");

	passwordVisibilityImage.addEventListener("click", (event) => {
		if (passwordVisibilityImage.classList.contains("disabled")) {
			passwordVisibilityImage.classList.replace("disabled", "enabled");
			passwordVisibilityImage.style.backgroundImage = `url(/public/image/svg/visibility_black_24dp.svg)`;
		} else {
			passwordVisibilityImage.classList.replace("enabled", "disabled");
			passwordVisibilityImage.style.backgroundImage = `url(/public/image/svg/visibility_off_black_24dp.svg)`;
		}
	});
});
