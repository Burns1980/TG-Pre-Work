// Write your code below

var bobsFollowers = ['Bill', 'Sam', 'Sue', 'Alice'];
var tinasFollowers = ['Bill', 'Sam', 'Betty'];
var mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++) {
  for(let j = 0; j < tinasFollowers.length; j++) {
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

//Loops can be nested. An example would be to compare 2 separate arrays.
