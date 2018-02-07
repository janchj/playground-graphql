const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const { yeast } = require('../types');
const db = require('../../db');

module.exports = {
  type: yeast,
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
