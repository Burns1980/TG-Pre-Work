let spaceship = {
  passengers: [{
  name: "Brent Zurek",
  age: 38
	}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

var capFave = spaceship.crew.captain['favorite foods'][0];
var firstPassenger = spaceship.passengers[0];

//Objects can be nested inside other objects. To access nested objects, we chain operators ([], .)
