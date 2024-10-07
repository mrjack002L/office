// src/components/Tasks.js
import React from 'react';
import CustomDataGrid from './DataGrid';

const Tasks = () => {
  const columns = [
    { field: 'title', headerName: 'Task Title', width: 200 },
    { field: 'description', headerName: 'Task Description', width: 300 },
    { field: 'taskListTitle', headerName: 'Task List Title', width: 200 },
    { field: 'createdBy', headerName: 'Created By (Email)', width: 200 },
    { field: 'creationTime', headerName: 'Creation Time', width: 200 },
  ];

    const rows = [
        { id: 1, title: 'Task 1', description: 'Description 1', taskListTitle: 'List 1', createdBy: 'rahul.sharma@example.com', creationTime: '2024-01-01' },
        { id: 2, title: 'Task 2', description: 'Description 2', taskListTitle: 'List 2', createdBy: 'anita.kumar@example.com', creationTime: '2024-02-10' },
        { id: 3, title: 'Task 3', description: 'Description 3', taskListTitle: 'List 3', createdBy: 'sachin.mehra@example.com', creationTime: '2024-03-12' },
        { id: 4, title: 'Task 4', description: 'Description 4', taskListTitle: 'List 4', createdBy: 'priya.verma@example.com', creationTime: '2024-04-01' },
        { id: 5, title: 'Task 5', description: 'Description 5', taskListTitle: 'List 5', createdBy: 'deepak.patel@example.com', creationTime: '2024-05-14' },
        { id: 6, title: 'Task 6', description: 'Description 6', taskListTitle: 'List 6', createdBy: 'neha.gupta@example.com', creationTime: '2024-06-10' },
        { id: 7, title: 'Task 7', description: 'Description 7', taskListTitle: 'List 7', createdBy: 'amit.singh@example.com', creationTime: '2024-07-22' },
        { id: 8, title: 'Task 8', description: 'Description 8', taskListTitle: 'List 8', createdBy: 'mohit.khan@example.com', creationTime: '2024-08-05' },
        { id: 9, title: 'Task 9', description: 'Description 9', taskListTitle: 'List 9', createdBy: 'rekha.das@example.com', creationTime: '2024-09-01' },
        { id: 10, title: 'Task 10', description: 'Description 10', taskListTitle: 'List 10', createdBy: 'ravi.nair@example.com', creationTime: '2024-10-03' },
      ];
    

  return <CustomDataGrid columns={columns} rows={rows} />;
};

export default Tasks;

