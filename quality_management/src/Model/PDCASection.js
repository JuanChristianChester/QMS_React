class PDCASection {
    constructor(ID, SectionID, Section) {
      this.PDCAID = ID;
      this.SectionID = SectionID;
      this.Section = Section;
      this.requirements = [];
    }
  
    addRequirement(requirement) {
      this.requirements.push(requirement);
    }
  
    removeRequirement(requirement) {
      const index = this.requirements.indexOf(requirement);
      if (index !== -1) {
        this.requirements.splice(index, 1);
      }
    }
  }
  
  export default PDCASection;
  