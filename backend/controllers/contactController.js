const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Simple nodemailer setup (using ethereal for testing or a dummy config)
// In production, use real credentials
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.ethereal.email",
  port: process.env.EMAIL_PORT || 587,
  auth: {
    user: process.env.EMAIL_USER || "test@ethereal.email",
    pass: process.env.EMAIL_PASS || "password123"
  }
});

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message, type } = req.body;

    const newContact = new Contact({
      name, email, message, type
    });

    await newContact.save();

    // Send confirmation email
    try {
      await transporter.sendMail({
        from: '"Madhav Portfolio" <noreply@madhavportfolio.com>',
        to: email,
        subject: "Message Received - Madhav's Portfolio",
        text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you shortly.\n\nBest,\nMadhav`
      });
      
      // Send notification to admin (Madhav)
      await transporter.sendMail({
        from: '"Portfolio System" <system@madhavportfolio.com>',
        to: "madhav@example.com",
        subject: `New ${type} message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nType: ${type}\nMessage: ${message}`
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // We still return success since it's saved in DB
    }

    res.status(201).json({ success: true, message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
