import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';

class RecordFeedbackResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackDetails: '',
      feedbackResponse: '',
    };
  }

  handleSaveClick = () => {
    // Handle the "Save" button click event
  };

  handleAuditFeedbackSelectionChange = () => {
    // Handle the selection change event of AuditFeedbackDataGrid
  };

  render() {
    const auditFeedbackColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      // Add more columns as needed
    ];

    return (
      <div className="content">
        <Typography variant="h5">Record Response to Feedback</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="FeedbackDetailsTxt"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              label="Feedback Details"
              value={this.state.feedbackDetails}
              onChange={(e) => this.setState({ feedbackDetails: e.target.value })}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="FeedbackResponseTxt"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              label="Feedback Response"
              value={this.state.feedbackResponse}
              onChange={(e) => this.setState({ feedbackResponse: e.target.value })}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              rows={[]} // Provide rows data
              columns={auditFeedbackColumns}
              autoHeight
              checkboxSelection
              onSelectionModelChange={this.handleAuditFeedbackSelectionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={this.handleSaveClick}>Save</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RecordFeedbackResponse;
