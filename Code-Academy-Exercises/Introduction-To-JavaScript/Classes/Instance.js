class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//An instance is an object of a class which has methods and unique property names.
// The new kw is used to create an instance. The new kw calls the constuctor(), runs
//the code inside of it and returns the new instance.
