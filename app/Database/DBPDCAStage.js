const Database = require('./Database');

class DBPDCAStage extends Database {
  constructor(config) {
    super(config);
    this.pdcaStageList = [];
    this.retrievePDCAStageList();
  }

  async retrievePDCAStageList() {
    const query = 'SELECT * FROM tblPDCAStage';
    var results = await this.executeQuery(query);
    this.pdcaStageList.push(results);
    return results;
  }

  getPDCAStageList() {
    return this.pdcaStageList;
  }

  async addPDCAStage(pdcaStage) {
    const insertQuery = 'INSERT INTO tblPDCAStage (PDCAID, PDCAStage) VALUES (?, ?)';
    try {
      await this.executeQuery(insertQuery, [pdcaStage.id, pdcaStage.stage]);
      this.pdcaStageList.push(pdcaStage);
    } catch (error) {
      console.error('Error adding PDCA stage:', error);
    }
  }
}

module.exports = DBPDCAStage;
