import ISOPages from './ISOPages'

class TblISOPages {
  constructor () {
    this.isoPagesList = []

    this.initializeISOPagesList()
  }

  async initializeISOPagesList () {
    for (const item of await this.db.getISOPagesList()) {
      const isoPage = new ISOPages(item.PageNumber, item.Link)
      this.isoPagesList.push(isoPage)
    }
  }

  async add (pageNumber, link) {
    const isoPage = new ISOPages(pageNumber, link)
    this.isoPagesList.push(isoPage)

    await this.db.addISOPages(isoPage.PageNumber, isoPage.Link)
  }
}

export default TblISOPages
