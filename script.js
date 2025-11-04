// Alternar idioma
document.getElementById('lang-toggle').addEventListener('click', function() {
    const ptElements = document.querySelectorAll('.lang-pt');
    const enElements = document.querySelectorAll('.lang-en');
    ptElements.forEach(el => el.classList.toggle('hidden'));
    enElements.forEach(el => el.classList.toggle('hidden'));
});

// Animações de entrada (Intersection Observer)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});