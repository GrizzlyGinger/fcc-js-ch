//YAY! Another small project - chaining if/else statements
//par - average number of strokes a disc golfer will need to complete a hole
/*
  1	"Hole-in-one!"
  <= par - 2	"Eagle" //Incorrect
  par - 1	"Birdie"    //par - 3 "Albatross"
  par	"Par"           //par - 4 "Condor"
  par + 1	"Bogey"
  par + 2	"Double Bogey"
 */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1 ) {
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);