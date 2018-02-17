
// @flow

import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import types from '../types';
import db from '../../db';

export default {
  type: types.hop,
  description: 'Create hop',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of hop' }
  },
  resolve(source, args) {
    return db.hops.createHop(args)
      .then(response => response)
      .catch(err => console.log(err));
  }
};
