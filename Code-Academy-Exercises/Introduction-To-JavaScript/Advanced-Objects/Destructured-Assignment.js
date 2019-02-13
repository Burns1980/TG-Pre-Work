const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;
functionality.beep();
/*
Destructured assignments help by saving keystrokes. They allow us to create a variable
with the name of an object's key. This is done by wrapping the key inside {} and assigning
it to the object. It also works on nested properties.
*/
