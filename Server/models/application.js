const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  applicationId: Number,
  applicationName: String,
  accountId: Number,
  accountName: String
});

module.exports = mongoose.model("application", applicationSchema, "application");