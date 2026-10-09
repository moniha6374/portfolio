// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Typing animation
const typedTextElement = document.getElementById('typed-text');
const textArray = [
  'Computer Science & Engineering Student',
  'AI & ML Enthusiast',
  'Python Developer',
  'Problem Solver'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;

function typeText() {
  const currentText = textArray[textIndex];
  
  if (!isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 120;
    
    if (charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    }
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 60;
    
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      typingSpeed = 500; // Pause before next text
    }
  }
  
  setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

// Apply fade-in to key elements
const animTargets = document.querySelectorAll(
  '.skill-card, .about-card, .project-card, .timeline-content, .ach-card, .contact-card, .about-text p, .hero-content > *'
);

animTargets.forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 6) * 0.08}s`;
  observer.observe(el);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
