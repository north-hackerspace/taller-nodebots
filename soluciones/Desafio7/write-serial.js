// write-serial.js
const SerialPort = require('serialport')
const port = new SerialPort('COM5')  // <--- PUERTO DONDE ESTA CONECTADO EL ARDUINO
const stdin = process.stdin;
const RIGHT_ARROW = '\u001B\u005B\u0043';
const LEFT_ARROW = '\u001B\u005B\u0044';
const CTRL_C = '\u0003';

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', function(key){
    if (key == RIGHT_ARROW) {
        process.stdout.write('-->\n'); 
        port.write([0]);   // Aqui mandamos un byte de `0`
    }
    if (key == LEFT_ARROW) { 
        process.stdout.write('<--\n');
        port.write([180]); // Aqui mandamos un byte con `180`
    }
    if (key == CTRL_C) { process.exit(); } 
});
