


1. Create an AWS account and then go to service S3 and create a s3 bucket with a unique name(which is not taken by anyone before)
2. Table will be created in dynamodb with the name you will specified.
3. Create a twilio account, create a project, after this you will get a number, a SID  and a token.
2. Change Bucket name, Table name, ACCOUNT_SID , AUTH_TOKEN, PHONE_NUMMBER and RECEIVER_NO in .yml file.
3. Enteries can be seen in dynamoDb table upon removing and adding files in s3 bucket.
4. Also an SMS will be sent to the receiver's number specified in .yml.