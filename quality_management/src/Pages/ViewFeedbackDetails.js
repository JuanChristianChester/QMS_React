import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
class ViewFeedbackDetails extends React.Component {
  render() {
    const qmsRequirementsColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      // Add more columns as needed
    ];

    const qmsRequirementsRows = [
      // Provide QMS requirements data
    ];

    return (
      <div className="content">

        <div>
          <Typography variant="h4" gutterBottom> View Feedback Details </Typography>
          <label>Feedback</label>
          <div name="FeedbackLbl"></div>
          <label>Response to Feedback</label>
          <div name="FeedbackResponseLbl"></div>
        </div>
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

export default ViewFeedbackDetails;
