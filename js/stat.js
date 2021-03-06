'use strict';

var FONT = '16px PT Mono';
var CLOUD_WIDTH = 420;// размеры облака
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;// координаты начального облака
var CLOUD_Y = 10;// координаты начального облака
var CLOUD_X_START_TEXT = 120;
var CLOUD_Y_START_TEXT = 265;
var CLOUD_Y_START_GIST = 120;
var GAP = 10;// отступ тени
var GAP_TEXT = 50;
var BAR_WIDTH = 40;// ширина столбца
var BAR_HEIGHT_MAX = 150;// высота столбца максимальная

// рисует облако
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// находит максимальное количество игроков
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


// рисует облако со статистикой
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');// рисует облако-тень
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');// рисует облако
  // рисует хедер
  ctx.fillStyle = '#000';
  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 60);

  // вычисляет максимальное время
  var maxTime = getMaxElement(times);

  // рисует граффик победителей
  for (var i = 0; i < players.length; i++) {
    // рисует имена и время победителей
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X_START_TEXT + GAP_TEXT + ((GAP_TEXT * 2) * i), CLOUD_Y_START_TEXT);
    ctx.fillText(parseInt(times[i], 10), CLOUD_X_START_TEXT + GAP_TEXT + ((GAP_TEXT * 2) * i), CLOUD_Y_START_GIST + (CLOUD_Y_START_GIST - (BAR_HEIGHT_MAX * times[i]) / maxTime) - GAP);
    // задает цвет столбцов кроме "Вы"
    var saturation = Math.floor(Math.random() * 100);
    var color = 'hsl(234, 100%,' + saturation + '%)';
    // рисует столбцы гистограммы
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X_START_TEXT + GAP_TEXT + ((GAP_TEXT * 2) * i), CLOUD_Y_START_GIST + (CLOUD_Y_START_GIST - (BAR_HEIGHT_MAX * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT_MAX * times[i]) / maxTime);
    // задает цвет столбцу со значением "Вы" и перерисовывает гистограмму
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X_START_TEXT + GAP_TEXT + ((GAP_TEXT * 2) * i), CLOUD_Y_START_GIST + (CLOUD_Y_START_GIST - (BAR_HEIGHT_MAX * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT_MAX * times[i]) / maxTime);
    }
  }
};
