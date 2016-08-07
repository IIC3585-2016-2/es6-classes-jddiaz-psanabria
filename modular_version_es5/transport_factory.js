var Car = require('./car');
var Drone = require('./drone');

function TransportFactory() {}

TransportFactory.getTransport = function (transportType) {
  if (transportType == null) {
    return null;
  } else if (transportType === 'car') {
    return new Car();
  } else if (transportType === 'drone') {
    return new Drone();
  } else {
    return null;
  }
}

module.exports = TransportFactory;
