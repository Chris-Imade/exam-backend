const express = require('express');
const { createParticipants } = require('../controllers/createParticipants');
const router = express.Router();

router.post('/ttt', createParticipants);

module.exports = router;