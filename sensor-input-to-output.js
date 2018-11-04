var Tessel = require('tessel-io');
var five = require('johnny-five');
var Barcli = require('barcli');

var board = new five.Board({
  io: new Tessel(),
  repl: false,
  debug: false
});

board.on('ready', () => {
  var range = [0, 100];
  var graph = new Barcli({
    label: 'My Data',
    range: range
  });

  var sensor = new five.Sensor({
    pin: 'A7',
    threshold: 2
  });

  var led = new five.Led('B5');

  sensor.on('change', () => {
    led.brightness(sensor.scaleTo(0, 255));
  });

});
