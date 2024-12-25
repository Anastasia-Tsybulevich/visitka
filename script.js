document.getElementById('burger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Переключаем класс "active", чтобы показывать/скрывать меню
});
