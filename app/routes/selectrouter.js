const DBAuditFeedback = require('../Database/DBAuditFeedback')
const DBEvidence = require('../Database/DBEvidence')
const DBQMSRequirements = require('../Database/DBQMSRequirements')
const DBPDCAStages = require('../Database/DBPDCAStage')

function selectRouter (app) {
  app.use('/select/', async (req, res, next) => {
    const tableName = req.query.table
    try {
      const data = await handleDatabaseOperation(tableName)
      res.json(data)
    } catch (error) {
      console.error('Error:', error)
      res.json({ Error: error.message })
    }
  })
}

async function handleDatabaseOperation (tableName) {
  switch (tableName) {
    case 'AuditFeedback':
      return await performDatabaseOperation(DBAuditFeedback, 'tblAuditFeedback')
    case 'QMSRequirements':
      return await performDatabaseOperation(DBQMSRequirements, 'tblQMSRequirements')
    case 'Evidence':
      return await performDatabaseOperation(DBEvidence, 'tblEvidence')
    case 'PDCAStages':
      return await performDatabaseOperation(DBPDCAStages, 'tblPDCAStage')
  }
}

async function performDatabaseOperation (DatabaseClass, tableName) {
  const db = new DatabaseClass()
  return await db.selectAll(tableName)
}

module.exports = selectRouter
