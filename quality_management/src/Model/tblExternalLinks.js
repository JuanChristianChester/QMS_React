import ExternalLink from './ExternalLink';

class tblExternalLinks {
  constructor() {
    this.externalLinksList = [];

    this.initializeExternalLinksList();
  }

  async initializeExternalLinksList() {
    for (const item of await this.db.getExternalLinksList()) {
      const externalLink = new ExternalLink(item.LinkID, item.Link);
      this.externalLinksList.push(externalLink);
    }
  }
}

export default tblExternalLinks;
