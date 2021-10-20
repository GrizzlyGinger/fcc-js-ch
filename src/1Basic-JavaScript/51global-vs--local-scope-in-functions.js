//Possible to have both local and global variables with the same name
//Local takes precedence over global

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();