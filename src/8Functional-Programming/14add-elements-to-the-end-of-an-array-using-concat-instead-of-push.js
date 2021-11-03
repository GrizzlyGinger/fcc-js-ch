//Functional programming is all about creating and using non-mutating functions
//  concat is a non-mutating version of push, which mutates the array by adding an item to the end of the array it is called on

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  // return original.push(newItem);
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);