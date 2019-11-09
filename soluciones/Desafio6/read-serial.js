// read-serial.js
const SerialPort = require('serialport')
const port = new SerialPort('COM5')  // <--- PUERTO DONDE ESTA CONECTADO EL ARDUINO
port.on('data', data => console.log(Number(data)))

