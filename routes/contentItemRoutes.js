const express = require('express');
const router = express.Router();

// Define routes for ContentItem
router.get('/', (req, res) => {
  res.send('ContentItem route');
});

module.exports = router;