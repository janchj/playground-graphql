# playground-graphql

GraphQL API exposing endpoints for a beer service.

## Installation

`npm install` installs all dependencies using NPM
`yarn install` installs all dependencies using yarn

## Features

- Serverless
- DynamoDB
- GraphQL

## Deployment

Deployed using AWS + Serverless.
`sls deploy -v` deploys all handlers to AWS

## Running Locally?
If you are running the application locally, a few things need to be set-up in order to work correctly.

`npm run start:local` starts the dynamoDb local instance and runs the application locally
`sls dynamodb install` installs dynamoDb locally
`sls dynamodb start --migrate` stats dynamodb local instance
`sls dynamodb remove` removes dynamodb local instance

## Next Steps

