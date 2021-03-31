const { rockets } = require('../data');

class Rocket {
  static all() {
    return rockets;
  }
}

module.exports = {
  Rocket,
};
