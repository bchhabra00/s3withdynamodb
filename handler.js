'use strict';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const uuid = require('uuid');
const s3 = new AWS.S3();
const AccountSid = process.env.ACCOUNT_SID;
const AuthToken = process.env.AUTH_TOKEN;
const PhoneNumber = process.env.PHONE_NUMBER;
const ReceiverNo = process.env.RECEIVER_NO;
const twilio = require('twilio');
const client = new twilio(AccountSid, AuthToken);


module.exports.postprocess = (event) => {
  event.Records.forEach((record) => {
const filename = record.s3.object.key;
const filesize = record.s3.object.size;
    const params ={
      Item = {
      id: uuid,
      filename: filename,
      filesize: filesize
    },
    TableName="S3table"
  };
  dynamodb.put(params, function(err,data){

    if(err){
      console.log(err)
    }
    else{
      console.log
    }
  })
  });
  client.messages.create({
      to: ReceiverNo,
      from: PhoneNumber,
      body: 'the new file named "' + filename + '" was added to your S3 bucket'
    },
    (err, message) => {
      console.log(message);
    })
};

module.exports.remove = (event,callback) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;
    const params ={
      Item = {
      id: uuid,
      filename: filename,
      filesize: filesize
    },
    TableName="S3table"
  };
  dynamodb.put(params, function(err,data){

    if(err){
      callback(err, "error occured")
    }
    else{
      callback(null, data)
    }
  })
  });
};