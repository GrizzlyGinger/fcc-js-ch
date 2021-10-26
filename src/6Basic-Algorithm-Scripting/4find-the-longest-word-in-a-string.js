function findLongestWordLength(str) {
  //Setup
  let longest = "";
  let wordRegex = /\w+/g;

  //Store all words in an array
  let wordArr = str.match(wordRegex);

  //iterate through the array
  for(let i = 0; i < wordArr.length; i++) {
    //Check if each word is longer than the last
    if(wordArr[i].length > longest.length) {
      //If it is, it is the new longest word
      longest = wordArr[i];
    }
  }

  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");