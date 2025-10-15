# Martensite Lease Services Ltd. - Website

A modern, responsive website for **Martensite Lease Services Ltd.**, a professional property turnover company specializing in end-of-lease services including deep cleaning, painting, and damage repairs.

## 🎯 Project Overview

This website showcases Martensite Lease Services' offerings with a clean, professional design using blue and white as primary brand colors. The site is built with modern web technologies and follows best practices for responsive design, accessibility, and user experience.

## ✨ Features

### Design & User Experience
- **Modern, Professional Design**: Clean layout with bold typography and blue/white color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll animations and interactive hover effects
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Fast Loading**: Optimized performance with minimal dependencies

### Key Sections

1. **Hero Section**
   - Company name and tagline
   - Location information (Winnipeg & Surrounding Areas)
   - Call-to-action buttons
   - Key feature highlights

2. **Services Section**
   - Three main services with detailed features:
     - Deep Cleaning
     - One-Coat Painting
     - Damage Repairs
   - Clear pricing tiers (Basic, Pro, Excel)
   - Core promises (No hidden fees, On-time delivery, Quality guarantee)

3. **About Section**
   - Company overview
   - Target audience (Landlords, Realtors, Property Managers, Multi-Unit Owners)
   - Statistics and achievements

4. **Contact Section**
   - Contact information (phone, email, website)
   - Quote request form with validation
   - Special offer display (20% OFF First Unit)

5. **Footer**
   - Social media links
   - Quick navigation
   - Copyright information

### Interactive Features
- Mobile-responsive navigation menu
- Smooth scrolling between sections
- Active navigation highlighting
- Back-to-top button
- Form validation and submission
- Scroll-triggered animations
- Interactive pricing cards

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **JavaScript (ES6+)**: Vanilla JS for interactivity
- **Font Awesome**: Icons (via CDN)
- **Google Fonts**: Montserrat (headings) and Open Sans (body text)

## 📁 Project Structure

```
martensite-website/
│
├── index.html              # Main HTML file with all sections
├── README.md              # This file
│
├── styles/
│   ├── main.css          # Main stylesheet with theme and components
│   └── responsive.css    # Responsive design styles for mobile/tablet
│
└── scripts/
    └── main.js           # JavaScript for navigation, forms, and interactions
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or package managers required

### Installation

1. **Download or Clone the Repository**
   ```bash
   # If you have the files, navigate to the directory
   cd martensite-website
   ```

2. **Open in Browser**
   - Simply double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" your preferred browser

3. **Use a Local Server (Optional but Recommended)**
   
   Using Python (if installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Using Node.js (if installed):
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run server
   http-server
   ```
   
   Using PHP (if installed):
   ```bash
   php -S localhost:8000
   ```
   
   Then open your browser and navigate to `http://localhost:8000`

## 🎨 Customization

### Colors
The color scheme can be easily modified by changing CSS variables in `styles/main.css`:

```css
:root {
    --primary-blue: #1e40af;        /* Main brand blue */
    --primary-blue-dark: #1e3a8a;   /* Darker shade for hover states */
    --primary-blue-light: #3b82f6;  /* Lighter shade for accents */
    --secondary-blue: #0ea5e9;      /* Secondary accent color */
    /* ... other variables */
}
```

### Typography
Fonts can be changed by modifying the Google Fonts import in `index.html` and updating the CSS variables:

```css
:root {
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Open Sans', sans-serif;
}
```

### Content
All content can be edited directly in `index.html`. The structure uses semantic HTML elements for easy identification:
- Sections: `<section id="home">`, `<section id="services">`, etc.
- Headings: Clearly marked with `<h1>`, `<h2>`, etc.
- Content blocks: Wrapped in semantic containers with descriptive class names

### Adding Images
To replace placeholder images with actual photos:

1. Add your images to an `images/` folder
2. Update the image placeholder in the About section:
   ```html
   <div class="image-placeholder">
       <img src="images/your-image.jpg" alt="Description">
   </div>
   ```

## 📱 Responsive Breakpoints

The website is optimized for the following breakpoints:

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1024px
- **Mobile**: 480px to 768px
- **Small Mobile**: Below 480px

## ✅ Browser Compatibility

Tested and compatible with:
- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Safari (latest)
- ✅ Microsoft Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Maintenance

### Updating Contact Information
Edit the following sections in `index.html`:
- Contact section: Lines with phone, email, website
- Footer: Contact information block

### Updating Pricing
Modify the pricing cards in the Services section. Each card has:
- Title and subtitle
- Price amount
- List of features
- Call-to-action button

### Form Submission
The contact form currently uses a simulated submission. To connect to a real backend:

1. Open `scripts/main.js`
2. Find the `initContactForm` function
3. Replace the `setTimeout` simulation with an actual API call:

```javascript
// Example using Fetch API
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');
    contactForm.reset();
})
.catch(error => {
    showNotification('Something went wrong. Please try again.', 'error');
});
```

## 🎯 SEO Optimization

The website includes basic SEO optimization:
- Semantic HTML5 elements
- Meta descriptions
- Descriptive page title
- Alt text for images (when added)
- Proper heading hierarchy

### Additional SEO Recommendations:
1. Add a `sitemap.xml` file
2. Create a `robots.txt` file
3. Implement structured data (Schema.org markup)
4. Add Open Graph tags for social media sharing
5. Optimize images (compress and use WebP format)

## 📈 Performance

Current optimizations:
- Minimal external dependencies (only Font Awesome and Google Fonts)
- CSS organized for efficient loading
- JavaScript uses event delegation and debouncing
- Smooth scroll behavior with performance considerations

### Further Optimization:
- Minify CSS and JavaScript for production
- Use a CDN for static assets
- Implement lazy loading for images
- Add service worker for offline functionality

## 🤝 Contributing

To contribute or make modifications:

1. Keep the code clean and well-commented
2. Follow the existing code style and structure
3. Test on multiple browsers and devices
4. Update this README if adding new features

## 📄 License

This website template is created for **Martensite Lease Services Ltd.**

## 📞 Support

For questions or support regarding this website:
- Email: info@martensite.ca
- Website: www.martensite.ca
- Phone: (204) XXX-XXXX

## 🎉 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Color palette inspired by professional service industry standards

---

**Built with ❤️ for Martensite Lease Services Ltd.**

*Last Updated: October 2025*

