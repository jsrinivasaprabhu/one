const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  email: String,
  password: String,
  accountId: String,
  accountName: String
});

module.exports = mongoose.model("user", userSchema, "user");
// user = model.js name
// userSchema = model object
// user = collection name 