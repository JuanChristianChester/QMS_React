const DBAuditFeedback = require('../Database/DBAuditFeedback')
const DBEvidence = require('../Database/DBEvidence')
const DBQMSRequirements = require('../Database/DBQMSRequirements')
const DBPDCAStages = require('../Database/DBPDCAStage')

function insertRouter (app) {
  app.use('/insert', async (req, res, next) => {
    const tableName = req.query.table
    const json = req.query.json
    try {
      const data = handleDatabaseOperation(json, tableName)
      res.json(data)
    } catch (error) {
      console.error('Error:', error)
      res.json({ Error: error.message })
    }
  })
}

const tableMappings = {
  AuditFeedback: {
    dbClass: new DBAuditFeedback(),
    method: 'addFeedback',
    params: ['body', 'qmsID']
  },
  QMSRequirements: {
    dbClass: new DBQMSRequirements(),
    method: 'addQMSRequirement',
    params: ['pageID', 'QMSSection', 'description', 'sectionDescription']
  },
  Evidence: {
    dbClass: new DBEvidence(),
    method: 'addEvidence',
    params: ['body', 'pdcaSectionID', 'evidenceDate']
  },
  PDCAStages: {
    dbClass: new DBPDCAStages(),
    method: 'addPDCAStage',
    params: ['PDCAStage']
  }
}

function handleDatabaseOperation (jsonstring, tableName) {
  const mapping = tableMappings[tableName]

  if (!mapping) {
    throw new Error(`Table ${tableName} not found in tableMappings`)
  }

  const json = JSON.parse(jsonstring)
  const db = mapping.dbClass
  const params = mapping.params.map(paramName => json[paramName])
  const success = db[mapping.method](...params)

  return { response: success ? 'insert complete on ' + tableName : 'insert failed on ' + tableName }
}

module.exports = insertRouter
