//One common task in JS is to iterate through an array
//This can be done with a for loop and the .length property

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0 ;i < myArr.length; i++) {
  total += myArr[i];
}