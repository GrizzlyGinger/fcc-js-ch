//CS > Queue - abstract Data Structure with ordered items
//  New items can be added at the back and old items taken off the front

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item); //Adds item to end of array
  item = arr.shift(); //Removes first element in array
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));