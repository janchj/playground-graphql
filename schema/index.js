// @flow

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import db from '../db';
import { beerStyle, hop, yeast, recipe } from './types';
import mutations from './mutations';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    beerStyles: {
      type: new GraphQLList(beerStyle),
      description: 'Types of beer',
      resolve: () => db.beerStyles.getAllBeerStyles()
    },
    yeast: {
      type: new GraphQLList(yeast),
      description: 'Types of yeast',
      resolve: () => db.yeast.getAllYeast()
    },
    hops: {
      type: new GraphQLList(hop),
      description: 'Types of hops',
      resolve: () => db.hops.getAllHops()
    },
    recipes: {
      type: new GraphQLList(recipe),
      description: 'List of beer recipes',
      resolve: () => db.recipes.getAllRecipes()
    }
  }
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createHop: mutations.createHop,
    createYeast: mutations.createYeast,
    createBeerStyle: mutations.createBeerStyle,
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

export default schema;
