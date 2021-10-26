//Objects at their most basic are key-value pairs
//  property/key: value
//Can add additional properties with values using dot notation
//  Object.property = value;
//  or bracket notation, required for properties that are variables or include a space
//    Object['spaced property'] = value;

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);