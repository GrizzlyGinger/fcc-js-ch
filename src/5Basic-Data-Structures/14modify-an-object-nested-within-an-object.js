//Like arrays, object properties can be nested to an arbitrary depth
//  values can be any data type supported by JS, including arrays and other objects
//Dot and bracket notation can be used to access nested properties
//  menu.drinks['soft drinks']['root beer'] = "Virgil's";


let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);