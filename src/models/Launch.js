const { launches } = require('../data');

class Launch {
  static fetchLaunchData() {
    return launches;
  }

  static fetchSingleLaunch(id) {
    let launch = {};

    launches.forEach(l => {
      if (parseInt(id) === l.flight_number) launch = l;
    });

    return launch;
  }
}

module.exports = {
  Launch,
};
