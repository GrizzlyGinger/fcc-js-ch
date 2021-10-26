function repeatStringNumTimes(str, num) {
  //Setup
  let repeatedStr = "";

  //Check if num is positive
  if(num < 0) {
    //Return empty string if negative
    return repeatedStr;
  } else {
    //Concatenate the string to repeatedStr a number of times equal to num
    for(let i = 0; i < num; i++) {
      repeatedStr += str;
    }
  }
  
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);