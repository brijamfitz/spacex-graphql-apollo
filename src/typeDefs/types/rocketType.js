const { gql } = require('apollo-server');

const rocketType = gql`
  type Rocket {
    rocket_id: ID!
    payloads: [Payload]
  }
`;

module.exports = {
  rocketType,
};
