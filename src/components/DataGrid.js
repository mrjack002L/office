// src/components/DataGrid.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Paper } from '@mui/material';

const CustomDataGrid = ({ columns, rows }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Paper elevation={3}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Paper>
    </Container>
  );
};

export default CustomDataGrid;
