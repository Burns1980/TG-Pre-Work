const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

/* Reasons for good scoping:
makes code more legible
easier to understand code becasue it clarifies which vars are associated with different parts of a program.
modular code is easier to maintain.
saves memory
*/
