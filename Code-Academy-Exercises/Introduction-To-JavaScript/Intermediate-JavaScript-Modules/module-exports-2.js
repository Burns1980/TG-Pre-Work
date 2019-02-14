let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//Below is 2-missionControl.js file.
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

//Data and functions cal be wrapped in an object and exported using module.exports.
