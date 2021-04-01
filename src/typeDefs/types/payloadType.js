const { gql } = require('apollo-server');

const payloadType = gql`
  type Payload {
    payload_id: ID!
    norad_id: [Int]!
  }
`;

module.exports = {
  payloadType,
};
