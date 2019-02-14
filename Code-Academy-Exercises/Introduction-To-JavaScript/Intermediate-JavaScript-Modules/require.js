const Airplane = require('./1-airplane.js');

const displayAirplane = () => {
  console.log(Airplane.myAirplane);
}

displayAirplane();
/*
To make use of a module, we can use the require() function to import it.
This function takes in an argument of the location of the file to be imported.
*/
