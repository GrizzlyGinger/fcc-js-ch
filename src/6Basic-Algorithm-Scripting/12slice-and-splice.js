function frankenSplice(arr1, arr2, n) {
  //Setup
  let frankArr = [];

  //Push all values of arr2 up to index n
  for(let i = 0; i < n; i++) {
    frankArr.push(arr2[i]);
  }

  //Push all values of arr1 starting at index n
  for(let i = 0; i < arr1.length; i++) {
    frankArr.push(arr1[i]);
  }

  //Push remaining values in arr2
  for(let i = n; i < arr2.length; i++) {
    frankArr.push(arr2[i]);
  }

  return frankArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);