var serialport = require("serialport");
serialport.list(function(err, ports) {
    console.log(ports);
});



var five = require("johnny-five");
var board = new five.Board({port:"COM3"});

board.on("ready", function() {
  console.log("connected")
  var led = new five.Led(13);
  led.blink(500);
});

board.on("error", function(err) {
  console.log(err)
});

