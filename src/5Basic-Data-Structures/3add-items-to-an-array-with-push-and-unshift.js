//An arrays length is not fixed
//  arrays can be defined length of any number of elements, and are mutable - elements can be added or removed over time
//array.push() adds an element to the end of array
//array.unshift() adds an element to the beginning of array
//Can pass variables to an array index

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));