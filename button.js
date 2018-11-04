var Tessel = require('tessel-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  var button = new five.Button('A2');
  var led = new five.Led('A5');
  button.on('press', () => led.on());
  button.on('hold', () => led.blink(500));
  button.on('release', () => led.stop().off());
});