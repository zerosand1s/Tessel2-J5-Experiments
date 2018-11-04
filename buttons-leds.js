var Tessel = require('tessel-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  var buttons = new five.Buttons(['A2', 'A3']);
  var leds = new five.Leds(['B5', 'B6']);
  buttons.on('press', button => {
    leds.off();
    leds[buttons.indexOf(button)].on();
  });
});