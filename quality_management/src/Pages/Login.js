import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleLogin = () => {
    const { username } = this.state;
    // Here you can add logic to authenticate the user
    console.log('Logging in with username:', username);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-container">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => this.handleInputChange(event, 'username')}
            sx={{ marginBottom: 2, width: '300px' }}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => this.handleInputChange(event, 'password')}
            sx={{ marginBottom: 2, width: '300px' }}
          />

          <Button variant="contained" color="primary" onClick={this.handleLogin}>
            Login
          </Button>
        </Box>
      </div>
    );
  }
}

export default Login;
