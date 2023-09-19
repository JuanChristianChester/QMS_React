const DBAuditFeedback = require('../Database/DBAuditFeedback');
const DBEvidence = require('../Database/DBEvidence');
const DBQMSRequirements = require('../Database/DBQMSRequirements');
const DBPDCAStages = require('../Database/DBPDCAStage');

function selectRouter(app) {
  app.use('/insert/:table/:json', async (req, res, next) => {
    const tableName = req.params.table;
    const json = req.params.json;
    try {
      const data = await handleDatabaseOperation(json, tableName);
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.json({ 'Error': error.message });
    }
  });
}

async function handleDatabaseOperation(jsonstring, tableName) {
  var success = false;
  switch (tableName) {
    case 'AuditFeedback':
        var json = JSON.parse(jsonstring);
        const db = new DBAuditFeedback();
        console.log()
        success = db.addFeedback(json.body, json.qmsID);
        return await performDatabaseOperation(DBAuditFeedback, 'tblAuditFeedback', success);
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