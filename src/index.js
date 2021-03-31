const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { basicLogging } = require('./plugins');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [basicLogging]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
