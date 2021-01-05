const container = document.querySelectorAll('.faq');
const btn = document.querySelectorAll('.faq-toggle');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});
