const Database = require('./Database');

class DBISOPages extends Database {
  constructor(config) {
    super(config);
    this.isoPagesList = [];
    this.selectAll();
  }

  async selectAll() {
    const query = 'SELECT * FROM TblISOPages';
    var results = await this.executeQuery(query);
    this.isoPagesList.push(results);
    return results;
  }

  async addISOPages(isoPage) {
    const insertQuery = 'INSERT INTO TblISOPages (PageNumber, Link) VALUES (?, ?)';
    try {
      await this.executeQuery(insertQuery, [isoPage.pageNumber, isoPage.link]);
      this.isoPagesList.push(isoPage);
    } catch (error) {
      console.error('Error adding ISO pages:', error);
    }
  }
}

module.exports = DBISOPages;
