const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nfrSchema = new Schema({
  nfrId: String,
  applicationId: String,
  applicationName: String,
  applicationType: String,
  accountName: String,
  target: String,
  source: String,
  transactionName: String,
  concurrentLoad: String,
  responseTime: String,
  requestType: String,
});

module.exports = mongoose.model("nfr", applicationSchema, "nfr");