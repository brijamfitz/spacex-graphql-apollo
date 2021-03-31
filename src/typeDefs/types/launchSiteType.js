const { gql } = require('apollo-server');

const launchSiteType = gql`
  type LaunchSite {
    site_id: ID!
    site_name: String!
    site_name_long: String
  }
`;

module.exports = {
  launchSiteType,
};
