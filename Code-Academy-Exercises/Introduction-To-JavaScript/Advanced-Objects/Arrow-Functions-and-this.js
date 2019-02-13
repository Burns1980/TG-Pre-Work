const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//Avoid using arrow functions inside object declarations because the this kw does not work the
//same way as when using a function expresion.In arrow functions, this kw is inherently bound to
//the function itself and not the calling object.
