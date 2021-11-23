import DynamoDB from 'aws-sdk/clients/dynamodb';

const dynamoDBClient = new DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'DEFAULT_ACCESS_KEY',
  secretAccessKey: 'DEFAULT_SECRET'
});

export default dynamoDBClient;