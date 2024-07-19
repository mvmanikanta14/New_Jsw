import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const SettingsTable = () => {
  // Sample data for the table
  const rows = [
    { id: 1, name: 'Email Notifications', description: 'Receive email notifications' },
    { id: 2, name: 'Dark Mode', description: 'Enable dark mode for the application' },
    { id: 3, name: 'Language', description: 'Change the display language' },
    // Add more rows as needed
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Setting Name</TableCell>
            <TableCell>Setting Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SettingsTable;
