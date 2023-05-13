import AWS from 'aws-sdk'

const dynamodb = new AWS.DynamoDB.DocumentClient()

async function getAuctions(event, context) {
  let auctions;

try {
  const result = await dynamodb.scan({
    TableName: process.env.AUCTIONS_TABLE_NAME
  }).promise()

  auctions = result.Items;

} catch (error){
  console.error(error)
}
  return {
    statusCode: 200,
    body: JSON.stringify(auctions),
  };
}

export const handler = getAuctions
