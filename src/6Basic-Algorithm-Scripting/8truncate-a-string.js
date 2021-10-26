function truncateString(str, num) {
  //Setup
  let truncStr = "";

  //Test if num is greater than or equal to str's length
  if(num >= str.length) {
    //Return str if true
    return str;
  } else {
    //Iterate through the string and add each character up to str[num] to truncStr if false
    for(let i = 0; i < num; i++) {
      truncStr += str[i];
    }
    //Add "..." to the end of truncStr
  }
  truncStr += "...";

  return truncStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);