document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Optional: Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});
