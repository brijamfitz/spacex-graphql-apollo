const { payloads } = require('../data');

class Payload {
  static all() {
    return payloads;
  }
}

module.exports = {
  Payload,
};
