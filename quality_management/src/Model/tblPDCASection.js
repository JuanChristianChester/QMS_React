import PDCASection from './PDCASection';

class TblPDCASections {
  constructor() {
    this.pdcaSectionList = [];

    this.initializePDCASectionList();
  }

  async initializePDCASectionList() {
    for (const item of await this.db.getPDCASectionList()) {
      const pdcaSection = new PDCASection(item.SectionID, item.PDCAID, item.Section);
      this.pdcaSectionList.push(pdcaSection);
    }
  }

  async add(id, sectionID, section) {
    const pdcaSection = new PDCASection(id, sectionID, section);
    this.pdcaSectionList.push(pdcaSection);

    await this.db.addPDCASection(pdcaSection.PDCAID, pdcaSection.SectionID, pdcaSection.Section);
  }
}

export default TblPDCASections;
