const ioHook = require('iohook');
const SerialPort = require('serialport');
const port = new SerialPort('COM5');

ioHook.on("mousemove", event => {
  console.log(event);
   let pos = Math.round(event.x / 6) + 1;
   if (pos > 180) pos = 180; // remember angle max is 180
   port.write([pos]);
});
ioHook.on("mouseclick", event => {
  console.log(event);
  port.write([255]);
});

ioHook.start();