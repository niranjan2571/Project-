// Navbar toggle for mobile

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// Contact form submission (just demo)

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you for contacting me! I’ll get back to you soon.");

  form.reset();

});