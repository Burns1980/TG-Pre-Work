const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

//In objects, only certain properties should be mutable. JavaScript does not have privacy built-in so
//we must use naming conventions to know how to interact with properties. A common convention is to put
//an _underscore prepended to the property name.
