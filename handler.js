const server = require('apollo-server-lambda');
const lambdaPlayground = require('graphql-playground-middleware-lambda').default;

const { schema } = require('./schema');

exports.graphqlHandler = server.graphqlLambda({ schema });

/* exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  console.log(event);
  function callbackFilter(error, output) {
    // eslint-disable-next-line no-param-reassign
    // output.headers['Access-Control-Allow-Origin'] = '*';
    console.log(error);
    callback(error, output);
  }

  const handler = graphqlLambda({ schema, tracing: true });
  return handler(event, context, callbackFilter);
}; */

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.playgroundHandler = lambdaPlayground({
  endpoint: '/graphql',
});

exports.graphiqlHandler = server.graphiqlLambda({
  endpointURL: '/graphql',
});
