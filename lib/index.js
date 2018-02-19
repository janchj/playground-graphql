import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';

// get the graphql schema
import schema from '../schema';

const app = express();

// application http port
const PORT = process.env.port || 3001;

// wire the public endpoint for requests
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

// start http server
app.listen(PORT, () => {
  console.log(`Serving the GraphQL Playground on http://localhost:${PORT}/playground`);
});
