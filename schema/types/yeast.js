import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'yeast',
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of yeast' },
    type: { type: new GraphQLNonNull(GraphQLString), description: 'Type of yeast' },
  }
});
