const { gql } = require('apollo-server');

// The "Query" type is special: it lists all of the available queries that
// clients can execute, along with the return type for each. In this
// case, the "books" query returns an array of zero or more Books (defined above).
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
