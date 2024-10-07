// src/components/TaskLists.js
import React from 'react';
import CustomDataGrid from './DataGrid';

const TaskLists = () => {
  const columns = [
    { field: 'title', headerName: 'Task List Title', width: 200 },
    { field: 'createdBy', headerName: 'Created By (Email)', width: 200 },
    { field: 'taskCount', headerName: 'No. of Tasks', type: 'number', width: 150 },
    { field: 'creationTime', headerName: 'Creation Time', width: 200 },
    { field: 'lastUpdated', headerName: 'Last Updated', width: 200 },
  ];

  const rows = [
    { id: 1, title: 'List 1', createdBy: 'rahul.sharma@example.com', taskCount: 5, creationTime: '2024-01-01', lastUpdated: '2024-01-05' },
    { id: 2, title: 'List 2', createdBy: 'anita.kumar@example.com', taskCount: 8, creationTime: '2024-02-10', lastUpdated: '2024-02-15' },
    { id: 3, title: 'List 3', createdBy: 'sachin.mehra@example.com', taskCount: 3, creationTime: '2024-03-12', lastUpdated: '2024-03-18' },
    { id: 4, title: 'List 4', createdBy: 'priya.verma@example.com', taskCount: 10, creationTime: '2024-04-01', lastUpdated: '2024-04-06' },
    { id: 5, title: 'List 5', createdBy: 'deepak.patel@example.com', taskCount: 7, creationTime: '2024-05-14', lastUpdated: '2024-05-20' },
    { id: 6, title: 'List 6', createdBy: 'neha.gupta@example.com', taskCount: 4, creationTime: '2024-06-10', lastUpdated: '2024-06-15' },
    { id: 7, title: 'List 7', createdBy: 'amit.singh@example.com', taskCount: 6, creationTime: '2024-07-22', lastUpdated: '2024-07-28' },
    { id: 8, title: 'List 8', createdBy: 'mohit.khan@example.com', taskCount: 9, creationTime: '2024-08-05', lastUpdated: '2024-08-10' },
    { id: 9, title: 'List 9', createdBy: 'rekha.das@example.com', taskCount: 2, creationTime: '2024-09-01', lastUpdated: '2024-09-07' },
    { id: 10, title: 'List 10', createdBy: 'ravi.nair@example.com', taskCount: 5, creationTime: '2024-10-03', lastUpdated: '2024-10-05' },
  ];

  return <CustomDataGrid columns={columns} rows={rows} />;
};

export default TaskLists;
