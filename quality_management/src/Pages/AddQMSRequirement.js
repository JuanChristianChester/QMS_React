import React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import Page from './Page'
import { TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
class AddQMSRequirements extends Page {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { field: 'pageID', headerName: 'Page ID', width: 200 },
        { field: 'qmsSection', headerName: 'QMS Section', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'sectionDescription', headerName: 'Section Description', width: 200 }
      ],
      apiResponse: [],
      txtQMSSection: '',
      txtPageNum: '',
      txtDescription: '',
      txtSectionDescription: ''
    }
    this.callAPI('http://localhost:9000/select/?table=QMSRequirements')
  }

  handleButtonAddClick = () => {
    // Handle the "Add" Button click event
    // insert should follow this format http://localhost:9000/insert/?table=QMSRequirements&json={ "QMSID": "test", "QMSSection":"test", "Description":"test", "SectionDescription":"test", "PageID": "101"}
    this.callAPI('http://localhost:9000/insert/?table=QMSRequirements&json={ "QMSSection":"' + this.state.txtQMSSection + '", "description":"' + this.state.txtDescription + '", "sectionDescription":"' + this.state.txtSectionDescription + '", "pageID": "' + this.state.txtPageNum + '"}')
    this.callAPI('http://localhost:9000/select/?table=QMSRequirements')
  }

  handleButtonEditClick = () => {
    // Handle the "Edit Requirements" Button click event
  }

  handleButtonSaveClick = () => {
    // Handle the "Save" Button click event

  }

  render () {
    const json = this.state.apiResponse
    // iterate over json and add to rows
    const qmsRequirementsRows = []
    for (let i = 0; i < json.length; i++) {
      console.log(json[i])
      qmsRequirementsRows.push({ id: json[i].QMSID, pageID: json[i].PageID, qmsSection: json[i].QMSSection, description: json[i].Description, sectionDescription: json[i].SectionDescription })
    }

    return (
      <div className="content">
        <Typography variant="h5">Add QMS Requirements</Typography>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
          name="QMSSection"
          label="QMSSection"
          fullWidth
          value={this.state.txtQMSSection} type="text"
          onChange={(e) => this.setState({ txtQMSSection: e.target.value })}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          name="PageNum"
          label="PageNum"
          fullWidth
          value={this.state.txtPageNum} type="text"
          onChange={(e) => this.setState({ txtPageNum: e.target.value })}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          name="Description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={this.state.txtDescription} type="text"
          onChange={(e) => this.setState({ txtDescription: e.target.value })}
        /></Grid>
        <Grid item xs={12}>
        <TextField
          name="SectionDescription"
          label="SectionDescription"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={this.state.txtSectionDescription} type="text"
          onChange={(e) => this.setState({ txtSectionDescription: e.target.value })}
        />
        </Grid>
        </Grid>
        <Button onClick={this.handleButtonAddClick}>Add</Button>
        <Button onClick={this.handleButtonEditClick}>Edit Requirements</Button>
        <Box sx={{ height: 300, width: '100%' }}>
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
        <Button onClick={this.handleButtonSaveClick}>Save</Button>
      </div>
    )
  }
}

export default AddQMSRequirements
