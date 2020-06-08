'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var SETUP_WINDOW = document.querySelector('.setup');


// активация окна установок
SETUP_WINDOW.classList.remove('hidden');

//показываем меню выбора персонажей
document.querySelector('.setup-similar').classList.remove('hidden')
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

//генерация имени и фаимилии персонажа
var names = [];
for (var j = 0; j < NAMES.length; j++){
  var randomIndexName = Math.floor(Math.random() * NAMES.length);
  var randomIndexSurname = Math.floor(Math.random() * SURNAMES.length);

  var nameOut = NAMES[randomIndexName];
  var surnameOut = SURNAMES[randomIndexSurname];

  var nameWizard =  nameOut + surnameOut;

  names.push(nameWizard);
};
//генерация случайного цветс глаз
var colors = [];
for (var w = 0; w < coatColor.length; w++){
  var  randomIndexColor= Math.floor(Math.random() * coatColor.length);
  var coatWizard = coatColor[randomIndexColor];
  colors.push(coatWizard);
};
//генерация случайного цвета глаз
var eyes = [];
for (var x = 0; x < coatColor.length; x++){
  var  randomIndexEye= Math.floor(Math.random() * eyesColor.length);
  var eyesWizard = eyesColor[randomIndexEye];
  eyes.push(eyesWizard);
};

// массив параметров персонажа
var wizards = [
  {
    name: names[0],
    coatColor: colors[0],
    eyesColor: eyes[0]
  },
  {
    name: names[1],
    coatColor: colors[1],
    eyesColor: eyes[1]
  },
  {
    name: names[2],
    coatColor: colors[2],
    eyesColor: eyes[2]
  },
  {
    name: names[3],
    coatColor: colors[3],
    eyesColor: eyes[3]
  }
];
//создаем персонажей
var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

SETUP_WINDOW.querySelector('.setup-similar').classList.remove('hidden');

