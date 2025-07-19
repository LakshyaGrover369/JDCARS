// Site Data Configuration
const siteData = {
    company: {
        name: "JD Cars",
        tagline: "Premium Second Hand Car ",
        description: "Your trusted partner for premium second hand car in Delhi. Quality vehicles at affordable prices."
    },
    hero: {
        title: "Premium Second Hand Car  in Delhi",
        description: "Experience the joy of driving quality pre-owned cars at affordable prices. JD Cars offers the best selection of second hand vehicles for all your needs.",
        primaryBtn: "Browse Cars",
        secondaryBtn: "Contact Us"
    },
    navigation: [
        { id: "home", text: "Home" },
        { id: "cars", text: "Cars" },
        { id: "about", text: "About" },
        { id: "contact", text: "Contact" }
    ],
    cars: [
        {
            id: "honda-city",
            name: "Honda City",
            images: [
                "./images/hondacity11.jpeg",
                "./images/hondacity12.jpeg",
                "./images/hondacity13.jpeg",
                "./images/hondacity14.jpeg",
                "./images/hondacity15.jpeg",
                "./images/hondacity16.jpeg",
                "./images/hondacity17.jpeg",
                "./images/hondacity18.jpeg",
                "./images/hondacity19.jpeg",
            ],
            type: "Sedan",
            fuel: "Petrol",
            mileage: "35k km",
            price: 1499,
            delay: ""
        },
        {
            id: "hyundai-creta",
            name: "Hyundai Creta",
            images: [
                "./images/creta11.jpeg",
                "./images/creta12.jpeg",
                "./images/creta13.jpeg",
                "./images/creta14.jpeg",
                "./images/creta15.jpeg",
                "./images/creta16.jpeg",
                "./images/creta17.jpeg",
                "./images/creta18.jpeg",
                "./images/creta19.jpeg",
            ],
            type: "SUV",
            fuel: "Diesel",
            mileage: "42k km",
            price: 1999,
            delay: "delay-1"
        },
        {
            id: "maruti-i10HANA",
            name: "I 10 HANA",
            images: [
                "./images/i10AHNA11.jpeg",
                "./images/i10AHNA12.jpeg",
                "./images/i10AHNA13.jpeg",
                "./images/i10AHNA14.jpeg",
                "./images/i10AHNA15.jpeg",
                "./images/i10AHNA16.jpeg",
                "./images/i10AHNA17.jpeg",
                "./images/i10AHNA18.jpeg",
                "./images/i10AHNA19.jpeg",
            ],
            type: "Hatchback",
            fuel: "Petrol",
            mileage: "28k km",
            price: 1199,
            delay: "delay-2"
        },
        {
            id: "tata-bolt",
            name: "Tata Bolt",
            images: [
                "./images/tatabolt11.jpeg",
                "./images/tatabolt12.jpeg",
                "./images/tatabolt13.jpeg",
                "./images/tatabolt14.jpeg",
                "./images/tatabolt15.jpeg",
                "./images/tatabolt16.jpeg",
                "./images/tatabolt17.jpeg",
                "./images/tatabolt18.jpeg",
                "./images/tatabolt19.jpeg",
            ],
            type: "Hatchback",
            fuel: "Petrol",
            mileage: "25k km",
            price: 3999,
            delay: "delay-1"
        }
    ],
    sections: {
        cars: {
            title: "Our Car Collection",
            description: "Choose from our wide range of premium second hand cars, all thoroughly inspected and maintained for your safety and comfort."
        },
        about: {
            title: "Why Choose JD Cars?",
            description1: "At JD Cars, we understand that buying a second hand car can be a daunting experience. That's why we've made it our mission to provide only the highest quality pre-owned vehicles, each meticulously inspected and maintained to ensure your complete satisfaction.",
            description2: "With over 10 years of experience in the automotive industry, our team of experts carefully selects each vehicle in our inventory, so you can drive with confidence knowing you're getting a reliable car at an unbeatable price."
        },
        contact: {
            title: "Contact Us",
            description: "Have questions about our cars or services? Get in touch with our friendly team today.",
            infoTitle: "Get In Touch",
            infoDescription: "Visit our showroom in Rohini to test drive any of our vehicles or speak with our knowledgeable staff about your car buying needs.",
            socialTitle: "Follow Us"
        }
    },
    stats: [
        {
            icon: "fas fa-car",
            number: "150+",
            text: "Cars Available"
        },
        {
            icon: "fas fa-smile",
            number: "1000+",
            text: "Happy Customers"
        }
    ],
    contact: {
        address: "Sector-17, Rohini, Delhi - 110089",
        phone: "+91 9654331128",
        email: "info@jdcars.com",
        hours: "Mon-Sat: 9:00 AM - 8:00 PM"
    },
    social: [
        { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
        { platform: "twitter", icon: "fab fa-twitter", url: "#" },
        { platform: "instagram", icon: "fab fa-instagram", url: "#" },
        { platform: "linkedin", icon: "fab fa-linkedin-in", url: "#" }
    ],
    footer: {
        quickLinks: [
            { text: "Home", href: "#home" },
            { text: "Our Cars", href: "#cars" },
            { text: "About Us", href: "#about" },
            { text: "Contact", href: "#contact" }
        ],
        popularCars: [
            { text: "Honda City", href: "#" },
            { text: "Hyundai Creta", href: "#" },
            { text: "Maruti Swift", href: "#" },
            { text: "Toyota Innova", href: "#" }
        ],
        newsletter: {
            description: "Subscribe to get updates on new arrivals and special offers.",
            placeholder: "Your Email"
        },
        copyright: "© 2023 JD Cars. All Rights Reserved."
    }
};

// Content Population Functions
function populateNavigation() {
    const navList = document.getElementById('navList');
    navList.innerHTML = siteData.navigation.map(nav => 
        `<li><a href="#${nav.id}" class="nav-link">${nav.text}</a></li>`
    ).join('');
}

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
                    <div class="price">₹${car.price}</div>
                    <a href="#contact" class="buy-btn">Buy Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

function populateCarSelect() {
    const carSelect = document.getElementById('carSelect');
    const carOptions = siteData.cars.map(car => 
        `<option value="${car.name}">${car.name}</option>`
    ).join('');
    carSelect.innerHTML = `<option value="">Select Car of Interest</option>${carOptions}`;
}

function populateStats() {
    const aboutStats = document.getElementById('aboutStats');
    aboutStats.innerHTML = siteData.stats.map(stat => `
        <div class="stat-item">
            <div class="stat-icon">
                <i class="${stat.icon}"></i>
            </div>
            <div class="stat-text">
                <h3>${stat.number}</h3>
                <p>${stat.text}</p>
            </div>
        </div>
    `).join('');
}

function populateContactDetails() {
    const contactDetails = document.getElementById('contactDetails');
    const contactInfo = [
        { icon: "fas fa-map-marker-alt", text: siteData.contact.address },
        { icon: "fas fa-phone-alt", text: siteData.contact.phone },
        { icon: "fas fa-envelope", text: siteData.contact.email },
        { icon: "fas fa-clock", text: siteData.contact.hours }
    ];
    
    contactDetails.innerHTML = contactInfo.map(item => `
        <div class="contact-item">
            <div class="contact-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="contact-text">${item.text}</div>
        </div>
    `).join('');
}

function populateSocialLinks() {
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = siteData.social.map(social => 
        `<a href="${social.url}" class="social-link"><i class="${social.icon}"></i></a>`
    ).join('');
}

function populateFooter() {
    const footerContent = document.getElementById('footerContent');
    footerContent.innerHTML = `
        <div class="footer-col">
            <h3>${siteData.company.name}</h3>
            <p>${siteData.company.description}</p>
            <div class="social-links">
                ${siteData.social.map(social => 
                    `<a href="${social.url}" class="social-link"><i class="${social.icon}"></i></a>`
                ).join('')}
            </div>
        </div>
        <div class="footer-col">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                ${siteData.footer.quickLinks.map(link => 
                    `<li class="footer-link"><a href="${link.href}">${link.text}</a></li>`
                ).join('')}
            </ul>
        </div>
        <div class="footer-col">
            <h3>Popular Cars</h3>
            <ul class="footer-links">
                ${siteData.footer.popularCars.map(car => 
                    `<li class="footer-link"><a href="${car.href}">${car.text}</a></li>`
                ).join('')}
            </ul>
        </div>
        <div class="footer-col">
            <h3>Newsletter</h3>
            <p>${siteData.footer.newsletter.description}</p>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="${siteData.footer.newsletter.placeholder}" required>
                </div>
                <button type="submit" class="submit-btn">Subscribe</button>
            </form>
        </div>
    `;
}

// Initialize all content
function initializeContent() {
    populateNavigation();
    populateCars();
    populateCarSelect();
    populateStats();
    populateContactDetails();
    populateSocialLinks();
    populateFooter();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { siteData, initializeContent };
} 