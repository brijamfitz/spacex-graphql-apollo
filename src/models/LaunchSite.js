const { launchSites } = require('../data');

class LaunchSites {
  static all() {
    return launchSites;
  }
}

module.exports = {
  LaunchSites,
};
