var Tessel = require('tessel-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  var leds = new five.Leds(['A2', 'A3', 'A4', 'A5']);
  var index = 0;
  var step = 1;

  board.loop(100, () => {
    leds.off();
    leds[index].on();
    index += step;
    if (index === 0 || index === leds.length - 1) {
      step *= -1;
    }
  });
});