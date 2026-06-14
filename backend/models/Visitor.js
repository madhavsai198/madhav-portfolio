const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  userAgent: { type: String },
  resumeDownloads: { type: Number, default: 0 },
  timeSpent: { type: Number, default: 0 }, // in seconds
  lastVisit: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Visitor", visitorSchema);
