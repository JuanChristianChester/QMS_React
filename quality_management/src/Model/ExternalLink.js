class ExternalLink {
    constructor(EvidenceID, LinkID, Link) {
      this.EvidenceID = EvidenceID;
      this.Link = Link;
      this.LinkID = LinkID;
    }
  
    // Alternate constructor without EvidenceID
    constructor(LinkID, Link) {
      this.Link = Link;
      this.LinkID = LinkID;
    }
  }
  
  export default ExternalLink;
  