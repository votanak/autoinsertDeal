// Функция для установки фокуса в поле поиска
function focusSearchField() {
  const searchField = document.querySelector('input.ymaps-2-1-79-searchbox-input__input'); // измените селектор на тот, который соответствует полю поиска на странице
  if (searchField) {
    searchField.focus();
  } else {
    console.error('Поле поиска не найдено');
  }
}

// Проверяем, если поле доступно сразу
focusSearchField();

// Также устанавливаем наблюдателя за изменением DOM, на случай если поле будет добавлено позже
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    focusSearchField();
  });
});

observer.observe(document.body, { childList: true, subtree: true });
