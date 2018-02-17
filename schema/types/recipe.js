import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql';

import yeast from './yeast';
import hop from './hop';

export default new GraphQLObjectType({
  name: 'recipe',
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    style: { type: new GraphQLNonNull(GraphQLString) },
    hops: { type: new GraphQLList(hop) },
    yeast: { type: new GraphQLList(yeast) },
  }
});
