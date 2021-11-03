//map is a pure function - output depends solely on its inputs

//Write own version of Array.prototype.Map()
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  //Setup
  const newArray = []

  //Push each item in the passed array modified by the callback function
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});