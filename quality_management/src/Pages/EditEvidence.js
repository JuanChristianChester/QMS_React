import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dropzone from '../Pages/Elements/FileDialouge';
import Page from './Page';

class EditEvidence extends Page {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'AssociatedFiles',
          headerName: 'Associated Files',
          width: 150,
          editable: true,
        },
        {
          field: 'Body',
          headerName: 'Body',
          width: 150,
          editable: true,
        },
        {
          field: 'PDCASectionID',
          headerName: 'PDCA Section ID',
          type: 'number',
          width: 110,
          editable: true,
        },
      ],
      apiresponse: [],
    };
    this.callAPI("http://localhost:9000/Evidence");
  }
  
  render() {
    var json = this.state.apiresponse;
    //iterate over json and add to rows
    const evidenceRows = [];

    for (var i = 0; i < json.length; i++) {
      evidenceRows.push({ id: json[i].EvidenceID, AssociatedFiles: json[i].AssociatedFiles, Body: json[i].Body, PDCASectionID: json[i].PDCASectionID });
    }
    return (
      <div className="content">
        <h1>Edit Evidence</h1>
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
        <Box sx={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={evidenceRows}
            columns={this.state.columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        <Button onClick={this.handleSaveClick}>Save</Button>
      </div>
    );
  }
}

export default EditEvidence;