const { MongoClient } = require('mongodb');
const assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/cocktails', (err, client) => {
  assert.equal(null, err);
  const db = client.db('cocktails');
  db.collection('recipes').insertMany([
    {
      recipeId: 0,
      spiritId: 1
    },
    {
      recipeId: 1,
      spiritId: 2
    }
  ]).then((response) => {
    console.log(response);
    client.close();
  });
});
