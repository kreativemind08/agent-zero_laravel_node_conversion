const express = require('express');
const router = express.Router();

// Define routes for Game
router.get('/', (req, res) => {
  res.send('Game route');
});

module.exports = router;