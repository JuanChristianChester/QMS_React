const Database = require('./Database')

class DBExternalLinks extends Database {
  async addExternalLink (link, evidenceID) {
    const linkID = this.getNextLinkID()
    if (linkID === -1) {
      return
    }

    const linkInsertSuccess = await this.insertLink(linkID, link)
    const joinInsertSuccess = await this.insertLinkJoin(evidenceID, linkID)

    if (linkInsertSuccess && joinInsertSuccess) {
      this.tableList.push({ evidenceID, linkID, link })
    }
  }

  getNextLinkID () {
    if (this.tableList.length > 0) {
      return this.tableList[this.tableList.length - 1].linkID + 1
    }
    return 1
  }

  async insertLink (linkID, link) {
    const insertQuery = 'INSERT INTO tblExternalLinks (LinkID, Link) VALUES (?, ?)'
    try {
      await this.executeQuery(insertQuery, [linkID, link])
      return true
    } catch (error) {
      console.error('Error inserting external link:', error)
      return false
    }
  }

  async insertLinkJoin (evidenceID, linkID) {
    const insertQuery = 'INSERT INTO tblEvidenceLinkJoin (EvidenceID, LinkID) VALUES (?, ?)'
    try {
      await this.executeQuery(insertQuery, [evidenceID, linkID])
      return true
    } catch (error) {
      console.error('Error inserting link join:', error)
      return false
    }
  }
}

module.exports = DBExternalLinks
