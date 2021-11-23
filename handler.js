import dynamoDBClient from './dynamodb';

export async function createUser(event) {
  try {
    const { email } = JSON.parse(event.body);
    const params = { 
      Item: { email }, 
      TableName: process.env.USERS_TABLE 
    };

    await dynamoDBClient.put(params).promise();

    return { success: true };
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(event) {
  try {
    const params = { 
      TableName: process.env.USERS_TABLE, 
      Key: { email: event.queryStringParameters.email }
    };

    const user = await dynamoDBClient.get(params).promise();

    if (user.hasOwnProperty('Item')) {
      return { success: true, data: user }
    } else {
      return { success: false };
    }

  } catch (err) {
    console.error(err);
  }
}
