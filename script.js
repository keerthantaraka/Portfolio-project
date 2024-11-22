// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Highlight active navbar links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
});
