import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import Page from './Page';

class ViewQMSRequirements extends Page {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
    this.callAPI("http://localhost:9000/select/QMSRequirements");
  }

  render() {
    const qmsRequirementsColumns = [
      { field: 'id', headerName: 'QMS ID', width: 90 },
      { field: 'pageID', headerName: 'Page ID', width: 200 },
      { field: 'qmsSection', headerName: 'QMS Section', width: 200 },
      { field: 'description', headerName: 'Description', width: 200 },
      { field: 'sectionDescription', headerName: 'Section Description', width: 200 },
      // Add more columns as needed
    ];

    var json = this.state.apiResponse;
    //iterate over json and add to rows
    const qmsRequirementsRows = [];
    for (var i = 0; i < json.length; i++) {
      qmsRequirementsRows.push({ id: json[i].QMSID, pageID: json[i].PageID, qmsSection: json[i].QMSSection, description: json[i].Description, sectionDescription: json[i].SectionDescription });
    }

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
    );
  }
}

export default ViewQMSRequirements;
