//Use a for/in statement to iterate through an object
// for(let property in object) {
//    console.log(property);
//  }
//Objects do not maintain an order to stored keys like arrays
//  a key's position on an object is irrelevant when accesssing the key

let users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};


function countOnline(usersObj) {
  // Only change code below this line
  let onlineCount = 0;
  
  for (let user in usersObj) {
    if(usersObj[user].online == true) {
      onlineCount ++;
    }
  }

  return onlineCount;
  // Only change code above this line
}

countOnline(users);

