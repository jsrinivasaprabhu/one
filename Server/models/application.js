const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  applicationId: String,
  applicationName: String,
  accountId: String,
  accountName: String
});

module.exports = mongoose.model("application", applicationSchema, "application");