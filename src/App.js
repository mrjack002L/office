// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Users from './components/Users';
import TaskLists from './components/TaskLists';
import Tasks from './components/Tasks';
import { Container, Box, AppBar, Toolbar, Button, Typography, Paper, Tabs, Tab } from '@mui/material';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Handle user login
  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  // Handle tab change for Users, TaskLists, and Tasks
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Handle user logout, reset login status and activeTab
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab(0);
  };

  // Render login page if user is not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Container>
      {/* AppBar with Logout Button */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Back Office Panel</Typography>
          {/* Add Logout Button */}
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>

      {/* Tab Navigation */}
      <Box mt={3}>
        <Paper>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Users" />
            <Tab label="Task Lists" />
            <Tab label="Tasks" />
          </Tabs>
        </Paper>
      </Box>

      {/* Tab Content */}
      <Box mt={2}>
        {activeTab === 0 && <Users />}
        {activeTab === 1 && <TaskLists />}
        {activeTab === 2 && <Tasks />}
      </Box>
    </Container>
  );
}

export default App;
