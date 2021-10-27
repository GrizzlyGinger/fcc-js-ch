function titleCase(str) {
  //Setup
  let titleCaseStr = "";
  let wordRegex = /\w+'\w|\w+/g;
  //Add every word as an element to wordArr
  let wordArr = str.match(wordRegex);

  //Iterate through wordArr
  for(let i = 0; i < wordArr.length; i++) {
    //Add the uppercase version of the first character of each word to titleCaseStr 
    titleCaseStr += wordArr[i][0].toUpperCase();
    //Iterate through each word
    for(let j = 1; j < wordArr[i].length; j++){
      //Add the lowercase version of the second and further characters of each word to titleCaseStr
      titleCaseStr += wordArr[i][j].toLowerCase();
    }
    //Check if the last word has been reached
    if(i < wordArr.length - 1) {
      //If not, add a space.
      titleCaseStr += " ";
    }
  }

  return titleCaseStr;
}

titleCase("I'm a little tea pot");