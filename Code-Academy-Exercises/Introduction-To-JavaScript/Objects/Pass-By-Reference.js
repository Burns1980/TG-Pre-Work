let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = (obj) => {
  obj['Fuel Type'] = 'avocado oil';
}

const remotelyDisable = (obj) => {
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
//Objects are passed by reference, which means that they are referenced by their location in
//memory. They are not passed on as copies.
