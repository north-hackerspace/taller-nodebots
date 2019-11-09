const ioHook = require('iohook');
const SerialPort = require('serialport');
const port = new SerialPort('COM5');

ioHook.on("mousemove", event => {
  // remember angle max is 180 (1080 / 6)
   const pos = event.x > 1080 ? 180 : Math.round(event.x / 6);
   port.write([pos]);
});
ioHook.on("mouseclick", event => {
  console.log(event);
  port.write([255]);
});

ioHook.start();