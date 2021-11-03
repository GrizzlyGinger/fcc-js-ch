//`concat` joins two strings or arrays end to end
//  For arrays, the method is called on the head array and the tail array is provided as the argument for the method
//  returns a new array and does not mutate either of the original arrays

function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);