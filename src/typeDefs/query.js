const { gql } = require('apollo-server');

const query = gql`
  type Query {
    launches: [Launch],
    rockets: [Rocket],
    payloads: [Payload],
    launchSites: [LaunchSite],
  }
`;

module.exports = {
  query,
};
