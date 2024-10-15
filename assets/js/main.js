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

// Disable right-click on all images
document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
    }
});

// Disable drag-and-drop on all images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function(event) {
        event.preventDefault();
    });
});

// Disable long press to save on touch devices
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
});

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


window.onscroll = function() {
    var scrollProgress = document.querySelector(".scroll-progress");
    var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (windowScroll / windowHeight) * 100;

    scrollProgress.style.width = scrollPercent + "%";
};

// Load the image dynamically using JavaScript
window.onload = function() {
    const wrapper = document.getElementById('profile-img-wrapper');
    const img = document.createElement('img');
    img.src = 'assets/images/person.jpg';
    img.alt = 'Profile Image';
    img.className = 'profile-img shadow-img';
    wrapper.appendChild(img);
};

