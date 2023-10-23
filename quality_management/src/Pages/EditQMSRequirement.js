import React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import Page from './Page'
class EditQMSRequirements extends Page {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { field: 'id', headerName: 'QMS ID', width: 90 },
        { field: 'pageID', headerName: 'Page ID', width: 200 },
        { field: 'qmsSection', headerName: 'QMS Section', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'sectionDescription', headerName: 'Section Description', width: 200 }
      ],
      apiResponse: []
    }
    this.callAPI('http://localhost:9000/select/QMSRequirements')
  }

  handleButtonSaveClick = () => {
    // Handle the "Add" Button click event
  }

  handleButtonAddClick = () => {
    // Handle the "Edit Requirements" Button click event
  }

  render () {
    const json = this.state.apiResponse
    const qmsRequirementsRows = json.map((qmsRequirement) => {
      return { id: qmsRequirement.QMSID, pageID: qmsRequirement.PageID, qmsSection: qmsRequirement.QMSSection, description: qmsRequirement.Description, sectionDescription: qmsRequirement.SectionDescription }
    })
    return (
      <div className="content">
        <h2>Edit QMS Requirements</h2>
        <label>QMSSection</label>
        <input type="text" name="txtQMSSection" />
        <label>Page Number</label>
        <input type="text" name="txtPage" />
        <label>Description</label>
        <textarea name="txtDescription" rows="4" />
        <label>SectionDescription</label>
        <textarea name="txtSectionDescription" rows="4" />
        <Button onClick={this.handleButtonSaveClick}>Save</Button>
        <Button onClick={this.handleButtonAddClick}>Add Requirements</Button>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={qmsRequirementsRows}
        columns={this.state.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
      </div>
    )
  }
}

export default EditQMSRequirements
