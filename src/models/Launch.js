const { launches } = require('../data');

class Launch {
  static all() {
    return launches;
  }
}

module.exports = {
  Launch,
};
