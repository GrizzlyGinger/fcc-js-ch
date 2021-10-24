//Promises are most useful for processes that take an unknown amount of time (asynchronous)
//  often a server request
//After the promise completes, use the then method to perform actions based on the resolution
//  than is executed immediately after promise is fulfilled with resolve

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});