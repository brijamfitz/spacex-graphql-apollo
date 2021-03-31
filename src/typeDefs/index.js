const { query } = require('./query');
const { launchType } = require('./types/launchType');
const { rocketType } = require('./types/rocketType');
const { payloadType } = require('./types/payloadType');
const { launchSiteType } = require('./types/launchSiteType');

const typeDefs = [query, launchType, rocketType, payloadType, launchSiteType];

module.exports = {
  typeDefs,
};
