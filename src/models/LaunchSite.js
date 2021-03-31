const { launchSites } = require('../data');

class LaunchSite {
  static all() {
    return launchSites;
  }
}

module.exports = {
  LaunchSite,
};
