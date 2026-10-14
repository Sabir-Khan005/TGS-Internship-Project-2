//1. Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// 2. Active Link Highlight on Scroll 
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        //Adjusting offset for the sticky header height
        if (pageYOffset >= sectionTop - 80) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#$ {current}') {
            item.classList.add('active');
        }
    });
});

// 3. Testimonials Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active-slide'));

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides[currentSlide].classList.add('active-slide');
}


nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// 4. FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Optional: Close other open FAQs
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current FAQ
        item.classList.toggle('active');
    });
});