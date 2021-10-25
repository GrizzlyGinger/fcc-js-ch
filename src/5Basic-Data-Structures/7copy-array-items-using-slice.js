//sliceArray = array.slice(8, 12) elements from array starting at index 8 and ending at index 11 and stores them in sliceArray

function forecast(arr) {
  // Only change code below this line
  let newArr = arr.slice(2, 4)
  return newArr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));