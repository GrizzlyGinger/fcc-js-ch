//Promises have three states: pending, fulfilled, and rejected
//resolve and reject params give promise arguments to fulfill or reject
//  resolve for the promise to succeed (fulfill)
//  reject for the promis to fail (reject)

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");// Change this line
  } else {  
    reject("Data not received");// Change this line
  }
});