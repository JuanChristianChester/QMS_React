import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Page from './Page';

class ViewEvidence extends Page {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
    this.callAPI("http://localhost:9000/Evidence");
  }

  render() {
    console.log(this.state);
    const evidenceColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'pdcaSectionID', headerName: 'PDCA Section ID', width: 200 },
      { field: 'evidenceDate', headerName: 'Evidence Date', width: 200 },
      { field: 'body', headerName: 'Body', width: 200 },
    ];
    var json = this.state.apiResponse;
    //iterate over json and add to rows
    const evidenceRows = [];
    for (var i = 0; i < json.length; i++) {
      evidenceRows.push({ id: json[i].EvidenceID, pdcaSectionID: json[i].PDCASectionID, evidenceDate: json[i].EvidenceDate, body: json[i].Body });
      console.log(json[i]);
    }
  
    return (
      <div className="content">
        <Typography variant="h4" gutterBottom> View Evidence </Typography>
        <DataGrid
          rows={evidenceRows}
          columns={evidenceColumns}
          autoHeight
          disableColumnMenu
        />
      </div>
    );
  }
}

export default ViewEvidence;