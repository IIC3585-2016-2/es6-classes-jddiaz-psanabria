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

module.exports = Transport;
