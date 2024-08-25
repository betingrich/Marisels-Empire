// scripts/menu-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
