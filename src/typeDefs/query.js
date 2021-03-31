const { gql } = require('apollo-server');

const query = gql`
  type Query {
    launches: [Launch],
    rockets: [Rocket],
    payloads: [Payload],
    launchSites: [LaunchSite],
    launch(flight_number: ID!): Launch,
    rocket(rocket_id: ID!): Rocket,
    payload(payload_id: ID!): Payload,
    launchSite(site_id: ID!): LaunchSite,
  }
`;

module.exports = {
  query,
};
