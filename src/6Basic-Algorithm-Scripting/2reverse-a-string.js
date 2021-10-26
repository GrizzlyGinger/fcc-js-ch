function reverseString(str) {
  //Setup
  let revStr = "";
  let revArr = [];

  //Store all characters in an array in reverse order
  for(let i = str.length - 1; i >= 0; i--) {
    revArr.push(str[i])
  }

  //Concatenate each character to revStr
  for(let i = 0; i < revArr.length; i++) {
    revStr += revArr[i];
  }

  return revStr;
}

reverseString("hello");