import dynamodb from 'serverless-dynamodb-client';
import AWS from 'aws-sdk';
import uuid from 'uuid';

let dynamoDb;

// handle online/offline
// TODO: find better way
if (process.env.NODE_ENV === 'production') {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
} else {
  dynamoDb = dynamodb.doc; // return an instance of new AWS.DynamoDB.DocumentClient()
}

const options = {
  TableName: `${process.env.DYNAMODB_TABLE}-recipes`
};

/**
 * CREATE new beer recipe
 */
const createRecipe = (Item) => {
  const params = {
    TableName: options.TableName,
    Item: {
      id: uuid.v1(),
      name: Item.name,
      style: Item.style,
      hops: Item.hops,
      yeast: Item.yeast
    }
  };
  return dynamoDb.put(params).promise()
    .then(response => response)
    .catch(err => console.log(err));
};

/**
 * GET list of all beer recipes
 */
const getAllRecipes = () => dynamoDb.scan(options).promise()
  .then(response => response.Items)
  .catch(err => console.log(err));

export {
  createRecipe,
  getAllRecipes
};
