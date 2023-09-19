const DBAuditFeedback = require('../Database/DBAuditFeedback');
const DBEvidence = require('../Database/DBEvidence');
const DBQMSRequirements = require('../Database/DBQMSRequirements');
const DBPDCAStages = require('../Database/DBPDCAStage');

function selectRouter(app) {
  app.use('/insert/:table', async (req, res, next) => {
    const tableName = req.params.table;
    try {
      const data = await handleDatabaseOperation(tableName);
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.json({ 'Error': error.message });
    }
  });
}

async function handleDatabaseOperation(tableName) {
  var success = false;
  switch (tableName) {
    case 'AuditFeedback':
        const db = new DBAuditFeedback();
        success = db.addFeedback();
        return await performDatabaseOperation(DBAuditFeedback, 'tblAuditFeedback');
    case 'QMSRequirements':
        return await performDatabaseOperation(DBQMSRequirements, 'tblQMSRequirements');
    case 'Evidence':
        return await performDatabaseOperation(DBEvidence, 'tblEvidence');
    case 'PDCAStages':
        return await performDatabaseOperation(DBPDCAStages, 'tblPDCAStage');
  }
}

async function performDatabaseOperation(DatabaseClass, tableName, success) {
  if (success) {
    return {"response": "performed on " + tableName};
  }
  return {"response": "not performed on " + tableName};
}

module.exports = selectRouter;