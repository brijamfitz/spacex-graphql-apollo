const {
  Launch,
  Rocket,
  Payload,
  LaunchSite,
} = require('../models');

const launchesResolvers = {
  Query: {
    launches: () => Launch.all(),
    rockets: () => Rocket.all(),
    payloads: () => Payload.all(),
    launchSites: () => LaunchSite.all(),
  },
};

module.exports = {
  launchesResolvers,
}