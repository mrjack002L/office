// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box, IconButton } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'Svadhyaya' && password === 'Aarambh07') {
      onLogin(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-background">
      <Container maxWidth="sm" className="login-container">
        <Paper elevation={6} className="login-box">
          <Box textAlign="center">
            <IconButton>
              <LockOutlined color="primary" fontSize="large" />
            </IconButton>
          </Box>
          <Typography variant="h4" gutterBottom>
            Admin Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="User ID"
              variant="outlined"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            <Box textAlign="center" mt={3}>
              <Button variant="contained" color="primary" size="large" type="submit">
                Login
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
