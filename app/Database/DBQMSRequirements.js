const Database = require('./Database')

class DBQMSRequirement extends Database {
  constructor (connection) {
    super(connection)
    this.connection = connection
    this.qmsRequirementList = []
  }

  addQMSRequirement (qmsRequirement) {
    const insertQuery = 'INSERT INTO tblQMSRequirements (QMSID, PageID, QMSSection, Description, SectionDescription) VALUES (?, ?, ?, ?, ?)'
    this.connection.query(insertQuery, [qmsRequirement.id, qmsRequirement.pageID, qmsRequirement.section, qmsRequirement.description, qmsRequirement.sectionDescription], (error) => {
      if (error) {
        console.error('Error adding QMS requirement:', error)
      } else {
        this.qmsRequirementList.push(qmsRequirement)
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
