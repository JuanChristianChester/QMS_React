const DBAuditFeedback = require('../Database/DBAuditFeedback');
const DBEvidence = require('../Database/DBEvidence');
const DBQMSRequirements = require('../Database/DBQMSRequirements');
const DBPDCAStages = require('../Database/DBPDCAStage');

function selectRouter(app) {
  app.use('/:table', async (req, res, next) => {
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
  switch (tableName) {
    case 'auditFeedback':
      return await performDatabaseOperation(DBAuditFeedback, 'tblAuditFeedback');
    case 'QMSRequirements':
      return await performDatabaseOperation(DBQMSRequirements, 'tblQMSRequirements');
    case 'evidence':
      return await performDatabaseOperation(DBEvidence, 'tblEvidence');
    case 'PDCAStages':
      return await performDatabaseOperation(DBPDCAStages, 'tblPDCAStages');
    default:
      throw new Error('Table not found');
  }
}

async function performDatabaseOperation(DatabaseClass, tableName) {
  const db = new DatabaseClass();
  console.log('Table name:', tableName);
  return await db.selectAll(tableName);
}

module.exports = selectRouter;