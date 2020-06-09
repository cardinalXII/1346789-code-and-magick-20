'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SETUP_WINDOW = document.querySelector('.setup');


// активация окна установок
SETUP_WINDOW.classList.remove('hidden');

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
// генерация случайного цветс глаз
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

SETUP_WINDOW.querySelector('.setup-similar').classList.remove('hidden');
