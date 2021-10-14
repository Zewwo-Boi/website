const root = document.querySelector(":root");

function toggleV() {
	const target = document.getElementById("show-password");
	const _ = document.getElementById("passwordInput");
	if (!target.checked) {
		_.setAttribute("type", "text");
	} else {
		_.setAttribute("type", "password");
	}
}

function validate(type, value, border1, border2) {
	if (type == "email") {
		if (value == "") {
			document.getElementById("email").innerHTML = "Please enter an email";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--emailField-color`, "red");
			return false;
		}
		let emailregex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
		if (!emailregex.test(value)) {
			document.getElementById("emailInput");
			document.getElementById("email").innerHTML = "Invalid Email";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--emailField-color`, "red");
			return false;
		} else {
			document.getElementById("email").innerHTML = "";
			border1.style.borderColor = "#afafaf";
			border2.style.borderColor = "black";
			root.style.setProperty(`--emailField-color`, "black");
			return true;
		}
	}
	if (type == "password") {
		if (value == "") {
			document.getElementById("password").innerHTML = "Please enter a password";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--passwordField-color`, "red");
			return false;
		}

		if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
			document.getElementById("password").innerHTML = "Minimum 8 characters, 1 or more letter(s) and number(s) required";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--passwordField-color`, "red");
			return false;
		} else {
			document.getElementById("password").innerHTML = "";
			border1.style.borderColor = "#afafaf";
			border2.style.borderColor = "black";
			root.style.setProperty(`--passwordField-color`, "black");
			return true;
		}
	}
	if (type == "username") {
		if (value == "") {
			document.getElementById("username").innerHTML = "Please enter a username";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--usernameField-color`, "red");
			return false;
		}
		if (value.length < 5) {
			document.getElementById("username").innerHTML = "Enter at least 6 characters";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--usernameField-color`, "red");
			return false;
		} else {
			document.getElementById("username").innerHTML = "";
			border1.style.borderColor = "#afafaf";
			border2.style.borderColor = "black";
			root.style.setProperty(`--usernameField-color`, "black");
			return true;
		}
	}
}

function signup() {
	let email = document.getElementById("emailInput");
	let password = document.getElementById("passwordInput");
	let username = document.getElementById("usernameInput");
	let form = document.getElementById("container");
	let emailField = document.getElementById("field-email");
	let passwordField = document.getElementById("field-password");
	let usernameField = document.getElementById("field-username");

	validate(`email`, email.value, emailField, form);
	validate(`password`, password.value, passwordField, form);
	validate(`username`, username.value, usernameField, form);

	if (validate(`email`, email.value, emailField, form) && validate(`password`, password.value, passwordField, form) && validate(`username`, username.value, usernameField, form)) {
		/**
		 *
		 *
		 *
		 * Start making the API
		 *
		 *
		 *
		 **/
	}
}
window.addEventListener("load", () => {
	document.getElementById("signup-link").href = `http://${window.location.hostname}:${window.location.port}/login`;
	document.getElementById("FjfFDN").href = `http://${window.location.hostname}:${window.location.port}`;
	document.getElementById("signup-submit").addEventListener("click", function () {
		document.getElementById("container").classList.add("submitted");
	});
	document.getElementById("container").addEventListener("submit", (a) => {
		a.preventDefault();
	});
});
