const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nfrSchema = new Schema({
  nfrId: Number,
  applicationId: Number,
  applicationName: String,
  applicationType: String,
  accountName: String,
  target: String,
  source: String,
  transactionName: String,
  concurrentLoad: Number,
  responseTime: Number,
  requestType: String,
});

module.exports = mongoose.model("nfr", applicationSchema, "nfr");