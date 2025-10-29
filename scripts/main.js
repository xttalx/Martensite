/**
 * Martensite Lease Services Ltd. - Main JavaScript
 * Handles navigation, form submission, and interactive features
 */

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit rate of function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ============================================
// NAVIGATION
// ============================================

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle && navMenu) {
        // Toggle menu on button click
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Smooth scroll navigation
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            if (target && target !== '#') {
                smoothScrollTo(target);
            }
        });
    });
}

/**
 * Active navigation highlighting on scroll
 */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', debounce(highlightNavigation, 100));
}

/**
 * Sticky header on scroll
 */
function initStickyHeader() {
    const header = document.getElementById('header');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', debounce(handleScroll, 50));
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

/**
 * Show/hide back to top button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        function toggleBackToTop() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', debounce(toggleBackToTop, 100));

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// FORM HANDLING
// ============================================

/**
 * Contact form submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            // Basic validation
            if (!validateForm(data)) {
                e.preventDefault();
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Form will submit to FormSubmit service
            // The page will redirect after submission
        });
    }
}

/**
 * Form validation
 */
function validateForm(data) {
    const errors = [];

    // Check required fields
    if (!data.name || data.name.trim() === '') {
        errors.push('Please enter your name');
    }

    if (!data.email || data.email.trim() === '') {
        errors.push('Please enter your email');
    } else if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }

    if (!data.propertyAddress || data.propertyAddress.trim() === '') {
        errors.push('Please enter the property address');
    }

    if (!data.service || data.service === '') {
        errors.push('Please select a service');
    }

    // Show errors if any
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }

    return true;
}

/**
 * Email validation
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Check if notification already exists
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }

    // Set notification content and type
    notification.innerHTML = message;
    notification.className = `notification ${type} show`;

    // Auto-hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// ============================================
// ANIMATIONS
// ============================================

/**
 * Intersection Observer for fade-in animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll(
        '.service-card, .pricing-card, .promise-card, .client-type, .stat-card'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS class for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// PRICING CARD INTERACTIONS
// ============================================

/**
 * Add hover effects to pricing cards
 */
function initPricingCards() {
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Slightly scale down other cards
            pricingCards.forEach(otherCard => {
                if (otherCard !== card && !otherCard.classList.contains('featured')) {
                    otherCard.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            // Reset all cards
            pricingCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });
}

// ============================================
// NOTIFICATION STYLES
// ============================================

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: -400px;
        max-width: 350px;
        padding: 1rem 1.5rem;
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transition: right 0.3s ease;
        font-family: var(--font-body);
        font-size: 0.9375rem;
        line-height: 1.5;
    }

    .notification.show {
        right: 2rem;
    }

    .notification.success {
        border-left: 4px solid #10b981;
        color: #065f46;
    }

    .notification.error {
        border-left: 4px solid #ef4444;
        color: #991b1b;
    }

    .notification.info {
        border-left: 4px solid #3b82f6;
        color: #1e40af;
    }

    @media (max-width: 768px) {
        .notification {
            right: -100%;
            left: 1rem;
            right: 1rem;
            max-width: calc(100% - 2rem);
        }

        .notification.show {
            right: 1rem;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ============================================
// COOKIE CONSENT
// ============================================

/**
 * Initialize cookie consent banner
 */
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');
    
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice) {
        // Show banner after a short delay
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    } else if (cookieChoice === 'accepted') {
        // User already accepted, initialize ads
        initializeAds();
    }
    
    // Accept cookies
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.classList.remove('show');
            console.log('Cookies accepted');
            
            // Initialize Google AdSense
            initializeAds();
        });
    }
    
    // Reject cookies
    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieConsent.classList.remove('show');
            console.log('Cookies rejected');
            
            // Hide all ad containers
            hideAds();
        });
    }
}

/**
 * Initialize Google AdSense ads
 */
function initializeAds() {
    // Show ad containers
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        container.style.display = 'block';
    });
    
    // Push ads to AdSense
    try {
        if (typeof adsbygoogle !== 'undefined') {
            const ads = document.querySelectorAll('.adsbygoogle');
            ads.forEach(ad => {
                if (!ad.classList.contains('adsbygoogle-noablate')) {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
            });
        }
    } catch (e) {
        console.log('AdSense initialization: ', e);
    }
}

/**
 * Hide ads if cookies are rejected
 */
function hideAds() {
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        container.style.display = 'none';
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Martensite Lease Services - Website Loaded');

    // Initialize features
    initMobileMenu();
    initSmoothScroll();
    initActiveNavigation();
    initStickyHeader();
    initBackToTop();
    initContactForm();
    initScrollAnimations();
    initPricingCards();
    initCookieConsent();

    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
});

// ============================================
// WINDOW LOAD EVENT
// ============================================

window.addEventListener('load', function() {
    // Hide any loading indicators
    console.log('All resources loaded');
});

// ============================================
// HANDLE WINDOW RESIZE
// ============================================

let resizeTimer;
window.addEventListener('resize', function() {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Add CSS to stop animations during resize
const resizeStyles = document.createElement('style');
resizeStyles.textContent = `
    .resize-animation-stopper * {
        animation: none !important;
        transition: none !important;
    }
`;
document.head.appendChild(resizeStyles);

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// ============================================
// EXPORT FUNCTIONS (for testing)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        smoothScrollTo,
        isValidEmail,
        validateForm,
        showNotification
    };
}

