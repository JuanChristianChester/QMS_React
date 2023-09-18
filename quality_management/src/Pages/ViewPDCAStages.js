import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

class ViewPDCAStages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
    this.callAPI();
  }
  handlePDCAStageSelectionChange = () => {
    // Handle the selection change event of pdcaTable
  };
  callAPI() {
    fetch("http://localhost:9000/PDCAStages")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }
  render() {
    const pdcaStageColumns = [
      {field: 'id' , headerName: 'PDCA ID', width: 200},
      {field: 'PDCAStage', headerName: 'PDCA Stage', width: 200},
    ];
    var json = this.state.apiResponse;
    const pdcaStageRows = [];
    for (var i = 0; i < json.length; i++) {
      pdcaStageRows.push({
        id : json[i].PDCAID,
        PDCAStage : json[i].PDCAStage
      });
    }

    return (
      <div className="content">
        <Typography variant="h4" gutterBottom> View PDCA Stages </Typography>
        <DataGrid
          rows={pdcaStageRows}
          columns={pdcaStageColumns}
          autoHeight
          checkboxSelection
          onSelectionModelChange={this.handlePDCAStageSelectionChange}
        />
      </div>
    );
  }
}

export default ViewPDCAStages;
