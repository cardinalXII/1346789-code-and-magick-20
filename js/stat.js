'use strict';

var FONT = '16px PT Mono';
var CLOUD_WIDTH = 420;/* размеры облака*/
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;/* координаты начального облака*/
var CLOUD_Y = 10;/* координаты начального облака*/
var CLOUD_X_START_TEXT = 120;
var CLOUD_Y_START_TEXT = 265;
var CLOUD_Y_START_GIST = 100;
var CLOUD_X_START_GIST = 120;
var GAP = 10; /* отступ тени*/
var GAP_TEXT = 50;
var FONT_GAP = 16;/*отступ на размер шрифта*/
var TEXT_WIDTH = 10;/*ширина текста*/
var BAR_WIDTH = 40;/*ширина столбца*/
var barWidthMax = 150;/*высота столбца максимальная*/

/*рисует облако*/
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/*находит максимальное количество игроков*/
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


/*рисует облако со статистикой*/
window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');/*рисует облако-тень*/
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');/*рисует облако*/

   /*рисует хедер*/
  ctx.fillStyle = '#000';
  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 60);

  /*рисует именя игроков*/
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++){
    ctx.fillText(players[i], CLOUD_X_START_TEXT  + GAP_TEXT + ((GAP_TEXT * 2) * i), CLOUD_Y_START_TEXT);
    ctx.fillRect(CLOUD_X_START_TEXT + GAP_TEXT + ((GAP_TEXT * 2) * i), CLOUD_Y_START_GIST, BAR_WIDTH,(barWidthMax * times[i]) / maxTime);
  };


};

/*ctx.fillRect(CLOUD_X_START_TEXT + GAP_TEXT + ((GAP_TEXT * 2) * i), CLOUD_Y_START_GIST, BAR_WIDTH,(barWidthMax * times[i]) / maxTime);*/
