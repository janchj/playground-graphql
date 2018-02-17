// @flow

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import types from '../types';
import db from '../../db';

export default {
  type: types.yeast,
  description: 'Create yeast',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of yeast' },
    type: { type: new GraphQLNonNull(GraphQLString), description: 'Type of yeast' }
  },
  resolve(source, args) {
    return db.yeast.createYeast(args)
      .then(response => response)
      .catch(err => console.log(err));
  }
};
