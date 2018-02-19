import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';

// graphql schema
import schema from './schema';

// handler for POST /graphql
exports.graphqlHandler = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    // output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  };
  const handler = graphqlLambda({ schema });
  return handler(event, context, callbackFilter);
};

// handler for GET /playground
exports.playgroundHandler = (event, context, callback) =>
  lambdaPlayground({ endpoint: `/${event.requestContext.stage}/graphql` })(event, context, callback);

// handler for GET /graphiql
exports.graphiqlHandler = (event, context, callback) =>
  graphiqlLambda({ endpointURL: `/${event.requestContext.stage}/graphql` })(event, context, callback);
