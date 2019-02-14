
export let availableAirplanes = [{name: 'AeroJet', fuelCapacity: 800, availableStaff: ['pilots', 'flightAttendants',
                         'engineers', 'medicalAssistance', 'sensorOperators'], maxSpeed: 1200, minSpeed: 300},
                          {name: 'SkyJet', fuelCapacity: 500, availableStaff: ['pilots', 'flightAttendants'],
                          maxSpeed: 800, minSpeed: 200}];
export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export const meetsStaffRequirements = (availableStaff, requiredStaff) => {
  if(availableStaff.length >= requiredStaff) {
    return true;
  }
  else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  var range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange) {
    return true;
  }
  else
    return false;
};

//Named exports can be exported on the declaration by placing kw at the front of the declaration.
