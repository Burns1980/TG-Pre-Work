const robot = {
  model: '1E78V2',
  energyLevel: 100,

  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo());
//The way we gain access to the calling objects properties, when the calling object is itself, is
//using the this kw. The this kw references the calling object.
