import PDCAStage from './PDCAStage';

class TblPDCAStage {
  constructor() {
    this.pdcaStageList = [];

    this.initializePDCAStageList();
  }

  async initializePDCAStageList() {
    for (const item of await this.db.getPDCAStageList()) {
      const pdcaStage = new PDCAStage(item.ID, item.Stage);
      this.pdcaStageList.push(pdcaStage);
    }
  }

  async addPDCAStage(id, stage) {
    const pdcaStage = new PDCAStage(id, stage);
    this.pdcaStageList.push(pdcaStage);

    await this.db.addPDCAStage(pdcaStage.ID, pdcaStage.Stage);
  }
}

export default TblPDCAStage;
