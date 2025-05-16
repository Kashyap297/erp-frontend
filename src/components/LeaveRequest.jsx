import React, { useState } from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LeaveRequest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Sample data
  const leaveRequests = [
    { id: 1, name: 'Emma Rodriguez', category: 'Teacher', leaveType: 'Casual', startDate: '2024-04-15', endDate: '2024-04-20', status: 'Pending' },
    { id: 2, name: 'Emma Rodriguez', category: 'Teacher', leaveType: 'Casual', startDate: '2024-04-15', endDate: '2024-04-20', status: 'Approved' },
    { id: 3, name: 'Emma Rodriguez', category: 'Teacher', leaveType: 'Casual', startDate: '2024-04-15', endDate: '2024-04-20', status: 'Rejected' },
  ];

  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
    setStatusFilter('');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#FFD700'; // Yellow
      case 'Approved':
        return '#4CAF50'; // Green
      case 'Rejected':
        return '#F44336'; // Red
      default:
        return 'inherit';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          placeholder="Search"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 300, backgroundColor: '#f5f5f5', borderRadius: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <Select
            displayEmpty
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            renderValue={(selected) => {
              if (!selected) {
                return "Categories";
              }
              return selected;
            }}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Staff">Staff</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <Select
            displayEmpty
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            renderValue={(selected) => {
              if (!selected) {
                return "Status";
              }
              return selected;
            }}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>

        <Button 
          variant="outlined" 
          onClick={resetFilters}
          sx={{ minWidth: 100 }}
        >
          Reset Filter
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Dates</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.leaveType}</TableCell>
                <TableCell>{`${row.startDate} to ${row.endDate}`}</TableCell>
                <TableCell>
                  <span style={{ color: getStatusColor(row.status) }}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    size="small"
                    sx={{ 
                      backgroundColor: '#e0e0e0', 
                      color: '#000', 
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#d5d5d5',
                      }
                    }}
                  >
                    View detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeaveRequest;