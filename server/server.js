const 
// importing libraries for server | db | and validation
// DBURL = process.env.DBURL,
DBURL = 'mongodb://alexare:WW4uIXS8ha6R@ds137102.mlab.com:37102/mpa',
Promise = require('bluebird'),
express = require('express'),
mongoose = require('mongoose')
schemas = require('./schema'),
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
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('DataBase connection closed, app termination');
    process.exit(0);
  });
});

function connectToDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DBURL, options);
    db = mongoose.connection;
    db.on('error', err => {
      console.error(`DataBase connection error ${err}`);
      return reject(`Error connecting to mongodb ${err}`)
    });
    db.once('connected', () => {
      console.info(`Connection successful`);
      return resolve(true);
    });
    db.once('disconnected', () => {
      console.info('Disconnected successfully');
    });
  });
}

connectToDB()
  .then(ok => {
    console.log('connection ok');
  })


app.post('/saveinfo', (req, res) => {

  try {
    let saveUser = new schemas.saveUserAccount(req.body);
    let result = saveUser.save();
    res.json(result);
    res.send("Saved successfully");
    console.log("Saved user account", result);
  }
  catch (err) {
    console.error("Couldnt save user account", err);
  }

})

app.listen(5000, () => {
  console.log("Listening on port", 5000);
})























































// const
//   // DBURL = process.env.DBURL,
//   DBURL = "mongodb://what-ever-that-is-database-comes-here",
//   Promise = require('bluebird'),
//   mongoose = require('mongoose'),
//   express = require('express'),
//   schemas = require('./schema'),
//   app = express(),
//   options = {
//     promiseLibrary: Promise,
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 500,
//     poolSize: 10,
//     socketTimeoutMS: 0,
//     keepAlive: true,
//     autoIndex: false
//   };

// let db;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Method", "GET,POST,PUT,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
//   if (req.method === "OPTIONS") {
//     return res.end()
//   }
//   next();
// })

// app.use(express.json());

// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     console.log('DataBase connection closed, app termination');
//     process.exit(0);
//   });
// });

// function connectToDB() {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(DBURL, options);
//     db = mongoose.connection;
//     db.on('error', err => {
//       console.error(`DataBase connection error ${err}`);
//       return reject(`Error connecting to mongodb ${err}`)
//     });
//     db.once('connected', () => {
//       console.info(`Connection successful`);
//       return resolve(true);
//     });
//     db.once('disconnected', () => {
//       console.info('Disconnected successfully');
//     });
//   });
// }

// connectToDB()
//   .then(ok => {
//     console.log('connection ok');
//   })


// app.post('/saveinfo', (req, res) => {

//   try {
//     let saveUser = new schemas.saveUserAccount(req.body);
//     let result = await saveUser.save();
//     res.json(result);
//     res.send("Saved successfully");
//     console.log("Saved user account", result);
//   }
//   catch (err) {
//     console.error("Couldnt save user account", err);
//   }

// })

// app.listen(5000, () => {
//   console.log("Listening on port", 5000);
// })


