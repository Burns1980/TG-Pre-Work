const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Global vars go into the global namespace, which can be accessed anywhere in a program.
// Scope pollution is there are too many vars in the global namespace or reuse vars across different scopes.
