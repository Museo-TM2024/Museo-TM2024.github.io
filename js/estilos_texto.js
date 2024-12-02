 document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que el elemento es visible
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});