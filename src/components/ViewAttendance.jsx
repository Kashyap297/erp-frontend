import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Chip,
  Divider,
  Container
} from '@mui/material';

const ViewAttendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Sample attendance data
  const attendanceData = [
    { date: '19/11/24', status: 'Absent' },
    { date: '19/11/24', status: 'Absent' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Present' },
    { date: '19/11/24', status: 'Present' },
    { date: '19/11/24', status: 'Present' },
    { date: '19/11/24', status: 'Leave' },
    { date: '19/11/24', status: 'Leave' }
  ];

  // Helper function to get color based on status
  const getStatusColor = (status) => {
    switch(status) {
      case 'Present': return 'success';
      case 'Leave': return 'warning';
      case 'Absent': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container width="lg">
      <Paper 
        elevation={0}
        sx={{ 
          pt: 5, 
          position: 'relative'
        }}
      >
        <Box sx={{ 
          position: 'absolute', 
          right: 16, 
          top: 16, 
          zIndex: 1,
          backgroundColor: 'white',
          borderRadius: 1,
          boxShadow: 2
        }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={selectedMonth}
              onChange={handleMonthChange}
              displayEmpty
              renderValue={() => "Select Month"}
              sx={{ borderRadius: 1 }}
            >
              <MenuItem value="1">January</MenuItem>
              <MenuItem value="2">February</MenuItem>
              <MenuItem value="3">March</MenuItem>
              <MenuItem value="4">April</MenuItem>
              <MenuItem value="5">May</MenuItem>
              <MenuItem value="6">June</MenuItem>
              <MenuItem value="7">July</MenuItem>
              <MenuItem value="8">August</MenuItem>
              <MenuItem value="9">September</MenuItem>
              <MenuItem value="10">October</MenuItem>
              <MenuItem value="11">November</MenuItem>
              <MenuItem value="12">December</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: 3 }}>
          {attendanceData.map((item, index) => (
            <React.Fragment key={index}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  py: 1.5,
                //   px: 2,
                  backgroundColor: index % 2 === 0 ? '#f8f8f8' : 'white'
                }}
              >
                <Typography color="primary">
                  {item.date}
                </Typography>
                <Chip 
                  label={item.status} 
                  color={getStatusColor(item.status)}
                  sx={{ 
                    color: 'white',
                    fontWeight: 'medium',
                    px: 1,
                    minWidth: 80,
                    textAlign: 'center'
                  }}
                />
              </Box>
              {index < attendanceData.length - 1 && (
                <Divider sx={{ my: 0 }} />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default ViewAttendance;