let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};


let orange = foods.oranges;
console.log(orange);

delete foods.oranges;
delete foods.plums;
console.log(foods);

console.log(foods.hasOwnProperty('apples'));

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
    let num =0 ;
    for(let user in usersObj){
      if(users[user].online==true){
        num+=1;
      }
    }
    console.log(num); 
      return num;
    // Only change code above this line
  }

  countOnline(users);