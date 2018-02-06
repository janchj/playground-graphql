const server = require('apollo-server-lambda');
const lambdaPlayground = require('graphql-playground-middleware-lambda').default;

// graphql schema
const schema = require('./schema');

// handler for POST /graphql
exports.graphqlHandler = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  };
  const handler = server.graphqlLambda({ schema });
  return handler(event, context, callbackFilter);
};

// handler for GET /playground
exports.playgroundHandler = lambdaPlayground({
  endpoint: '/dev/graphql',
});

// handler for GET /graphiql
exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/dev/graphql',
});
