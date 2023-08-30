const express = require('express');
const router = express.Router();
const DBQMSRequirements = require('../Database/DBQMSRequirements');


router.get('/fetch', async (req, res) => {
  try {
    db = new DBQMSRequirements();
    var qmsRequirements = await db.retrieveQMSRequirementList();
    qmsRequirements = JSON.parse(qmsRequirements);
    res.json(qmsRequirements);
  } catch (error) {
    console.error('', error);
    res.json({ 'Error retrieving qms Requirements:' : error });
  }
});

//post a new qms requirement
router.post('/post', async (req, res) => {
  try {
    db = new DBQMSRequirements();
    var qmsRequirement = await db.createQMSRequirement(req.body);
    qmsRequirement = JSON.parse(qmsRequirement);
    res.json(qmsRequirement);
  } catch (error) {
    console.error('', error);
    res.json({ 'Error creating qms requirement:' : error });
  }
});

module.exports = router;