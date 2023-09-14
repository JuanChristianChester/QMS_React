//create a router for db evidence
const express = require('express');
const router = express.Router();
const DBEvidence = require('../Database/DBEvidence'); // Adjust the path accordingly

db = new DBEvidence();

router.get('/', async (req, res) => {
    try {
        const evidence = await db.getTblEvidence();
        res.json(evidence);
    } catch (error) {
        console.error('Error retrieving evidence:', error);
        res.json({ error });
    }
});

module.exports = router;