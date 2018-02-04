const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda');
const lambdaPlayground = require('graphql-playground-middleware-lambda');

const { makeExecutableSchema } = require('graphql-tools');
const { schema } = require('./schema');

const myGraphQLSchema = makeExecutableSchema({
  typeDefs: schema,
  logger: console,
});

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  function callbackFilter(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  }

  const handler = graphqlLambda({ schema: myGraphQLSchema, tracing: true });
  return handler(event, context, callbackFilter);
};

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.playgroundHandler = lambdaPlayground({
  endpoint: '/graphql',
});

exports.graphiqlHandler = graphiqlLambda({
  endpointURL: '/graphql',
});
