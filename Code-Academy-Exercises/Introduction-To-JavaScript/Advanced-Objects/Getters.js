const robot = {
  _model: '1E78V2',
  _energyLevel: 100,

  get energyLevel() {
    if(typeof this._energyLevel === "number")
      return `My current energy level is ${this._energyLevel}`;
    else
      return 'System malfunction: cannot retrieve energy level';
  }

};

console.log(robot.energyLevel);



/*
Getters are methods that return the intrnal properties of an object. The get kw is used
in a getter function. Generally, getter functions do not need to have () when being called.
Properties cannot share the same name as the getter/setter methods.
*/
