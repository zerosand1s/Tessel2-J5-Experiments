var Tessel = require('tessel-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  var leds = new five.Leds(['A2', 'A3', 'A4', 'A5']);
  var x = 0;
  var y = leds.length - 1;
  var step = 1;

  board.loop(500, () => {
    leds.off();
    leds[x].on();
    leds[y].on();
    x += step;
    y -= step;
    if (x >= y || y === x) {
      x -= step;
      y += step;
      step *= -1;
    }
    if (x === 0 || y === leds.length - 1) {
      step *= -1;
    }
  });
});