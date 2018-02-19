import dynamodb from 'serverless-dynamodb-client';
import AWS from 'aws-sdk';

let dynamoDb;

// handle online/offline
// TODO: find better way
if (process.env.NODE_ENV === 'production') {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
} else {
  dynamoDb = dynamodb.doc; // return an instance of new AWS.DynamoDB.DocumentClient()
}

const uuid = require('uuid');

const options = {
  TableName: `${process.env.DYNAMODB_TABLE}-beer-styles`
};

/**
 * CREATE new beer style
 */
const createBeerStyle = (Item) => {
  const params = {
    TableName: options.TableName,
    Item: {
      id: uuid.v1(),
      name: Item.name
    }
  };
  return dynamoDb.put(params).promise()
    .then(response => response)
    .catch(err => console.log(err));
};

/**
 * GET list of all beer styles
 */
const getAllBeerStyles = () => dynamoDb.scan(options).promise()
  .then(response => response.Items)
  .catch(err => console.log(err));

export {
  createBeerStyle,
  getAllBeerStyles
};
