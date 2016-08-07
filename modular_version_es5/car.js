var Transport = require('./transport');

// Car class
function Car(how) {
  how = how || 'ground';
  Transport.call(this, how);
}

Car.prototype = Object.create(Transport.prototype);

module.exports = Car;
