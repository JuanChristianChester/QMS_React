import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material'
import Page from './Page'

class ViewPDCAStages extends Page {
  constructor (props) {
    super(props)
    this.state = { apiResponse: [] }
    this.callAPI('http://localhost:9000/select/PDCAStages')
  }

  handlePDCAStageSelectionChange = () => {
    // Handle the selection change event of pdcaTable
  }

  render () {
    const pdcaStageColumns = [
      { field: 'id', headerName: 'PDCA ID', width: 200 },
      { field: 'PDCAStage', headerName: 'PDCA Stage', width: 200 }
    ]
    const json = this.state.apiResponse
    // const pdcaStageRows = []
    // for (let i = 0; i < json.length; i++) {
    //   pdcaStageRows.push({
    //     id: json[i].PDCAID,
    //     PDCAStage: json[i].PDCAStage
    //   })
    // }

    const pdcaStageRows = json.map((pdcaStage) => {
      return { id: pdcaStage.PDCAID, PDCAStage: pdcaStage.PDCAStage }
    })

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
    )
  }
}

export default ViewPDCAStages
