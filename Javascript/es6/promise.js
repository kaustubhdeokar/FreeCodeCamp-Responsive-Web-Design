const makeServerRequest = new Promise((resolve, reject) => {
    let a = 2;
    let b = 3;
    if (a > b) {
        resolve('Yep');
    }
    else {
        reject('No');
    }
});

makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error=>{
    console.log(error);
  })