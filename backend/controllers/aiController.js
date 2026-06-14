exports.chat = async (req, res) => {
  try {
    const { message } = req.body;
    
    // Here you would integrate with OpenAI API or Gemini
    // For now, returning a mock response.
    
    let reply = "I am a mock AI for now! In production, I will connect to OpenAI to answer questions about Madhav's projects, skills, and experience.";
    
    if (message.toLowerCase().includes("resume")) {
      reply = "You can download Madhav's resume from the Hero section or by clicking the Download Resume button on the site.";
    } else if (message.toLowerCase().includes("skills")) {
      reply = "Madhav is skilled in React, Node.js, MongoDB, Express, and more. Check out the 3D Skills section!";
    } else if (message.toLowerCase().includes("contact") || message.toLowerCase().includes("hire")) {
      reply = "You can reach out to Madhav via the Contact form below, or directly via LinkedIn and GitHub.";
    }

    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: "Failed to communicate with AI" });
  }
};
