function confirmEnding(str, target) {
  //Pass target to regex using the RegExp constructor and specify the pattern at the end of a string
  let endRegex = new RegExp(target + "$");

  //Test if target is at the end of str
  if(endRegex.test(str)) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");