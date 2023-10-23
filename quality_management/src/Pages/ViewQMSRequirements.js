import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material'
import Page from './Page'

class ViewQMSRequirements extends Page {
  constructor (props) {
    super(props)
    this.state = { apiResponse: [] }
    this.callAPI('http://localhost:9000/select/QMSRequirements')
  }

  render () {
    const qmsRequirementsColumns = [
      { field: 'id', headerName: 'QMS ID', width: 90 },
      { field: 'pageID', headerName: 'Page ID', width: 200 },
      { field: 'qmsSection', headerName: 'QMS Section', width: 200 },
      { field: 'description', headerName: 'Description', width: 200 },
      { field: 'sectionDescription', headerName: 'Section Description', width: 200 }
      // Add more columns as needed
    ]

    const json = this.state.apiResponse

    const qmsRequirementsRows = json.map((qmsRequirement) => {
      return { id: qmsRequirement.QMSID, pageID: qmsRequirement.PageID, qmsSection: qmsRequirement.QMSSection, description: qmsRequirement.Description, sectionDescription: qmsRequirement.SectionDescription }
    })

    return (
      <div className="content">
        <Typography variant="h4" gutterBottom> View QMS Requirements </Typography>
        <DataGrid
          rows={qmsRequirementsRows}
          columns={qmsRequirementsColumns}
          autoHeight
          disableColumnMenu
        />
      </div>
    )
  }
}

export default ViewQMSRequirements
