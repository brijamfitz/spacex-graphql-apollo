const { Launch } = require('../models/Launch');
const { Rocket } = require('../models/Rocket');
const { Payload } = require('../models/Payload');
const { LaunchSite } = require('../models/LaunchSite');

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