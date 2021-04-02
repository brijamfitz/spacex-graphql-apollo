const {
  Launch,
  Rocket,
  Payload,
  LaunchSite,
} = require('../models');

const launchesResolvers = {
  Query: {
    launches: () => Launch.fetchLaunchData(),
    rockets: () => Rocket.fetchRocketData(),
    payloads: () => Payload.fetchPayloadData(),
    launchSites: () => LaunchSite.fetchLaunchSiteData(),
    launch: (_, { flight_number }) => Launch.fetchLaunchById(flight_number),
    rocket: (_, { rocket_id }) => Rocket.fetchRocketById(rocket_id),
    payload: (_, { payload_id }) => Payload.fetchPayloadById(payload_id),
    launchSite: (_, { site_id }) => LaunchSite.fetchLaunchSiteById(site_id),
  },
};

module.exports = {
  launchesResolvers,
};
