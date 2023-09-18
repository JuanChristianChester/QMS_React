import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

class Settings extends Component {
  state = {
    darkMode: false,
    setting1: '',
    setting2: '',
    setting3: '',
  };

  handleDarkModeToggle = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  handleSettingChange = (settingName) => (event) => {
    this.setState({
      [settingName]: event.target.value,
    });
  };

  render() {
    const { darkMode, setting1, setting2, setting3 } = this.state;

    return (
      <div className="content">
        <h1>Settings</h1>

        <FormGroup>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={this.handleDarkModeToggle} />}
            label="Dark Mode"
          />
        </FormGroup>

        <Box sx={{ marginTop: 2 }}>
          <TextField
            label="Setting 1"
            variant="outlined"
            fullWidth
            value={setting1}
            onChange={this.handleSettingChange('setting1')}
          />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <TextField
            label="Setting 2"
            variant="outlined"
            fullWidth
            value={setting2}
            onChange={this.handleSettingChange('setting2')}
          />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <TextField
            label="Setting 3"
            variant="outlined"
            fullWidth
            value={setting3}
            onChange={this.handleSettingChange('setting3')}
          />
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </div>
    );
  }
}

export default Settings;
