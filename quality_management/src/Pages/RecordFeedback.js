import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Page from './Page'

class RecordFeedback extends Page {
  constructor (props) {
    super(props)
    this.state = {
      body: '',
      selectedQMSRequirement: '',
      associatedQMSRequirements: []
    }
  }

  handleSaveClick = () => {
    this.callAPI('http://localhost:9000/insert/?table=AuditFeedback&json={ "body": "' + this.state.body + '", "qmsID":' + JSON.stringify(this.state.associatedQMSRequirements) + '}')
  }

  handleQMSRequirementChange = (event) => {
    this.setState({ selectedQMSRequirement: event.target.value })
  }

  handleAddQMSClick = () => {
    // Handle the "Add QMS Requirement" button click event
    const { selectedQMSRequirement, associatedQMSRequirements } = this.state

    if (!(selectedQMSRequirement && !associatedQMSRequirements.includes(selectedQMSRequirement))) {
      return
    }
    this.setState({
      associatedQMSRequirements: [...associatedQMSRequirements, selectedQMSRequirement],
      selectedQMSRequirement: ''
    })
  }

  render () {
    return (
      <div className="content">
        <Typography variant="h5">Record Feedback</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="Body"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              label="Feedback"
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Select
                name="QMSRequirements"
                value={this.state.selectedQMSRequirement}
                onChange={this.handleQMSRequirementChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select an associated QMS requirement
                </MenuItem>
                {/* Replace with actual QMS requirement options */}
                <MenuItem value="1">QMS Requirement 1</MenuItem>
                <MenuItem value= "2" >QMS Requirement 2</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={this.handleAddQMSClick}>Add</Button>
          </Grid>
          <Grid item xs={12}>
            <List>
              {this.state.associatedQMSRequirements.map((qmsRequirement) => (
                <ListItem key={qmsRequirement}>
                  <ListItemText primary={qmsRequirement} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={this.handleSaveClick}>Save</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default RecordFeedback
