
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) {
        console.error("Navbar elements not found!");
        return;
    }

    menuBtn.addEventListener("click", function (event) {
        navLinks.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});


