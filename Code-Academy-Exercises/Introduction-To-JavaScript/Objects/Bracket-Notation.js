let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
var isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);
//Bracket notation is another way to access a key's value. Bracket notation must be used
//when the key has numbers, spaces or special characters, otherwise an error would be thrown.
