const Database = require('./Database');

class DBPDCASection extends Database {
  constructor(config) {
    super(config);
    this.pdcaSectionList = [];
    this.retrievePDCASectionList();
  }

  async retrievePDCASectionList() {
    const query = 'SELECT * FROM tblPDCASection';
    var results = await this.executeQuery(query);
    this.pdcaSectionList.push(results);
    return results;
  }

  getPDCASectionList() {
    return this.pdcaSectionList;
  }

  async addPDCASection(pdcaSection) {
    const insertQuery = 'INSERT INTO tblPDCASection (PDCASectionID, PDCAID, Section) VALUES (?, ?, ?)';
    try {
      await this.executeQuery(insertQuery, [pdcaSection.sectionID, pdcaSection.pdcaID, pdcaSection.section]);
      this.pdcaSectionList.push(pdcaSection);
    } catch (error) {
      console.error('Error adding PDCA section:', error);
    }
  }
}

module.exports = DBPDCASection;
