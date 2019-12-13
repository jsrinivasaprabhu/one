const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountId: String,
  accountName: String
});

module.exports = mongoose.model("account", accountSchema, "account");