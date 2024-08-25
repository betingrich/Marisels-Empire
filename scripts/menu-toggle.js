function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Close the menu if clicking outside of it
document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.querySelector('.menu-icon');
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
