const Database = require('./Database')

class DBPDCAStage extends Database {
  async addPDCAStage (pdcaStage) {
    this.tableList = await this.selectAll('tblPDCAStage')
    const pdcaStageID = this.tableList.length + 1
    const insertQuery = 'INSERT INTO tblPDCAStage (PDCAID, PDCAStage) VALUES (?, ?)'
    try {
      await this.executeQuery(insertQuery, [pdcaStageID, pdcaStage])
      this.tableList.push({ pdcaStageID, pdcaStage })
    } catch (error) {
      console.error('Error adding PDCA stage:', error)
    }
  }
}

module.exports = DBPDCAStage
