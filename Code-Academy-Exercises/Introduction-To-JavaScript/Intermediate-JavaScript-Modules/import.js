import Airplane from './airplane';

const displayFuelCapacity = () => {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

//ES6 also introduces the import kw for importing objects.
