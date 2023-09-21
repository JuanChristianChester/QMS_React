const DBAuditFeedback = require('../Database/DBAuditFeedback')
const DBEvidence = require('../Database/DBEvidence')
const DBQMSRequirements = require('../Database/DBQMSRequirements')
const DBPDCAStages = require('../Database/DBPDCAStage')

function selectRouter (app) {
  app.use('/insert/:table/:json', async (req, res, next) => {
    const tableName = req.params.table
    const json = req.params.json
    try {
      const data = await handleDatabaseOperation(json, tableName)
      res.json(data)
    } catch (error) {
      console.error('Error:', error)
      res.json({ Error: error.message })
    }
  })
}

function handleDatabaseOperation (jsonstring, tableName) {
  let success = false
  const json = JSON.parse(jsonstring)
  let db
  switch (tableName) {
    case 'AuditFeedback':
      db = new DBAuditFeedback()
      success = db.addFeedback(json.body, json.qmsID)
      break
    case 'QMSRequirements':
      db = new DBQMSRequirements()
      success = db.addQMSRequirement(json.title, json.description, json.pdcaStage)
      break
    case 'Evidence':
      db = new DBEvidence()
      success = db.addEvidence(json.title, json.description, json.qmsID)
      break
    case 'PDCAStages':
      db = new DBPDCAStages()
      success = db.addPDCAStage(json.title, json.description)
      break
  }
  return { response: success ? 'insert complete on ' + tableName : 'insert failed on ' + tableName }
}

module.exports = selectRouter
