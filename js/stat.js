'use strict';

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 20;
var BAR_WIDTH = 40;
var BAR_MAXHEIGHT = 150;
var GAP_COLUMN = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + GAP, CLOUD_Y + GAP + GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + GAP, CLOUD_Y + GAP + GAP + GAP + TEXT_WIDTH);

  var stepX = BAR_WIDTH + GAP;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    stepX += BAR_WIDTH + GAP_COLUMN;
    ctx.fillStyle = '#000';
    var BAR_HEIGHT = BAR_MAXHEIGHT * Math.round(times[i]) / maxTime;
    ctx.fillText(Math.round(times[i]), stepX, CLOUD_HEIGHT - TEXT_WIDTH - BAR_HEIGHT - GAP);
    ctx.fillStyle = 'hsl(240,' + randomInteger(1, 100) + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(stepX, CLOUD_HEIGHT - TEXT_WIDTH - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], stepX, CLOUD_HEIGHT);
  }
};
