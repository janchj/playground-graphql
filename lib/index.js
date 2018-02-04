const app = require('express')();
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const expressPlayground = require('graphql-playground-middleware-express').default;

// get the graphql schema
const schema = require('../schema');

// application http port
const PORT = process.env.port || 3001;

// wire the public endpoint for requests
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

// start http server
app.listen(PORT, () => {
  console.log(`Serving the GraphQL Playground on http://localhost:${PORT}/playground`);
});
