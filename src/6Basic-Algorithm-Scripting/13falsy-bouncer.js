function bouncer(arr) {
  //Setup
  let bounceArr = [];

  //Iterate through arr
  for(let i = 0; i < arr.length; i++) {
    //Check if element at arr[i] is not falsy after converting it to boolean
    //Push to bounceArr if element is not falsy
    if(!!arr[i] != false) {
      bounceArr.push(arr[i]);
    }
  }

  return bounceArr;
}

bouncer([7, "ate", "", false, 9]);