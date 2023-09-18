import Evidence from './Evidence';

class tblEvidence {
  constructor() {
    this.externalLinksDb = new DBExternalLinks();
    this.evidenceList = [];

    this.initializeEvidenceList();
  }

  async initializeEvidenceList() {
    const externalLinks = await this.externalLinksDb.getExternalLinksList();
    
    for (const item of await this.evidenceDb.getEvidenceList()) {
      const evidence = new Evidence(item.EvidenceID, item.PDCASectionID, item.EvidenceDate, item.Body);
      evidence.ExternalLinkFilePaths = this.getExternalLinksForEvidence(externalLinks, evidence.EvidenceID);

      this.evidenceList.push(evidence);
    }
  }

  getExternalLinksForEvidence(externalLinks, evidenceID) {
    return externalLinks
      .filter(link => link.EvidenceID === evidenceID)
      .map(link => link.Link);
  }

  async addEvidence(evidence) {
    const nextID = this.evidenceList.length === 0 ? 1 : 1 + Math.max(...this.evidenceList.map(e => e.EvidenceID));

    evidence.EvidenceID = nextID;
    this.evidenceList.push(evidence);

    await this.evidenceDb.addEvidence(evidence.Body, evidence.PDCASectionID, new Date());

    for (const link of evidence.ExternalLinkFilePaths) {
      await this.externalLinksDb.addExternalLink(link, nextID);
    }
  }

  async editEvidence(evidence) {
    await this.evidenceDb.updateEvidence(evidence.Body, evidence.PDCASectionID, evidence.EvidenceID);

    this.evidenceList = this.evidenceList.map(e => (e.EvidenceID === evidence.EvidenceID ? evidence : e));
  }

  async deleteEvidence(evidence) {
    await this.evidenceDb.deleteEvidence(evidence.EvidenceID);

    this.evidenceList = this.evidenceList.filter(e => e.EvidenceID !== evidence.EvidenceID);
  }

  uploadFile(filename, destFile, destinationFolder) {
    // Implement your file upload logic here
  }

  addPDF(fileName) {
    const destFile = `../../PDFs/${fileName}`;
    this.uploadFile(fileName, destFile, '../../PDFs');
    return destFile;
  }
}

export default tblEvidence;
