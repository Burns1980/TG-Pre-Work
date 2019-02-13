const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
	console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;}, 10);

console.log(newSum);

//The reduce iteration method returns a single value.
//The first argument is the callback function has 2 parameters.
//The first parameter is the accumulator and the second paramter is the current value.
//The callback function is invoked and its return value becomes the new accumulator value.
//A second argument can be passed to the reduce method if. The accumulator would be set to this 2nd argument on the first call to the callback function.
