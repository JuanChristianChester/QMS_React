import React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dropzone from '../Pages/Elements/FileDialouge'
import Page from './Page'

class EditEvidence extends Page {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'pdcaSectionID', headerName: 'PDCA Section ID', width: 200 },
        { field: 'evidenceDate', headerName: 'Evidence Date', width: 200 },
        { field: 'body', headerName: 'Body', width: 200 }
      ],
      apiResponse: []
    }
    this.callAPI('http://localhost:9000/select/?table = Evidence')
  }

  render () {
    const json = this.state.apiResponse
    console.log(json)
    // iterate over json and add to rows
    const evidenceRows = []
    for (let i = 0; i < json.length; i++) {
      evidenceRows.push({ id: json[i].EvidenceID, pdcaSectionID: json[i].PDCASectionID, evidenceDate: json[i].EvidenceDate, body: json[i].Body })
      console.log(json[i])
    }
    return (
      <div className="content">
        <h1>Edit Evidence</h1>
        <TextField
          name="Body"
          multiline
          rows={4}
          letiant="outlined"
          fullWidth
          label="Body"
          margin="normal"
        />
        <TextField
          name="PDCASectionID"
          fullWidth
          label="PDCA Section ID"
          value={this.state.pdcaSectionID}
          onChange={(e) => this.setState({ pdcaSectionID: e.target.value })}
          margin="normal"
        />
        <Dropzone />
        <Box sx={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={evidenceRows}
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
        <Button onClick={this.handleSaveClick}>Save</Button>
      </div>
    )
  }
}

export default EditEvidence
