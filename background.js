chrome.action.onClicked.addListener(async (tab) => {
  // Запускаем скрипт в основном документе
	console.clear();
  await chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true }, // Указываем allFrames: true, чтобы скрипт работал и в iframe
    function: copyTextToInput
  });
});

// Функция для копирования текста из <span> и вставки в <input>
function copyTextToInput() {
    console.log(document.title);
  // Попробуем найти название сделки
	if (document.title = "Новая задача") {
  	const tileItem = document.querySelectorAll('span[data-role="tile-item-name"]')[0];
	    console.log(tileItem);
  	const inputField = document.querySelector('input[data-bx-id="task-edit-title"]');
		console.log(inputField);
	}	else{ 
  	const tileItem = document.querySelectorAll('span[data-role="tile-item-name"]')[4];
  	const inputField = document.querySelector("input.main-mail-form-field-value");
	}

  // Если элемент найден, копируем его текст в input
  if (tileItem && inputField) {
    inputField.value = inputField.value + ' (' + tileItem.textContent + ')';
  } else {
    // Если элементы не найдены в основном документе или в текущем фрейме
    console.log("Не удалось найти нужные элементы на странице или во фрейме ", document.title);
  }
}
