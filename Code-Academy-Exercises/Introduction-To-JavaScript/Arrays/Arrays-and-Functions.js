const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = (newArr) => {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

//Arrays that are passed to a function are called pass-by-reference becasue it is the actual
// memory reference that is being passed.
