const { gql } = require('apollo-server');

const launchType = gql`
  type Launch {
    flight_number: ID!
    mission_name: String!
    launch_date_unix: Int!
    rocket: Rocket
    launch_site: LaunchSite!
    launch_success: Boolean!
  }
`;

module.exports = {
  launchType,
};
