const mongoose = require('mongoose');

// Create a mongoose model
const ParticipantSchema = mongoose.Schema({
    username: String,
    email: String,
})

const Participant = mongoose.model('Participant', ParticipantSchema);
module.exports = Participant;