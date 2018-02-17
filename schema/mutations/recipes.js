import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import { recipe, hop, yeast } from '../types';
import db from '../../db';

export default {
  type: recipe,
  description: 'Create recipe',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of recipe' },
    style: { type: new GraphQLNonNull(GraphQLString), description: 'Beer style' },
    hops: { type: new GraphQLList(hop), description: 'List of hops' },
    yeast: { type: new GraphQLList(yeast), description: 'List of yeast' }
  },
  resolve(source, args) {
    return db.recipe.createRecipe(args)
      .then(response => response)
      .catch(err => console.log(err));
  }
};

