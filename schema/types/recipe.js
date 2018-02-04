const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} = require('graphql');

const hop = require('./hop');

module.exports = new GraphQLObjectType({
  name: 'recipe',
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    hops: { type: new GraphQLList(hop) },
  }
});
