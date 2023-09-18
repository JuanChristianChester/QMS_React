const Database = require('./Database');

class DBISOPages extends Database {
  constructor(config) {
    super(config);
    this.isoPagesList = [];
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
