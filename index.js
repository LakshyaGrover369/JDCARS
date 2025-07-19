
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenuBtn.innerHTML = navList.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        navList.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize elements as invisible
fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(2rem)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContent);

function populateCars() {
    const carsGrid = document.getElementById('carsGrid');
    carsGrid.innerHTML = siteData.cars.map(car => `
        <div class="car-card fade-in ${car.delay}">
            <div class="car-images-gallery">
                ${car.images.map(img => `<img src="${img}" alt="${car.name}">`).join('')}
            </div>
            <div class="car-content">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-details">
                    <span class="car-detail"><i class="fas fa-car"></i> ${car.type}</span>
                    <span class="car-detail"><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span class="car-detail"><i class="fas fa-tachometer-alt"></i> ${car.mileage}</span>
                </div>
                <div class="car-price">
                    <div class="price">₹${car.price} <span>/day</span></div>
                    <a href="#contact" class="buy-btn">Buy Now</a>
                </div>
            </div>
        </div>
    `).join('');
}