const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} = require('graphql');

// const pgdb = require('../db/pgdb');

const {
  beerStyles,
  yeasts,
  hops,
  recipes
} = require('../data');

const {
  beerStyle,
  hop,
  yeast,
  recipe
} = require('./types');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    beerStyles: {
      type: new GraphQLList(beerStyle),
      description: 'Types of beer',
      resolve: () => beerStyles
    },
    yeast: {
      type: new GraphQLList(yeast),
      description: 'Types of yeast',
      resolve: () => yeasts
    },
    hops: {
      type: new GraphQLList(hop),
      description: 'Types of hops',
      resolve: () => hops
    },
    recipes: {
      type: new GraphQLList(recipe),
      description: 'List of beer recipes',
      resolve: () => recipes
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = schema;

