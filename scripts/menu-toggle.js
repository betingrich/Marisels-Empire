document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.getElementById('nav-menu');

    function toggleMenu() {
        navMenu.classList.toggle('show');
    }

    menuIcon.addEventListener('click', toggleMenu);

    // Close the menu if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});
