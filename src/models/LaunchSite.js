const { launchSites } = require('../data');

class LaunchSite {
  static fetchLaunchSiteData() {
    return launchSites;
  }

  static fetchLaunchSiteById(id) {
    let site = {};

    launchSites.forEach(ls => {
      if (id === ls.site_id) site = ls;
    });

    return site;
  }
}

module.exports = {
  LaunchSite,
};
