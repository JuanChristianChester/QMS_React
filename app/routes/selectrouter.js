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

const tableMappings = {
  AuditFeedback: { dbTable: DBAuditFeedback, tableName: 'tblAuditFeedback' },
  QMSRequirements: { dbTable: DBQMSRequirements, tableName: 'tblQMSRequirements' },
  Evidence: { dbTable: DBEvidence, tableName: 'tblEvidence' },
  PDCAStages: { dbTable: DBPDCAStages, tableName: 'tblPDCAStage' }
}

async function handleDatabaseOperation (tableName) {
  if (!tableMappings[tableName]) {
    throw new Error(`Table ${tableName} not found in tableMappings`)
  }

  return await performDatabaseOperation(tableMappings[tableName].dbTable, tableMappings[tableName].tableName)
}

async function performDatabaseOperation (DatabaseClass, tableName) {
  const db = new DatabaseClass()
  return await db.selectAll(tableName)
}

module.exports = selectRouter
