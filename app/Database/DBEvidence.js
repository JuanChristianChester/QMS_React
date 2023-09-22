const Database = require('./Database')

class DBEvidence extends Database {
  async addEvidence (body, pdcaSectionID, evidenceDate) {
    this.tableList = await this.selectAll('tblEvidence')
    const evidenceID = this.tableList.length + 1
    this.tableList.push({ evidenceID, pdcaSectionID, evidenceDate, body })

    const insertQuery = 'INSERT INTO tblEvidence (EvidenceID, PDCASectionID, EvidenceDate, Body) VALUES (?, ?, ?, ?)'
    try {
      await this.executeQuery(insertQuery, [evidenceID, pdcaSectionID, evidenceDate, body])
      return true
    } catch (error) {
      console.error('Error adding evidence:', error)
      return false
    }
  }

  async updateEvidence (body, pdcaSectionID, evidenceID) {
    const updateQuery = 'UPDATE tblEvidence SET Body = ?, PDCASectionID = ? WHERE EvidenceID = ?'
    try {
      await this.executeQuery(updateQuery, [body, pdcaSectionID, evidenceID])
    } catch (error) {
      console.error('Error updating evidence:', error)
    }
  }

  async deleteEvidence (evidenceID) {
    // ...
    // Similar logic for deleting evidence links
    // ...

    const deleteQuery = 'DELETE FROM tblEvidence WHERE EvidenceID = ?'
    try {
      await this.executeQuery(deleteQuery, [evidenceID])
    } catch (error) {
      console.error('Error deleting evidence:', error)
    }
  }
}

module.exports = DBEvidence
