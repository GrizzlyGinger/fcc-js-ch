function getIndexToIns(arr, num) {
  //Setup
  let index = 0;
  let sortedArr = arr;
  let temp = 0;

  //Sort arr using two for Loops
  for(let i = 0; i < sortedArr.length; i++) {
    for(let j = i + 1; j < sortedArr.length; j++) {
      //Swap an element if it is out of order
      if(sortedArr[i] > sortedArr[j]) {
        temp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = temp;
      }
    }
  }

  //Iterate through sortedArr and find lowest index to which num can be inserted in order
  for(let i = 0; i < sortedArr.length; i++) {
    if(num == sortedArr[i]) {
      index = i;
    } else if(num >= sortedArr[sortedArr.length - 1]){
      index = sortedArr.length;
    } else if(num >= sortedArr[i] && num <= sortedArr[i + 1]) {
      index = i + 1;
    }
  }
  
  return index;
}

getIndexToIns([2, 5, 10], 15);