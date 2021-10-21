//ES6 allows for defining functs in objects without needing the funct : syntax

// Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear: function(newGear) {
//     this.gear = newGear;
//   }
// };

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);