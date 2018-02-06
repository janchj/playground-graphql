const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} = require('graphql');

const db = require('../db');

const {
  recipes
} = require('../data');

const {
  beerStyle,
  hop,
  yeast,
  recipe
} = require('./types');

const {
  createHop,
  createYeast,
  createBeerStyle
} = require('./mutations');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    beerStyles: {
      type: new GraphQLList(beerStyle),
      description: 'Types of beer',
      resolve: () => db.beerStyles.getAllBeerStyles().then(response => response.Items)
    },
    yeast: {
      type: new GraphQLList(yeast),
      description: 'Types of yeast',
      resolve: () => db.yeast.getAllYeast().then(response => response.Items)
    },
    hops: {
      type: new GraphQLList(hop),
      description: 'Types of hops',
      resolve: () => db.hops.getAllHops().then(response => response.Items)
    },
    recipes: {
      type: new GraphQLList(recipe),
      description: 'List of beer recipes',
      resolve: () => recipes
    }
  }
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createHop,
    createYeast,
    createBeerStyle
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

module.exports = schema;
