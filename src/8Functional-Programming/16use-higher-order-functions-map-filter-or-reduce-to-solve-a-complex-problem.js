//MI-NI PRO-JECT, MI-NI PRO-JECT
//Use any combination of `map`, `filter`, and `reduce` to return an array containing the squares of only positive integers from an array of real numbers
//  decimals are not integers
//No `for` or `while` loops or `forEach`

const squareList = arr => {
  // Only change code below this line
  //Filter out decimals and negative numbers
  let ints = arr.filter(num => Number.isInteger(num) && num > 0)

  //Map the square of each number to a new array
  let squaredInts = ints.map(num => num * num)

  return squaredInts;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);