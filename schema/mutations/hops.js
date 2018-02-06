const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const { hop } = require('../types');
const db = require('../../db');

module.exports = {
  type: hop,
  description: 'Create hop',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of hop' }
  },
  resolve(source, args) {
    return db.hops.createHop(args);
  }
};
