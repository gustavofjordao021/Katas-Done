// link: https://www.codewars.com/kata/570e6e32de4dc8a8340016dd/train/javascript
// Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.
// Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.
// Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.

class Lamp {
    constructor(color) {
        this.color = color;
        this.on = false
    }

    toggleSwitch() {
      switch (this.on) {
        case false:
          this.on = true;
          break;
        case true:
          this.on = false;
          break;
      }
    } 

    state() {
        switch (this.on) {
            case true:
                return "The lamp is on.";
                break;
            case false:
                return "The lamp is off.";
                break;
        }
    }
}