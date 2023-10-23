import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
// import tblAuditFeedback from '../Model/tblAuditFeedback'
import { Typography } from '@mui/material'
import Page from './Page'

class ViewFeedback extends Page {
  constructor (props) {
    super(props)
    this.state = { apiResponse: [] }
    this.callAPI('http://localhost:9000/select/?table=AuditFeedback')
  }

  handleFeedbackTableSelectionChange = () => {
    // Handle the selection change event of FeedbackTable
  }

  render () {
    const feedbackColumns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'AuditDetails', headerName: 'Audit Details', width: 200 },
      { field: 'FeedbackResponse', headerName: 'Feedback Response', width: 200 }
    ]

    const json = this.state.apiResponse

    const feedbackRows = json.map((feedback) => { return { id: feedback.AuditID, AuditDetails: feedback.AuditDetails, FeedbackResponse: feedback.FeedbackResponse } })
    console.log(feedbackRows)

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
    )
  }
}

export default ViewFeedback
