function rangeOfNumbers(startNum, endNum) {
  let arr = [];
  if (startNum === endNum) {
    arr.unshift(startNum);
    return arr;
  } else {
    arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};