const express = require('express');
const router = express.Router();

// Define routes for User
router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;