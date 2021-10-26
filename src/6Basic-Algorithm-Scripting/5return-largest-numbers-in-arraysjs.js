function largestOfFour(arr) {
  //Setup
  let largeArr = [];
  let largest = 0;

  //Iterate through arr
  for(let i = 0; i < arr.length; i++) {
    //Set largest to first sub-array value initially
    largest = arr[i][0];

    //Iterate through sub-arrays
    for(let j = 0; j < arr[i].length; j++) {
      //Check if value is larger than largest
      if(arr[i][j] > largest) {
        //Assign larger value to largest if true
        largest = arr[i][j];
      }
    }

    //Push largest value to largeArr
    largeArr.push(largest);
  }

  return largeArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);