import dynamodb from 'serverless-dynamodb-client';
import AWS from 'aws-sdk';
import uuid from 'uuid';

let dynamoDb;

// handle online/offline
// TODO: find better way
if (process.env.NODE_ENV === 'production') {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
} else {
  dynamoDb = dynamodb.doc;
}

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
  return dynamoDb.put(params).promise()
    .then(response => response)
    .catch(err => console.log(err));
};

/**
 * GET list of all yeast
 */
const getAllYeast = () => dynamoDb.scan(options).promise()
  .then(response => response.Items)
  .catch((err) => {
    console.log(err);
  });

export {
  createYeast,
  getAllYeast
};
