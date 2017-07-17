// Get the packages we need
var express = require('express');

// Create Express application
var app = module.exports = express();

// Defined the port number.
var port =  8888;

// Start the server
app.listen(port);

console.log('Server starts on port ' + port);
var crontab = require('node-cron');
var jobId = crontab.schedule("* * * * *", function(){
    //This will call this function after every minute.
    console.log("Running a task every minute");
});
