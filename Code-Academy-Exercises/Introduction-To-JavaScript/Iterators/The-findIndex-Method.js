const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(name => {return name === 'elephant';});
const startsWithS = animals.findIndex(letter => {return letter[0] === 's';});
console.log(foundAnimal);
console.log(startsWithS);

//The findIndex method returns the index of the first occurrence of the callbacks functions true condition.
