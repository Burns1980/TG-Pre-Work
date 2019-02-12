const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
var time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (inFunc, paramValue) => {
  if(inFunc(paramValue) === inFunc(paramValue)) {
    return inFunc(paramValue);
  }
  else {
    return 'This function returned inconsistent results';
  }
}

//Functinos that get passed as parameters to other functions, and then get invoked, are callback functions.
