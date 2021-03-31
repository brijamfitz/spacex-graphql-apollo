const { rockets } = require('../data');

class Rockets {
  static all() {
    return rockets;
  }
}

module.exports = {
  Rockets,
};
