//<(0_0<)<(0_0^)More Tiny Projects!(^0_0)>(>0_0)>
//Players can keep track of high and low cards remaining in blackjack
//Knowing the odds of high or low helps the player make decisions
//+1 -	2, 3, 4, 5, 6
//0  -	7, 8, 9
//-1 -	10, 'J', 'Q', 'K', 'A

var count = 0;

function cc(card) {
  // Only change code below this line

  //check whether card is high or low
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      //change count for low cards
      count ++;
      break;
    //Included for sake of completion. Does not affect tests
    // case 7:
    // case 8:
    // case 9:
      // count += 0;
      // break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      //change count for high cards
      count --;
      break;
  }
  //check if count is > 0 
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');