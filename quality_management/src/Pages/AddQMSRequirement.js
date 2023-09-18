import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Page from './Page';
class AddQMSRequirements extends Page{
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { field: 'id', headerName: 'QMS ID', width: 90 },
        { field: 'pageID', headerName: 'Page ID', width: 200 },
        { field: 'qmsSection', headerName: 'QMS Section', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'sectionDescription', headerName: 'Section Description', width: 200 },
      ],
      apiResponse: []
    };
    this.callAPI("http://localhost:9000/QMSRequirements");
  }
  
  handleButtonAddClick = () => {
    // Handle the "Add" Button click event
  };

  handleButtonEditClick = () => {
    // Handle the "Edit Requirements" Button click event
  };

  handleButtonSaveClick = () => {
    // Handle the "Save" Button click event
  };
  
  render() {
    var json = this.state.apiResponse;
    //iterate over json and add to rows
    const qmsRequirementsRows = [];
    for (var i = 0; i < json.length; i++) {
      console.log(json[i]);
      qmsRequirementsRows.push({ id: json[i].QMSID, pageID: json[i].PageID, qmsSection: json[i].QMSSection, description: json[i].Description, sectionDescription: json[i].SectionDescription });
    }

    return (
      <div className="content">
        <h2>Add QMS Requirements</h2>
        <label>QMSSection</label>
        <input type="text" name="txtQMSSection" />
        <label>Page Number</label>
        <input type="text" name="txtPage" />
        <label>Description</label>
        <textarea name="txtDescription" rows="4" />
        <label>SectionDescription</label>
        <textarea name="txtSectionDescription" rows="4" />
        <Button onClick={this.handleButtonAddClick}>Add</Button>
        <Button onClick={this.handleButtonEditClick}>Edit Requirements</Button>
        <Box sx={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={qmsRequirementsRows}
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
        <Button onClick={this.handleButtonSaveClick}>Save</Button>
      </div>
    );
  }
}

export default AddQMSRequirements;
