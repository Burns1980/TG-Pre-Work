const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();
/*
A factory function is a function that can return an object. It can be reused to make many object
instances. It's useful if we have an object with the same properties we want to reuse. This helps
us so that we don't need to make an object literal for each object. We use the factory function instead.
*/
