function chunkArrayInGroups(arr, size) {
  //Setup
  let chunkyArr = [];

  //Splice portions of arr equal to size into chunkyArr
  //While loop ensures empty array is not passed to chunkyArr
  while(arr.length != 0) {
      chunkyArr.push(arr.splice(0, size));
  }

  return chunkyArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);