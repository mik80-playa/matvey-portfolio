// === Тема (светлая / тёмная) ===
(function applyThemeOnLoad() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.classList.add('dark-preload');
        document.addEventListener('DOMContentLoaded', () => {
            document.body.classList.add('dark');
        });
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // Бургер-меню
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav--open');
        });
    }

    // Тумблер темы
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Фильтры проектов
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('filter-btn--active'));
            btn.classList.add('filter-btn--active');
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.cat === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Обработка формы
function handleForm(event) {
    event.preventDefault();
    const status = document.getElementById('formStatus');
    if (status) {
        status.textContent = 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.';
        event.target.reset();
        setTimeout(() => { status.textContent = ''; }, 5000);
    }
    return false;
}
