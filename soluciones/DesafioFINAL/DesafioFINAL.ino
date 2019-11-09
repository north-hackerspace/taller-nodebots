/*
 Controlling a servo position using a potentiometer (variable resistor)
 by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

 modified on 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Knob
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int val;    // variable to read the value from the analog pin
int buzzer = 6;

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    // get the new byte:
    int angle = (int)Serial.read();  // <--- the value 0 or 180 arrives from node.js
    // set the servo to that angle
    if (angle <= 180) myservo.write(angle);
    else {
      tone(buzzer, 900, 100);
      delay(100);
      tone(buzzer, 600, 400);
    }
  }
  delay(1);                           // waits for the servo
}
