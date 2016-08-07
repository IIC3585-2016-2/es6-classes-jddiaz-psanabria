// Transport class
function Transport(how) {
  this.logger = console
  this._how = how;
}

Transport.prototype.move = function () {
  this.logger.log('Moving in the {0}!!'.replace('{0}', this._how));
};

Object.defineProperty(Transport.prototype, "how", {
  get: function () {
    return this._how;
  },
  set: function (value) {
    this._how = value;
  }
});

// Drone class
function Drone(how) {
  how = how || 'air';
  Transport.call(this, how);
}

Drone.prototype = Object.create(Transport.prototype);

// Car class
function Car(how) {
  how = how || 'ground';
  Transport.call(this, how);
}

Car.prototype = Object.create(Transport.prototype);

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

TransportFactory.getTransport('car').move();
