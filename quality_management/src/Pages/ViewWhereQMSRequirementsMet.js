import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Page from './Page';
class ViewWhereQMSRequirementsMet extends Page {
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
        <Typography variant="h4" gutterBottom> View Where QMS Requirements Met </Typography>
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

export default ViewWhereQMSRequirementsMet;