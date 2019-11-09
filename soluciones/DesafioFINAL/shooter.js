const ioHook = require('iohook');
const SerialPort = require('serialport');
const port = new SerialPort('COM5');

ioHook
  .on("mousemove", event => {
    console.log(event);
    // remember angle max is 180
    let pos = Math.round(event.x/6);
    if (pos<0) pos = 0;
    if (pos>180) pos = 180;
    port.write([pos]);
  })
  .on("mouseclick", event => {
    console.log(event);
    port.write([255]);
  })
  .start();