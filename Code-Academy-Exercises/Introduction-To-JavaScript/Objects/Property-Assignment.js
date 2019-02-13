let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 10;
delete spaceship['Secret Mission'];

//Bracket or dot notation can be used to add new kv pairs or change an existing property.
//If we use kw const for object declaration, we can still add and change properties, we just can't reassign the object.
//The delete kw allows the removal of properties.
