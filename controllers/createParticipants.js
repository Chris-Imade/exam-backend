const Participant = require("../schema/Participants");

const createParticipants = async (req, res) => {
    try {
      const { username, email } = req.body;
  
      // Create a new participant
      const participant = new Participant({ username, email });
  
      // Save to the database
      await participant.save();
  
      res.status(201).json({ message: 'Participant added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      next(error);
    }
}

module.exports = {
    createParticipants,
}