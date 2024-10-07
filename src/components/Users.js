// src/components/Users.js
import React from 'react';
import CustomDataGrid from './DataGrid';

const Users = () => {
  const columns = [
    { field: 'email', headerName: 'Email ID', width: 200 },
    { field: 'password', headerName: 'Password', width: 150 },
    { field: 'signupTime', headerName: 'Signup Time', width: 200 },
    { field: 'ip', headerName: 'IP Address', width: 150 },
  ];

  const rows = [
    { id: 1, email: 'rahul.sharma@example.com', password: 'rahul123', signupTime: '2024-01-01', ip: '192.168.1.10' },
    { id: 2, email: 'anita.kumar@example.com', password: 'anita543', signupTime: '2024-01-15', ip: '192.168.1.11' },
    { id: 3, email: 'sachin.mehra@example.com', password: 'sachin999', signupTime: '2024-02-01', ip: '192.168.1.12' },
    { id: 4, email: 'priya.verma@example.com', password: 'priya123', signupTime: '2024-02-18', ip: '192.168.1.13' },
    { id: 5, email: 'deepak.patel@example.com', password: 'deepak456', signupTime: '2024-03-05', ip: '192.168.1.14' },
    { id: 6, email: 'neha.gupta@example.com', password: 'neha789', signupTime: '2024-03-20', ip: '192.168.1.15' },
    { id: 7, email: 'amit.singh@example.com', password: 'amit321', signupTime: '2024-04-10', ip: '192.168.1.16' },
    { id: 8, email: 'mohit.khan@example.com', password: 'mohit654', signupTime: '2024-04-25', ip: '192.168.1.17' },
    { id: 9, email: 'rekha.das@example.com', password: 'rekha987', signupTime: '2024-05-10', ip: '192.168.1.18' },
    { id: 10, email: 'ravi.nair@example.com', password: 'ravi000', signupTime: '2024-05-30', ip: '192.168.1.19' },
  ];

  return <CustomDataGrid columns={columns} rows={rows} />;
};

export default Users;
