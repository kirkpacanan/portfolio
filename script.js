const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const setTheme = (mode) => {
    body.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme', mode);
    toggleButton.textContent = mode === 'dark' ? 'Light' : 'Dark';
};

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    setTheme(storedTheme);
} else if (prefersDark.matches) {
    setTheme('dark');
} else {
    setTheme('light');
}

toggleButton.addEventListener('click', () => {
    const nextTheme = body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(nextTheme);
});

prefersDark.addEventListener('change', (event) => {
    setTheme(event.matches ? 'dark' : 'light');
});
