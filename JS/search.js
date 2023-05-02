const form = document.querySelector('form');
const input = document.querySelector('#search');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Отмена стандартного поведения формы

    const searchTerm = input.value.trim(); // Получение значения поля ввода и удаление пробелов с начала и конца
    // Отправка данных на сервер с помощью AJAX, fetch или других методов
    console.log(searchTerm);
    sessionStorage.setItem('searchTerm', searchTerm);
});

const searchTerm = sessionStorage.getItem('searchTerm');

// Если значение найдено, установить его в поле поиска
// if (searchTerm) {
//     input.value = searchTerm;
// }

const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    form.submit(); // Сабмит формы по клику на иконку
});

input.addEventListener('click', (event) => {
    event.preventDefault(); // Отмена сабмита формы по клику на input
});



