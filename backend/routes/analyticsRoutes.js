const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

router.post("/track", async (req, res) => {
  try {
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];
    
    let visitor = await Visitor.findOne({ ipAddress });
    if (!visitor) {
      visitor = new Visitor({ ipAddress, userAgent });
    } else {
      visitor.lastVisit = Date.now();
    }
    await visitor.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
