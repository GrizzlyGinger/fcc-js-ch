function findElement(arr, func) {
  //Setup - leaves num undefined
  let num;

  //Iterate through array
  for(let i = 0; i < arr.length; i++) {
    //Check if func returns true if passed each element
    if(func(arr[i])) {
      //Returns the first matching element
      return arr[i];
    }
  }

  //returns undefined variable if no element passes func
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);