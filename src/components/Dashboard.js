// src/components/Dashboard.js
import React from 'react';
import { Card, CardContent, Typography, Grid, CardActionArea, Box, Button } from '@mui/material';
import UsersIcon from '@mui/icons-material/Group';
import TaskListIcon from '@mui/icons-material/ListAlt';
import TasksIcon from '@mui/icons-material/Assignment';

const Dashboard = ({ onTabChange, onLogout }) => {
  return (
    <Box mt={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => onTabChange(0)}>
              <CardContent>
                <UsersIcon color="primary" fontSize="large" />
                <Typography variant="h6" component="div" gutterBottom>
                  Manage Users
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Add, remove, and manage user details.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => onTabChange(1)}>
              <CardContent>
                <TaskListIcon color="secondary" fontSize="large" />
                <Typography variant="h6" component="div" gutterBottom>
                  Manage Task Lists
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  View and organize task lists.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea onClick={() => onTabChange(2)}>
              <CardContent>
                <TasksIcon color="primary" fontSize="large" />
                <Typography variant="h6" component="div" gutterBottom>
                  Manage Tasks
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Create, assign, and manage tasks.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {/* Add a Logout button at the bottom of the Dashboard */}
      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="secondary" onClick={onLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
