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
  return dynamoDb.put(params).promise();
};

/**
 * GET list of all hops
 */
const getAllHops = () => dynamoDb.scan(options).promise();

module.exports = {
  createHop,
  getAllHops
};
