const { Launch } = require('../models/Launch');
const { Rocket } = require('../models/Rocket');
const { Payload } = require('../models/Payload');
const { LaunchSite } = require('../models/LaunchSite');

const launchesResolvers = {
  Query: {
    launches: () => Launch.fetchLaunchData(),
    rockets: () => Rocket.fetchRocketData(),
    payloads: () => Payload.fetchPayloadData(),
    launchSites: () => LaunchSite.fetchLaunchSiteData(),
    launch: (_, { flight_number }) => Launch.fetchSingleLaunch(flight_number),
    rocket: (_, { rocket_id }) => Rocket.fetchSingleRocket(rocket_id),
    payload: (_, { payload_id }) => Payload.fetchSinglePayload(payload_id),
    launchSite: (_, { site_id }) => LaunchSite.fetchSingleLaunchSite(site_id),
  },
};

module.exports = {
  launchesResolvers,
}
