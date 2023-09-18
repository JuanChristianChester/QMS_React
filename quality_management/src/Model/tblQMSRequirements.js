import QMSRequirement from './QMSRequirement';

class TblQMSRequirements {
  constructor() {
    this.qmsRequirementList = [];
    this.initializeQMSRequirementList();
  }

  async initializeQMSRequirementList() {
    for (const item of await this.db.getQMSRequirementList()) {
      const qmsRequirement = new QMSRequirement(item.ID, item.PageID, item.Section, item.Description, item.SectionDescription);
      this.qmsRequirementList.push(qmsRequirement);
    }
  }

  async add(pageID, section, description, sectionDescription) {
    const id = this.qmsRequirementList.length + 1;
    const qmsRequirement = new QMSRequirement(id, pageID, section, description, sectionDescription);
    this.qmsRequirementList.push(qmsRequirement);

    await this.db.addQMSRequirement(id, pageID, section, description, sectionDescription);
  }

  async edit(id, page, section, description, sectionDescription) {
    const qmsRequirement = new QMSRequirement(id, page, section, description, sectionDescription);
    this.qmsRequirementList[id - 1] = qmsRequirement;

    await this.db.editQMSRequirement(id, page, section, description, sectionDescription);
  }
}

export default TblQMSRequirements;