'use strict';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports.postprocess = (event,callback) => {
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