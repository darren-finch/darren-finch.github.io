import "jquery";
import "bootstrap";
import "./main.css"

document.addEventListener("DOMContentLoaded", () => {
	const navbarToggler = document.querySelector(".navbar-toggler");

	navbarToggler.addEventListener("click", () => {
        if (navbarToggler.classList.contains("active")) {
            navbarToggler.classList.remove("active");
        } else {
            navbarToggler.classList.add("active");
        }
	});
});
