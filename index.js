import * as $ from "./node_modules/jquery/dist/jquery.js";
import * as bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.js";

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
