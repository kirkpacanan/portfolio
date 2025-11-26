const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Save preference
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
