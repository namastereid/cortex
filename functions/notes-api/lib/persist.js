import AWS from 'aws-sdk';
const dynamoConfig = {
  sessionToken:    process.env.AWS_SESSION_TOKEN,
  region:          process.env.AWS_REGION
};
const docClient = new AWS.DynamoDB.DocumentClient(dynamoConfig);
const stage = process.env.SERVERLESS_STAGE;
const projectName = process.env.SERVERLESS_PROJECT_NAME;
const commentsTable = projectName + '-comments-' + stage;

export function createComment(comment){
  var params = {
    TableName: commentsTable,
    Item: comment
  };
  docClient.put(params, function(err, data){
    if(err) {
      console.error("Unable to create comment:", comment, ". Error:", JSON.stringify(err, null, 2));
    } else {
      console.log("Created comment:", comment);
    }
  });
}

export function getComments() {
  var params = {
    TableName: commentsTable,
    AttributesToGet: [
      'UserId',
      'Timestamp',
      'Content'
    ]
  };
  
  docClient.scan(params, function(err, data){
    if (err) {
      console.error("Unable to get comments. Error:", JSON.stringify(err, null, 2));
    } else {
      return data["Items"];
    }
  });
}