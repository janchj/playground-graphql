const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const { beerStyle } = require('../types');
const db = require('../../db');

module.exports = {
  type: beerStyle,
  description: 'Create beer style',
  args: {
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Name of beer style' }
  },
  resolve(source, args) {
    return db.beerStyles.createBeerStyle(args)
      .then(response => response.id)
      .catch(err => console.log(err));
  }
};
