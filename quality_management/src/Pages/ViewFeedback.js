import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import tblAuditFeedback from '../Model/tblAuditFeedback';
import { Typography } from '@mui/material';

class ViewFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
    this.callAPI();
  }
  handleFeedbackTableSelectionChange = () => {
    // Handle the selection change event of FeedbackTable
  };

  callAPI() {
    fetch("http://localhost:9000/AuditFeedback")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  render() {
    const feedbackColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'AuditDetails', headerName: 'Audit Details', width: 200 },
      { field: 'FeedbackResponse', headerName: 'Feedback Response', width: 200 },
    ];

    var json = this.state.apiResponse;
    //the json looks like this
    const feedbackRows = [];
    for (var i = 0; i < json.length; i++) {
      feedbackRows.push({
        id : json[i].AuditID,
        AuditDetails : json[i].AuditDetails,
        FeedbackResponse : json[i].FeedbackResponse
      });
    }
    console.log(feedbackRows);
    

    return (
      <div className="content">
        <Typography variant="h4" gutterBottom> View Feedback </Typography>
        <DataGrid
          rows={feedbackRows}
          columns={feedbackColumns}
          autoHeight
          checkboxSelection
          onSelectionModelChange={this.handleFeedbackTableSelectionChange}
        />
      </div>
    );
  }
}

export default ViewFeedback;
