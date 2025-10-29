# Quick Start Guide - Martensite Lease Services Website

## 🚀 Get Up and Running in 2 Minutes

### Step 1: Open the Website
1. Navigate to the `martensite-website` folder
2. Double-click on `index.html`
3. The website will open in your default browser

That's it! The website is now running locally on your computer.

---

## 📝 Quick Customization Checklist

### Update Contact Information (5 minutes)

Open `index.html` and search for these placeholders to update:

- [ ] `(204) XXX-XXXX` - Replace with actual phone number
- [ ] `info@martensite.ca` - Confirm or update email
- [ ] `www.martensite.ca` - Confirm website URL
- [ ] Social media links in footer (Instagram, Facebook, Twitter, LinkedIn)

**Search and replace all instances!**

### Update Business Details (Optional)

If you want to modify:
- Company tagline
- Service descriptions
- Pricing amounts
- Statistics in About section

All content is in `index.html` with clear section comments.

---

## 🎨 Change Colors

### Quick Color Change
Open `styles/main.css` and modify these variables (around line 10):

```css
--primary-blue: #1e40af;        /* Main brand color */
--secondary-blue: #0ea5e9;      /* Accent color */
```

Use a color picker to get hex codes: https://htmlcolorcodes.com/color-picker/

---

## 📱 Test on Mobile

1. Open the website in your browser
2. Press `F12` (or `Cmd+Option+I` on Mac)
3. Click the device toolbar icon (phone/tablet icon)
4. Select different device sizes to test

---

## 🖼️ Add Your Logo

1. Create an `images` folder in the `martensite-website` directory
2. Add your logo file (e.g., `logo.png`)
3. In `index.html`, find the logo section (around line 29):

```html
<!-- Replace this: -->
<div class="logo">
    <i class="fas fa-home-lg-alt"></i>
    <span class="logo-text">Martensite</span>
</div>

<!-- With this: -->
<div class="logo">
    <img src="images/logo.png" alt="Martensite Lease Services">
</div>
```

4. Add this CSS to `styles/main.css`:

```css
.logo img {
    height: 50px;
    width: auto;
}
```

---

## 📧 Connect Contact Form

The form currently shows a success message without sending data.

### To connect to email:

**Option 1: Use Formspree (Easiest - Free tier available)**
1. Go to https://formspree.io
2. Create an account and get your form endpoint
3. Update the form in `index.html`:

```html
<form class="contact-form" id="contactForm" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
```

**Option 2: Custom Backend**
Modify `scripts/main.js` in the `initContactForm` function to send to your API.

---

## 🌐 Publish Your Website

### Option 1: Netlify (Recommended - Free)
1. Go to https://www.netlify.com
2. Drag and drop the entire `martensite-website` folder
3. Get instant free hosting with HTTPS

### Option 2: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in repository settings

### Option 3: Traditional Hosting
Upload all files via FTP to your web hosting provider.

---

## ✅ Pre-Launch Checklist

Before making the site live:

- [ ] All placeholder text replaced
- [ ] Contact information updated (phone, email, address)
- [ ] Pricing information confirmed and accurate
- [ ] Social media links updated
- [ ] Contact form tested and working
- [ ] Website tested on:
  - [ ] Desktop Chrome
  - [ ] Desktop Firefox/Safari
  - [ ] Mobile phone (Android/iOS)
  - [ ] Tablet
- [ ] All images added and optimized
- [ ] Company logo added
- [ ] Spell-check all content
- [ ] Legal pages added (Privacy Policy, Terms of Service)

---

## 🆘 Common Issues & Solutions

### Issue: Styles not loading
- **Solution**: Make sure `styles` folder is in the same directory as `index.html`
- Check that file names match exactly (case-sensitive on some servers)

### Issue: Mobile menu not working
- **Solution**: Ensure `scripts/main.js` is loaded
- Check browser console (F12) for JavaScript errors

### Issue: Links not scrolling smoothly
- **Solution**: Some browsers require HTTPS for smooth scroll
- Works perfectly when published online

### Issue: Form not submitting
- **Solution**: This is expected! The form needs to be connected to a backend service (see "Connect Contact Form" section above)

---

## 📚 Need More Help?

- Full documentation: See `README.md`
- Browser console: Press F12 to see any errors
- Contact: info@martensite.ca

---

## 🎯 Next Steps

1. ✅ Open and view the website locally
2. ✅ Update all placeholder content
3. ✅ Test on different devices
4. ✅ Connect contact form
5. ✅ Choose a hosting provider
6. ✅ Publish and share!

---

**You're all set! 🎉**

The website is production-ready once you've updated the placeholder content.

*If you need to make design changes or add features, refer to the detailed README.md file.*

