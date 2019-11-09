/*
 Controlling a servo position with two buttons
*/

#include <Servo.h>

Servo myservo; 

int val1;
int val2;
int pos = 90;

void setup() {
  myservo.attach(9);
  pinMode(2, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
}

void loop() {
  val1 = digitalRead(2); 
  val2 = digitalRead(4);
  if (val1 == 0) pos--;
  if (val2 == 0) pos++;
  myservo.write(pos);
  delay(5);
}
