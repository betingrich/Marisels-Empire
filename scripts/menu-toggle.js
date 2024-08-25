// scripts/menu-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Hide the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});
