const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// Close mobile menu when clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Simple fade-in animation on scroll
const sections = document.querySelectorAll("section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;


        if(sectionTop < screenPosition){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

};


sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all .7s ease";
});


window.addEventListener("scroll", revealSections);

revealSections();


// Contact form demo message
const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit", (event)=>{

        event.preventDefault();

        alert("Thanks for contacting SparklePro! We will get back to you soon.");

        contactForm.reset();

    });

}w