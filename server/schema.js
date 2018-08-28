const mongoose = require('mongoose');

const saveAccount = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  "name": String,
  "email": String,
  "Phone": String
});
const saveUserAccount = mongoose.model('saveAccount', saveAccount); 

module.exports = {
  saveUserAccount
};
