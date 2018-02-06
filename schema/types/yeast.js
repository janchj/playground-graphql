const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'yeast',
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of yeast' },
    type: { type: new GraphQLNonNull(GraphQLString), description: 'Type of yeast' },
  }
});

