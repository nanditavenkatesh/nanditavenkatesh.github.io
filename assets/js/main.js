// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200,
});

// Smooth Scrolling
document.querySelectorAll('.nav-link, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const buffer = 20;  // Additional buffer to prevent overlap
            const targetPosition = targetElement.offsetTop - navbarHeight - buffer;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// Highlight Active Navigation Link
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            const id = section.getAttribute('id');
            document.querySelector('.nav-link.active').classList.remove('active');
            document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
        }
    });
});

//
//document.addEventListener('scroll', function() {
//    const navbar = document.querySelector('.navbar');
//    const scrollPosition = window.scrollY;
//
//    if (scrollPosition > 100) {
//        // If scrolled away from top, show the navbar
//        navbar.classList.add('navbar-visible');
//    } else {
//        // If at the top, hide the navbar
//        navbar.classList.remove('navbar-visible');
//    }
//});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Initially hide the navbar
    navbar.classList.add('navbar-hidden');

    // Add scroll event listener
    document.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            // If scrolled down more than 100px, show the navbar
            navbar.classList.remove('navbar-hidden');
            navbar.classList.add('navbar-visible');
        } else {
            // If at the top, hide the navbar
            navbar.classList.remove('navbar-visible');
            navbar.classList.add('navbar-hidden');
        }
    });
});
