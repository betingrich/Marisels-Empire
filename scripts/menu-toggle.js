document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    }

    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', toggleMenu);

    // Close the menu if clicking outside of it
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('nav-menu');
        if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});
