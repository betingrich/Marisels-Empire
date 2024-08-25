function setTheme(theme) {
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
}

window.onload = loadTheme;
