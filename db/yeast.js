const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

const options = {
  TableName: `${process.env.DYNAMODB_TABLE}-yeast`
};

/**
 * CREATE new yeast
 */
const createYeast = (item) => {
  const params = {
    TableName: options.TableName,
    Item: {
      id: uuid.v1(),
      name: item.name,
      type: item.type
    }
  };
  return dynamoDb.put(params).promise();
};

/**
 * GET list of all yeast
 */
const getAllYeast = () => dynamoDb.scan(options).promise();

module.exports = {
  createYeast,
  getAllYeast
};