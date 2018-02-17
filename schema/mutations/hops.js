import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import { hop } from '../types';
import db from '../../db';

export default {
  type: hop,
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
