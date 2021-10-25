//Loops require terminal conditions otherwise infinite loops are likely to freeze or crash the browser

function myFunc() {
  // for (let i = 1; i != 4; i += 2) {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}