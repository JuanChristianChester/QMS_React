const express = require('express');
const router = express.Router();
const DBAuditFeedback = require('../Database/DBAuditFeedback');



  try {
    db = new DBAuditFeedback();
    const auditFeedback = await db.getTblAuditFeedback();
    res.json(auditFeedback);
  } catch (error) {
    console.error('', error);
    res.json({ 'Error retrieving audit feedback:' : error });
  }

module.exports = router;