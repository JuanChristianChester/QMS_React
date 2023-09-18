class AuditFeedback {
    constructor(AuditID, AuditDetails, FeedbackResponse) {
      this.AuditID = AuditID;
      this.AuditDetails = AuditDetails;
      this.FeedbackResponse = FeedbackResponse;
      this.QMSRequirements = [];
    }
  }
  
export default AuditFeedback;
  