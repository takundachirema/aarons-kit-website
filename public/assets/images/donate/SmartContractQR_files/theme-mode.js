if (window) {
	const name = "darkMode=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			if(c.substring(name.length, c.length) === 'true') {
				document.body.classList.add("dark-mode");
			}
		}
	}
}