//create a router for db pdcastage
const express = require('express');
const router = express.Router();
const DBPDCAStage = require('../Database/DBPDCAStage'); // Adjust the path accordingly

db = new DBPDCAStage();

router.get('/', async (req, res) => {
    try {
        const pdcastage = await db.getPDCAStageList();
        res.json(pdcastage);
    } catch (error) {
        console.error('Error retrieving PDCA Stage:', error);
        res.json({ error });
    }
}
);

module.exports = router;