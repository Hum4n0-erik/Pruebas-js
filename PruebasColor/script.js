//  Coge la opcion de theme toggle en la checkbox
const themeToggle = document.getElementById('theme-toggle');

// Funcion de toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute
    ('data-theme');
    if(currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // Cambiara el tema a claro gracias al localStorage
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        // Cambiara el tema a oscuro gracias al localStorage
    }
}

// Chrck for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;  // Cambiara el modo en el que esta, indicandole ahora que esta en un modo de oscuridad
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.checked = false; // Cambiara el modo en el que esta, indicandole ahora que esta en un modo de luz
}

// Añadira los nuevos cambios del CSS
themeToggle.addEventListener('change', toggleTheme);