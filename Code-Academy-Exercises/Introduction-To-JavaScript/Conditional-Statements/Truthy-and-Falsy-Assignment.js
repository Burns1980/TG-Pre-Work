let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

/* JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:
let defaultName = username || 'Stranger'; This is called short-circuit evaluation.
*/
