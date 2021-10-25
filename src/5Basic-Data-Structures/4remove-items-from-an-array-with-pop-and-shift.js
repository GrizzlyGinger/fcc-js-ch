//array.pop() removes the element in the last index of array
//array.unshift() removes the element in the first index of array
//  neither method takes parameters and only allows modifying a single element at a time

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));