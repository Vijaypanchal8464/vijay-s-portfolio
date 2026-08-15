const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// ==============================
// MOBILE MENU
// ==============================

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ==============================
// ACTIVE NAVBAR LINK
// ==============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formMessage.textContent =
            "Thanks! Your message has been received.";

        formMessage.classList.add("success");

        contactForm.reset();

    });

}


// ==============================
// CURSOR GLOW
// ==============================

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = event.clientX + "px";
        cursorGlow.style.top = event.clientY + "px";
        cursorGlow.style.opacity = "1";

    });

}