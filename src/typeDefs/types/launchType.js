const { gql } = require('apollo-server');

const launchType = gql`
  type Launch {
    mission_name: ID!
    launch_date_unix: Int!
    rocket: Rocket
    launch_site: LaunchSite!
    launch_success: Boolean!
  }
`;

module.exports = {
  launchType,
};
