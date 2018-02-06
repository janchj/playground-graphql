const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
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
  return dynamoDb.put(params).promise();
};

/**
 * GET list of all beer styles
 */
const getAllBeerStyles = () => dynamoDb.scan(options).promise();

module.exports = {
  createBeerStyle,
  getAllBeerStyles
};
