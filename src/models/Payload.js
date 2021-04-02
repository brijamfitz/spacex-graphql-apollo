const { payloads } = require('../data');

class Payload {
  static fetchPayloadData() {
    return payloads;
  }

  static fetchPayloadById(id) {
    let payload = {};

    payloads.forEach(p => {
      if (id === p.payload_id) payload = p;
    });

    return payload;
  }
}

module.exports = {
  Payload,
};
