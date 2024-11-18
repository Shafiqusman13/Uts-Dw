document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

// Accordion feature
document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function () {
        const content = this.nextElementSibling;
        this.classList.toggle('active');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Show notification when name is entered
const nameInput = document.getElementById('name');
if (nameInput) {
    nameInput.addEventListener('input', function () {
        if (this.value) {
            console.log(`Hello, ${this.value}!`);

        }
    });
}