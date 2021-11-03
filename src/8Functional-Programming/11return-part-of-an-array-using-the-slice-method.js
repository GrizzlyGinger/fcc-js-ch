//`slice` returns a copy of certain elements of an array
//  takes 2 arguments
//    index of where to begin the slice
//    index where to end the slice (non-inclusive)
//  defaults to beginning and end, respectively if no arguments are provided
//`slice` returns a new array and does not mutate the original

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  const newArr = anim.slice(beginSlice, endSlice);

  return newArr;
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);