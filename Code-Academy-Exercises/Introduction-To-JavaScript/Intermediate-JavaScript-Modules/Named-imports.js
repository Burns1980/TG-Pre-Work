import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

const displayFuelCapacity = () => {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));});
}

displayFuelCapacity();
displayStaffStatus();

//The import kw is used to import objects stored as variables.
