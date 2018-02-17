import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import beerStyle from '../types';
import db from '../../db';

export default {
  type: beerStyle,
  description: 'Create beer style',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of beer style' }
  },
  resolve(source, args) {
    return db.beerStyles.createBeerStyle(args)
      .then(response => response)
      .catch(err => console.log(err));
  }
};
