const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

const options = {
  TableName: `${process.env.DYNAMODB_TABLE}-hops`
};

/**
 * CREATE new hop
 */
const createHop = (Item) => {
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
 * GET list of all hops
 */
const getAllHops = () => dynamoDb.scan(options).promise()
  .then(response => response.Items)
  .catch(err => console.log(err));

module.exports = {
  createHop,
  getAllHops
};
