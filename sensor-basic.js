var Tessel = require('tessel-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  var sensor = new five.Sensor('A7');
  sensor.on('change', () => {
    console.log('SENSOR VALUE: ', sensor.value);
  });
});