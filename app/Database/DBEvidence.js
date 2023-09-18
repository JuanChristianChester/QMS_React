const Database = require('./Database');

class DBEvidence extends Database {
  constructor(config) {
    super(config);
    this.evidenceList = [];
    this.selectAll();
    this.tablename = 'tblEvidence';
  }

  async selectAll() {
    const query = 'SELECT * FROM tblEvidence;';
    try {
      var results = await this.executeQuery(query);

      // convert the results into JSON
      results = JSON.parse(JSON.stringify(results));

      this.evidenceList = results;
      return this.evidenceList;
    } catch (error) {
      console.error('Error in SELECT query:', error);
      return [];
    }

  }

  getEvidenceList() {
    return this.evidenceList;
  }

  async addEvidence(body, pdcaSectionID, evidenceDate) {
    const evidenceID = this.evidenceList.length + 1;
    this.evidenceList.push({ evidenceID, pdcaSectionID, evidenceDate, body });

    const insertQuery = 'INSERT INTO tblEvidence (EvidenceID, PDCASectionID, EvidenceDate, Body) VALUES (?, ?, ?, ?)';
    try {
      await this.executeQuery(insertQuery, [evidenceID, pdcaSectionID, evidenceDate, body]);
    } catch (error) {
      console.error('Error adding evidence:', error);
    }
  }

  async updateEvidence(body, pdcaSectionID, evidenceID) {
    const updateQuery = 'UPDATE tblEvidence SET Body = ?, PDCASectionID = ? WHERE EvidenceID = ?';
    try {
      await this.executeQuery(updateQuery, [body, pdcaSectionID, evidenceID]);
    } catch (error) {
      console.error('Error updating evidence:', error);
    }
  }

  async deleteEvidence(evidenceID) {
    // ...
    // Similar logic for deleting evidence links
    // ...

    const deleteQuery = 'DELETE FROM tblEvidence WHERE EvidenceID = ?';
    try {
      await this.executeQuery(deleteQuery, [evidenceID]);
    } catch (error) {
      console.error('Error deleting evidence:', error);
    }
  }
}

module.exports = DBEvidence;