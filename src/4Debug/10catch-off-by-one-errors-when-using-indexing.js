//Off by one errors (OBOE) often occur from not observing 0-first indexing
//  starting at 1 or using '<= arrOrStr.length'
//  will often get "index out of range" error or print `undefined`
//Read string and array method documentation to understand if moethods are inclusive or not

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  // for (let i = 1; i <= len; i++) {
  for (let i = 0; i < len; i++) {    
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();