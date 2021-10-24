//Values can be obtained from an object and values of a property within an object can be set using:
//  getters and setters
//Setters meant to modify (set) value of an object's private variable
//  private variables must be referenced with an underscore
//Essentially created an API for another user to get the correct result

// Only change code below this line
class Thermostat {
  constructor(temp) {
    //convert the temperature to celsius
    this._temperature = (5 / 9) * (temp - 32);
  }

  //getter
  get temperature() {
    return this._temperature;
  }

  //setter
  set temperature(newTemp) {
    this._temperature = newTemp;
  }


}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
