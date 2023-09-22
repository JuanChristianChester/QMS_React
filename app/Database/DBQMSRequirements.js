const Database = require('./Database')

class DBQMSRequirement extends Database {
  async addQMSRequirement (pageID, section, description, sectionDescription) {
    this.tableList = await this.selectAll('tblQMSRequirements')
    const insertQuery = 'INSERT INTO tblQMSRequirements (QMSID, PageID, QMSSection, Description, SectionDescription) VALUES (?, ?, ?, ?, ?)'
    const qmsID = this.tableList.length + 1
    console.log('Adding QMS requirement:', qmsID, pageID, section, description, sectionDescription)
    this.executeQuery(insertQuery, [qmsID, pageID, section, description, sectionDescription], (error) => {
      if (error) {
        console.error('Error adding QMS requirement:', error)
        return false
      } else {
        this.tableList.push({ id: qmsID, pageID, section, description, sectionDescription })
        return true
      }
    })
  }

  editQMSRequirement (qmsRequirement) {
    const updateQuery = 'UPDATE tblQMSRequirements SET PageID = ?, QMSSection = ?, Description = ?, SectionDescription = ? WHERE QMSID = ?'
    this.connection.query(updateQuery, [qmsRequirement.pageID, qmsRequirement.section, qmsRequirement.description, qmsRequirement.sectionDescription, qmsRequirement.id], (error) => {
      if (error) {
        console.error('Error editing QMS requirement:', error)
      }
    })
  }
}

module.exports = DBQMSRequirement
