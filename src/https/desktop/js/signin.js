const root = document.querySelector(":root");
let type;

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
			document.getElementById("email").innerHTML = "Please enter an email or a username";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--emailField-color`, "red");
			return false;
		}
		let emailregex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
		if (!emailregex.test(value) && value.length >= 5) {
			document.getElementById("email").innerHTML = "";
			border1.style.borderColor = "black";
			border2.style.borderColor = "black";
			root.style.setProperty(`--emailField-color`, "black");
			type = "username";
			return true;
		} else if (emailregex.test(value)) {
			document.getElementById("email").innerHTML = "";
			border1.style.borderColor = "black";
			border2.style.borderColor = "black";
			root.style.setProperty(`--emailField-color`, "black");
			type = "email";
			return true;
		} else {
			document.getElementById("email").innerHTML = "Invalid email/username";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--emailField-color`, "red");
			return false;
		}
	}
	if (type == "password") {
		if (value == "") {
			document.getElementById("password").innerHTML = "Please enter a password";
			border1.style.borderColor = "red";
			border2.style.borderColor = "red";
			root.style.setProperty(`--passwordField-color`, "red");
			return false;
		} else {
			document.getElementById("password").innerHTML = "";
			border1.style.borderColor = "black";
			border2.style.borderColor = "black";
			root.style.setProperty(`--passwordField-color`, "black");
			return true;
		}
	}
}

function login() {
	let email = document.getElementById("emailInput");
	let password = document.getElementById("passwordInput");
	let form = document.getElementById("container");
	let emailField = document.getElementById("field-email");
	let passwordField = document.getElementById("field-password");

	validate(`email`, email.value, emailField, form);
	validate(`password`, password.value, passwordField, form);

	if (validate(`email`, email.value, emailField, form) && validate(`password`, password.value, passwordField, form)) {
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
	document.getElementById("signup-link").href = `http://${window.location.hostname}:${window.location.port}/sign-up`;
	document.getElementById("FjfFDN").href = `http://${window.location.hostname}:${window.location.port}`;
	document.getElementById("login-submit").addEventListener("click", function () {
		document.getElementById("container").classList.add("submitted");
	});
	document.getElementById("container").addEventListener("submit", (a) => {
		a.preventDefault();
	});
});
