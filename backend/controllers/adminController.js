const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// In a real app, this admin user would be stored in the database
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com";
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync("admin123", 10);

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (email === ADMIN_EMAIL && bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
      const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
      return res.status(200).json({ success: true, token });
    }
    
    res.status(401).json({ success: false, message: "Invalid credentials" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) return res.status(403).json({ message: "No token provided" });
  
  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret', (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};
