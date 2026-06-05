// ── O Carousel agora funciona nativamente usando CSS Scroll Snap (mais perfomante e fluído para mobile) ──

// ── Navbar: opacidade ao rolar + hamburger ──
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
});

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ── Accordion do currículo (mobile) ──
document.querySelectorAll('.acc-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const item = trigger.closest('.acc-item');
        const isOpen = item.classList.contains('open');

        // Fecha todos
        document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));

        // Abre o clicado (toggle)
        if (!isOpen) item.classList.add('open');
    });
});

// ── Reveal ao rolar ──
const revealStyle = document.createElement('style');
revealStyle.textContent = `.reveal { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(revealStyle);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
}, { threshold: 0.1 });

window.addEventListener('load', () => {
    document.querySelectorAll('section .container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.classList.remove('reveal');
        observer.observe(el);
    });
});