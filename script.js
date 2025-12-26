const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

function toggleMenu() {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
}

menuBtn.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
});