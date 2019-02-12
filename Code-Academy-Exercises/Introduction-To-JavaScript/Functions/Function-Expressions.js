const plantNeedsWater = function(day, plantNeedsWater) {
  if(day === 'Wednesday') {
    return true;
  }
  else {
    return false;
  }
}

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

/* A function expression is an anonymous function named to a variable, best practice says const variable
since the release of ES6. The value of the variable will be the function. To invoke a function expression,
write the name of the variable with any arguments it has.
*/
