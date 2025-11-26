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

const revealTargets = document.querySelectorAll(
    '.site-nav, .hero-grid, .hero-photo, .floating-card, main section, footer'
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: '0px 0px -5% 0px',
    }
);

revealTargets.forEach((target, index) => {
    target.classList.add('reveal');
    target.style.setProperty('--index', index);
    revealObserver.observe(target);
});
