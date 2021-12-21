# Accubits


Instead of using Rabbit MQ, I have used REDIS and npm library named Bull which uses redis, Bull is a Node library that implements a fast and robust queue system based on redis.

1.  Install and run redis run locally:
2.  Run Redis Commander here https://www.npmjs.com/package/redis-commander  (This GUI tool helps to check what keys are being sent on Redis.)
3.  run npm install and npm start to run the server


POST -> localhost:5000/user/add

Body - >
{
    "firstName":"Muhammad",
    "lastName":"Siddik",
    "email":"akbarsiddik2002@gmail.com",
    "age":19
}

Example Response - > 200

{
    "status": 1,
    "message": "User Created Successfully",
    "data": {
        "firstName": "Muhammad",
        "lastName": "Siddik",
        "email": "akbarsiddik2002@gmail.com",
        "age": 19
    }
}

POST -> localhost:5000/user/sendNewsLetters

formdata -> 

key : files
select file type : example.csv

Example Response - > 200

{
  "status": 1,
  "message": "Files have been added to the queue.",
  "data": [
    {
      "id": "4",
      "name": "__default__",
      "data": {
        "fieldname": "file",
        "originalname": "example.csv",
        "encoding": "7bit",
        "mimetype": "text/csv",
        "destination": "./uploads",
        "filename": "addresses-1636283548463",
        "path": "uploads/addresses-1636283548463",
        "size": 328
      },
      "opts": {
        "attempts": 1,
        "delay": 0,
        "timestamp": 1636283548468
      },
      "progress": 0,
      "delay": 0,
      "timestamp": 1636283548468,
      "attemptsMade": 0,
      "stacktrace": [],
      "returnvalue": null,
      "finishedOn": null,
      "processedOn": null
    }
  ]
}