# JD Cars - Premium Second Hand Car Rentals

A modern, responsive website for JD Cars, a premium second-hand car rental service in Delhi.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Dynamic Content**: All content is managed through data objects
- **Easy Maintenance**: Simple data structure for easy updates
- **Modern UI**: Beautiful animations and smooth interactions
- **SEO Optimized**: Clean HTML structure and meta tags

## 📁 File Structure

```
JDCARS/
├── index.html          # Main HTML file
├── data.js            # Data configuration file
└── README.md          # This file
```

## 🔧 How to Edit Content

All website content is stored in the `data.js` file, making it easy to update without touching the HTML or CSS.

### 1. Company Information

Edit the `company` object in `data.js`:

```javascript
company: {
    name: "JD Cars",                    // Company name
    tagline: "Premium Second Hand Car Rentals",  // Tagline
    description: "Your trusted partner..."       // Company description
}
```

### 2. Hero Section

Update the hero section content:

```javascript
hero: {
    title: "Premium Second Hand Car Rentals in Delhi",
    description: "Experience the joy of driving...",
    primaryBtn: "Browse Cars",
    secondaryBtn: "Contact Us"
}
```

### 3. Navigation Menu

Add or modify navigation items:

```javascript
navigation: [
    { id: "home", text: "Home" },
    { id: "cars", text: "Cars" },
    { id: "about", text: "About" },
    { id: "contact", text: "Contact" }
]
```

### 4. Car Inventory

Add, remove, or modify cars in the `cars` array:

```javascript
cars: [
    {
        id: "honda-city",           // Unique identifier
        name: "Honda City",         // Car name
        image: "image-url",         // Car image URL
        type: "Sedan",              // Car type
        fuel: "Petrol",             // Fuel type
        mileage: "35k km",          // Mileage
        price: 1499,                // Daily rental price
        delay: ""                   // Animation delay class
    }
]
```

**Car Properties:**
- `id`: Unique identifier (used for links and forms)
- `name`: Display name of the car
- `image`: URL of the car image
- `type`: Car category (Sedan, SUV, Hatchback, etc.)
- `fuel`: Fuel type (Petrol, Diesel, Electric, etc.)
- `mileage`: Current mileage
- `price`: Daily rental price in INR
- `delay`: CSS animation delay class ("", "delay-1", "delay-2")

### 5. Section Content

Update section titles and descriptions:

```javascript
sections: {
    cars: {
        title: "Our Car Collection",
        description: "Choose from our wide range..."
    },
    about: {
        title: "Why Choose JD Cars?",
        description1: "First paragraph...",
        description2: "Second paragraph...",
        image: "about-section-image-url"
    },
    contact: {
        title: "Contact Us",
        description: "Have questions about our cars...",
        infoTitle: "Get In Touch",
        infoDescription: "Visit our showroom...",
        socialTitle: "Follow Us"
    }
}
```

### 6. Statistics

Update the statistics in the about section:

```javascript
stats: [
    {
        icon: "fas fa-car",     // FontAwesome icon class
        number: "150+",         // Statistic number
        text: "Cars Available"  // Statistic description
    }
]
```

### 7. Contact Information

Update contact details:

```javascript
contact: {
    address: "Sector-17, Rohini, Delhi - 110089",
    phone: "+91 9654331128",
    email: "info@jdcars.com",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM"
}
```

### 8. Social Media Links

Update social media links:

```javascript
social: [
    { 
        platform: "facebook", 
        icon: "fab fa-facebook-f", 
        url: "https://facebook.com/jdcars" 
    }
]
```

### 9. Footer Content

Update footer links and content:

```javascript
footer: {
    quickLinks: [
        { text: "Home", href: "#home" }
    ],
    popularCars: [
        { text: "Honda City", href: "#" }
    ],
    newsletter: {
        description: "Subscribe to get updates...",
        placeholder: "Your Email"
    },
    copyright: "© 2023 JD Cars. All Rights Reserved."
}
```

## 🎨 Adding New Cars

To add a new car to the inventory:

1. Open `data.js`
2. Add a new object to the `cars` array
3. Include all required properties (id, name, image, type, fuel, mileage, price, delay)
4. Save the file and refresh the website

Example:
```javascript
{
    id: "tata-nexon",
    name: "Tata Nexon",
    image: "https://example.com/nexon-image.jpg",
    type: "Electric",
    fuel: "Electric",
    mileage: "15k km",
    price: 1799,
    delay: "delay-1"
}
```

## 🖼️ Image Guidelines

- Use high-quality images (minimum 800x600px)
- Maintain consistent aspect ratios
- Use reliable image hosting (Unsplash, your own server, etc.)
- Optimize images for web (compress to reduce file size)

## 📱 Responsive Design

The website is fully responsive and will automatically adjust to:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🚀 Deployment

To deploy the website:

1. Upload all files to your web server
2. Ensure `index.html` and `data.js` are in the same directory
3. The website will work immediately

## 🔧 Customization Tips

### Changing Colors
Edit the CSS variables in the `:root` selector in `index.html`:

```css
:root {
    --primary: #ff4d30;    /* Main brand color */
    --secondary: #2d2d2d;  /* Secondary color */
    --light: #f8f8f8;      /* Light background */
    --dark: #1a1a1a;       /* Dark text */
    --gray: #706f7b;       /* Gray text */
}
```

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding data in `data.js`
3. Create a population function in `data.js`
4. Call the function in `initializeContent()`

## 📞 Support

For any questions or support, please contact:
- Email: info@jdcars.com
- Phone: +91 9654331128

## 📄 License

This project is created for JD Cars. All rights reserved. 