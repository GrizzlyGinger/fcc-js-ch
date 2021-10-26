function booWho(bool) {

  //Checks if bool is strictly true or false
  // If not using the strict comparator, 0 and 1 will return true
  if(bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);