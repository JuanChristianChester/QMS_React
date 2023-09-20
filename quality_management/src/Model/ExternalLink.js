class ExternalLink {
    constructor(EvidenceID, LinkID, Link) {
      this.EvidenceID = EvidenceID
      this.Link = Link
      this.LinkID = LinkID
    }
  
    // Alternate constructor without EvidenceID
    // figure out how to make overloaded constructors work in js instead of just having duplicate constructors
    constructor(LinkID, Link) {
      this.Link = Link
      this.LinkID = LinkID
    }
  }
  
  export default ExternalLink
  