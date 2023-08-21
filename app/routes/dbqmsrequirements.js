const express = require('express');
const router = express.Router();
const DBQMSRequirements = require('../Database/DBQMSRequirements');


router.get('/', async (req, res) => {
  try {
    db = new DBQMSRequirements();
    const qmsRequirements = await db.retrieveQMSRequirementList();
    res.json(qmsRequirements);
  } catch (error) {
    console.error('', error);
    res.json({ 'Error retrieving qms Requirements:' : error });
  }
});

module.exports = router;