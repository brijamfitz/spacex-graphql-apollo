const { rockets } = require('../data');

class Rocket {
  static fetchRocketData() {
    return rockets;
  }

  static fetchRocketById(id) {
    let rocket = {};

    rockets.forEach(r => {
      if (id === r.rocket_id) rocket = r;
    });

    return rocket;
  }
}

module.exports = {
  Rocket,
};
