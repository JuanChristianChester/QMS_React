const Database = require('./Database');

class DBAuditFeedback extends Database {
  constructor(config) {
    super(config);
    this.auditFeedbacklst = [];
  }

  async addFeedback(body, qmsID) {
    this.auditFeedbacklst = await this.selectAll('tblAuditFeedback');
    const auditID = this.auditFeedbacklst.length + 1;
    this.auditFeedbacklst.push({ auditID, auditDetails: body, feedbackResponse: '' });
1
    const insertQuery = 'INSERT INTO tblAuditFeedback (AuditID, AuditDetails) VALUES (?, ?)';
    console.log('Adding audit feedback:', auditID, body);
    try {
      await this.executeQuery(insertQuery, [auditID, body]);
      this.addQMSJoin(qmsID);
      return true;
    } catch (error) {
      console.error('Error adding audit feedback:', error);
      return false;
    }
  }

  async addQMSJoin(qmsIDList) {
    const insertQuery = 'INSERT INTO tblQMSJoinFeedback (AuditID, QMSID) VALUES (?, ?)';
    const auditID = this.auditFeedbacklst.length;
    console.log('Adding QMS join:', auditID, qmsIDList);
    for (const qmsID of qmsIDList) {
      try {
        await this.executeQuery(insertQuery, [auditID, qmsID]);
      } catch (error) {
        console.error('Error adding QMS join:', error);
      }
    }
  }

  getAuditFeedback() {
    return this.auditFeedbacklst;
  }

  async addFeedbackResponse(auditID, feedbackResponse) {
    const updateQuery = 'UPDATE tblAuditFeedback SET FeedbackResponse = ? WHERE AuditID = ?';
    try {
      await this.executeQuery(updateQuery, [feedbackResponse, auditID]);
      this.auditFeedbacklst.forEach((item) => {
        if (item.auditID === auditID) {
          item.feedbackResponse = feedbackResponse;
        }
      });
    } catch (error) {
      console.error('Error adding feedback response:', error);
    }
  }

  async getAssociatedQMS(auditID) {
    const query = 'SELECT * FROM tblQMSRequirements INNER JOIN tblQMSJoinFeedback ON tblQMSRequirements.QMSID = tblQMSJoinFeedback.QMSID WHERE tblQMSJoinFeedback.AuditID = ?';
    try {
      const results = await this.executeQuery(query, [auditID]);
      return results;
    } catch (error) {
      console.error('Error retrieving associated QMS:', error);
      return [];
    }
  }
}

module.exports = DBAuditFeedback;
