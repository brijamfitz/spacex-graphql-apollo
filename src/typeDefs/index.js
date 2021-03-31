const { query } = require('./query');
const {
  launchType,
  rocketType,
  payloadType,
  launchSiteType,
} = require('./types');

const typeDefs = [query, launchType, rocketType, payloadType, launchSiteType];

module.exports = {
  typeDefs,
};
