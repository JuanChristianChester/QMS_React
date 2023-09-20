import AuditFeedback from './AuditFeedback'
import QMSRequirement from './QMSRequirement'

class tblAuditFeedback {
  constructor () {
    this.AuditFeedback = []

    this.initializeAuditFeedback()
  }

  async initializeAuditFeedback () {
    const auditFeedbackList = await this.db.getAuditFeedback()

    for (const { AuditID, Body, FeedbackResponse } of auditFeedbackList) {
      const feedback = new AuditFeedback(AuditID, Body, FeedbackResponse)
      feedback.QMSRequirements = await this.addAssociatedQMS(feedback)
      this.AuditFeedback.push(feedback)
    }
  }

  async addAssociatedQMS (auditFeedback) {
    const associatedQMSList = await this.db.getAssociatedQMS(auditFeedback.AuditID)
    const reqs = []

    for (const item of associatedQMSList) {
      const req = new QMSRequirement(item.QMSID, item.PageID, item.QMSSection, item.Description, item.SectionDescription)
      reqs.push(req)
    }

    return reqs
  }

  async addFeedback (body, requirements) {
    const QMSRequirementIDs = requirements.map(item => item.ID)
    await this.db.addFeedback(body, QMSRequirementIDs)
  }

  async addFeedbackResponse (AuditID, FeedbackResponse) {
    const auditFeedbackList = await this.db.getAuditFeedback()
    await this.db.addFeedbackResponse(AuditID, FeedbackResponse)

    this.AuditFeedback.forEach(feedback => {
      const matchingAudit = auditFeedbackList.find(audit => audit.AuditID === feedback.AuditID)
      if (matchingAudit) {
        feedback.FeedbackResponse = matchingAudit.AuditID === AuditID ? FeedbackResponse : matchingAudit.FeedbackResponse
      }
    })
  }
}

export default tblAuditFeedback
