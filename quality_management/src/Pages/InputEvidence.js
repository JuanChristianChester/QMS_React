import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Dropzone from '../Pages/Elements/FileDialouge'
import Page from './Page'

class InputEvidence extends Page {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'AssociatedFile', headerName: 'File Path', width: 150 }
      ]
    }
  }

  handleSaveClick = () => {
    // Handle the "Save" button click event
  }

  render () {
    return (
      <div className="content">
        <Typography variant="h5">Input Evidence - Goods Inwards</Typography>
        <TextField
          name="Body"
          multiline
          rows={4}
          variant="outlined"
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
        <Button onClick={this.handleSaveClick}>Save</Button>
      </div>
    )
  }
}

export default InputEvidence
