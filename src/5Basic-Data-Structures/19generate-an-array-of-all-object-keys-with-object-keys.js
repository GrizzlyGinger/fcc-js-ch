//Use Object.keys(object) to generate an array containing all keys stored in object

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  let keyArr = Object.keys(obj);

  return keyArr;
  // Only change code above this line
}

console.log(getArrayOfUsers(users));