// JavaScript code for handling dynamic interactions in the link tree
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});