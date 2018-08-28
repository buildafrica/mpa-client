// importing libraries for server | db | and validation
const 
// DBURL = process.env.DBURL,
Promise = require('bluebird'),
express = require('express'),
mongoose = require('mongoose')
// schemas = require('./schema'),
app = express(), 
options = {
  promiseLibrary: Promise, 
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10, 
  socketTimeoutMS: 0,
  keepAlive: true,
  autoIndex: false
};

let db;



// app.use middleware with callback function for request, response and next
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  if (req.method === "OPTIONS"){
    return res.end()
  }
  next();

})
app.use(express.json());



// create process to monitor database connection
process.on('SIGNT', () => {
  mongoose.connection.close(() => {
    console.log("Database connection closed, app terminated");
    process.exit(0);
  });
});



