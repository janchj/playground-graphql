const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');

// const pgdb = require('../db/pgdb');

const {
  beerStyles,
  yeasts,
  hops,
  recipes
} = require('../data');

// const SpiritType = require('./types/spirit');

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
    },
    /* spirit: {
      type: SpiritType,
      description: 'Details for a spirit',
      args: {
        key: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (obj, args, { pgPool }) => {
        console.log(pgdb(pgPool).getSpirit(args.key));
        return pgdb(pgPool).getSpirit(args.key);
      }
    } */
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = schema;

