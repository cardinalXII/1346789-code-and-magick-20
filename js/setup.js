'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var WINDOW = document.querySelector('.setup');
var SETUP_OPEN = document.querySelector('.setup-open');
var SETUP_CLOSE = WINDOW.querySelector('.setup-close');

var USER_NAME_INPUT = document.querySelector('.setup-user-name');
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var WIZARD = document.querySelector('.setup-wizard');
var COAT = WIZARD.querySelector('.wizard-coat');
var EYES = WIZARD.querySelector('.wizard-eyes');
var FIREBALL = WINDOW.querySelector('.setup-fireball-wrap');

// при нажатии esc проверять обработчик
var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

// функция открытия
var openPopup = function () {
  // Показать окно
  WINDOW.classList.remove('hidden');

  // Добавить обработчики для закрытия
  document.addEventListener('keydown', onPopupEscPress);
};
// функция закрытия
var closePopup = function () {
  // Скрыть окно
  WINDOW.classList.add('hidden');

  // Удалить обработчики для закрытия
  document.removeEventListener('keydown', onPopupEscPress);


};
// активация окна установок клик
SETUP_OPEN.addEventListener('click', function () {
  openPopup();
});
// активация окна установок клавиша
SETUP_OPEN.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});
// Деактивация окна установок клик
SETUP_CLOSE.addEventListener('click', function () {
  closePopup();
});
// Деактивация окна установок клавиша
SETUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
// Блокирует escape при фокусе на имени
USER_NAME_INPUT.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});
// Разблокирует escape при фокусе на имени
USER_NAME_INPUT.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

// проверка заполнености поля ввода имени и выдача ошибок на русском
USER_NAME_INPUT.addEventListener('invalid', function () {
  if (USER_NAME_INPUT.validity.tooShort) {

    USER_NAME_INPUT.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');

  } else if (USER_NAME_INPUT.validity.tooLong) {

    USER_NAME_INPUT.setCustomValidity('Имя не должно превышать ' + MAX_NAME_LENGTH + '-ти символов');

  } else if (USER_NAME_INPUT.validity.valueMissing) {

    USER_NAME_INPUT.setCustomValidity('Обязательное поле');

  } else {

    USER_NAME_INPUT.setCustomValidity('');
  }
});

USER_NAME_INPUT.addEventListener('input', function () {
  var valueLength = USER_NAME_INPUT.value.length;

  if (valueLength < MIN_NAME_LENGTH) {

    USER_NAME_INPUT.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');

  } else if (valueLength > MAX_NAME_LENGTH) {

    USER_NAME_INPUT.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');

  } else {

    USER_NAME_INPUT.setCustomValidity('');
  }
});

// смена цвета мантии
COAT.addEventListener('click', function () {
  COAT.style.fill = colors[z];
  change();
});
// смена цвета глаз
EYES.addEventListener('click', function () {
  EYES.style.fill = eyes[z];
  change();
});
// смена цвета фаербола
FIREBALL.addEventListener('click', function () {
  FIREBALL.querySelector('input').value = fierballs[z];
  FIREBALL.style.backgroundColor = fierballs[z];
  change();
});

// показываем меню выбора персонажей
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// генерация имени и фаимилии персонажа
var names = [];
for (var j = 0; j < NAMES.length; j++) {
  var randomIndexName = Math.floor(Math.random() * NAMES.length);
  var randomIndexSurname = Math.floor(Math.random() * SURNAMES.length);

  var nameOut = NAMES[randomIndexName];
  var surnameOut = SURNAMES[randomIndexSurname];

  var nameWizard = nameOut + ' ' + surnameOut;

  names.push(nameWizard);
}
// генерация случайного цвета мантии
var colors = [];
for (var w = 0; w < NAMES.length; w++) {
  var randomIndexColor = Math.floor(Math.random() * COATCOLORS.length);
  var coatWizard = COATCOLORS[randomIndexColor];
  colors.push(coatWizard);
}
// генерация случайного цвета глаз
var eyes = [];
for (var x = 0; x < NAMES.length; x++) {
  var randomIndexEye = Math.floor(Math.random() * EYESCOLORS.length);
  var eyesWizard = EYESCOLORS[randomIndexEye];
  eyes.push(eyesWizard);
}
// генерация случайного цвета файербола
var fierballs = [];
for (var f = 0; f < NAMES.length; f++) {
  var randomIndexfierball = Math.floor(Math.random() * FIREBALLCOLORS.length);
  var fierballsWizard = FIREBALLCOLORS[randomIndexfierball];
  fierballs.push(fierballsWizard);
}
// генерация числа для выбора цвета мантии глаз и файербола из массива
var z = 0;
var change = function () {
  if (z < 8) {
    z++;
  } else {
    z = 0;
  }
};
// массив параметров персонажа
var wizards = [];
for (var y = 0; y < 4; y++) { // по условию ТЗ ограничено 4 персонажами, вслучае увеличения количества персонажей рекомендуется использовать y < NAMES.length вместо y < 4
  wizards.push({name: names[y],
    coatColor: colors[y],
    eyesColor: eyes[y]
  });
}
// создаем персонажей
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

WINDOW.querySelector('.setup-similar').classList.remove('hidden');

