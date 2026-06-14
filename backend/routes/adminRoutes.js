const express = require("express");
const router = express.Router();

const { login, verifyToken } = require("../controllers/adminController");

router.post("/login", login);

router.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected Admin Dashboard Data", user: req.user });
});

module.exports = router;
