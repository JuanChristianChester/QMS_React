import ExternalLink from "./ExternalLink.js";

class Evidence {
    constructor(evidenceID, pdcaSectionID, evidenceDate, body) {
      this.evidenceID = evidenceID;
      this.pdcaSectionID = pdcaSectionID;
      this.evidenceDate = evidenceDate;
      this.body = body;
      this.externalLinks = [];
    }
  
    addExternalLink(url) {
      this.externalLinks.push(new ExternalLink(this.evidenceID, this.externalLinks.length + 1, url));
    }
  
    removeExternalLink(linkID) {
      this.externalLinks.splice(linkID, 1);
    }
  
    get externalLinkFilePaths() {
      return this.externalLinks.map(link => link.url);
    }
  }
  
  export { Evidence};
  