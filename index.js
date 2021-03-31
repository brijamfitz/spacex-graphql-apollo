const { ApolloServer, gql } = require("apollo-server");

// Establish our query-able datasets
const launches = require("./spacex_launches.json");
const rockets = launches.map(launch => launch.rocket);
const payloads = rockets.flatMap(rocket => rocket.payloads);
const launchSites = launches.map(launch => launch.launch_site);

// This is the definition of the GraphQL schema
// How you structure this schema to fit the spacex_launches_data below
// along with how you write the code is the primary assessment
const typeDefs = gql`
  type Launch {
    mission_name: ID!
    launch_date_unix: Int!
    rocket: Rocket
    launch_site: LaunchSite!
    launch_success: Boolean!
  }

  type Rocket {
    rocket_id: ID!
    payloads: [Payload]
  }

  type Payload {
    payload_id: ID!
    norad_id: [Int]
  }

  type LaunchSite {
    site_id: ID!
    site_name: String!
    site_name_long: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    launches: [Launch],
    rockets: [Rocket],
    payloads: [Payload],
    launchSites: [LaunchSite],
  }
`;

// Resolvers define the technique for fetching the types defined in the schema.
const resolvers = {
  Query: {
    launches: () => launches,
    rockets: () => rockets,
    payloads: () => payloads,
    launchSites: () => launchSites,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
