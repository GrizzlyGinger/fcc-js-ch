function mutation(arr) {
  //Setup
  let targetStr = arr[0].toLowerCase();
  let checkStr = arr[1].toLowerCase();
  let hasAll = true;
  let charRegex;

  //Check if each character is present in targetStr
  for(let i = 0; i < checkStr.length; i++) {
    charRegex = new RegExp(checkStr[i]);
      if(!charRegex.test(targetStr)){
        hasAll = false; //return value false if any are not present
      }
  }

  return hasAll;
}

mutation(["hello", "hey"]);