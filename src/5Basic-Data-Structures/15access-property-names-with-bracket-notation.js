//Accessing object properties will return the value of the specified key or undefined if it is not present
//  bracket notation using variables is useful for accessing object properties that are unknown prior to runtime

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let item = foods[scannedItem];
  return item;
  // Only change code above this line
}

console.log(checkInventory("apples"));