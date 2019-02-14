class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
/*
To create a subclass from a superclass, use the kw extends (class Cat extends Animal...)
The extends kw makes the superclasses properties and methods available.
The super kw calls the consturctor of the superclass.
In a consturctor, you must always call super method before using this kw otherwise a reference error will be thrown.
*/
