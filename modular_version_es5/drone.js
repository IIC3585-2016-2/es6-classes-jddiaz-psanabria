var Transport = require('./transport');

// Drone class
function Drone(how) {
  how = how || 'air';
  Transport.call(this, how);
}

Drone.prototype = Object.create(Transport.prototype);

module.exports = Drone;
