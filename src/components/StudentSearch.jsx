import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Select, 
  MenuItem, 
  InputAdornment,
  Typography,
  InputLabel,
  FormControl,
  Grid,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const StudentSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedGPA, setSelectedGPA] = useState('');
  const [attendancePercentage, setAttendancePercentage] = useState('');

  // Sample student data
  const studentData = [
    { id: '2024001', name: 'Emma Rodriguez', grade: '11th - A', gpa: 3.5, parentContact: '+91 00000 00000' },
    { id: '2024001', name: 'Emma Rodriguez', grade: '11th - A', gpa: 3.5, parentContact: '+91 00000 00000' },
    { id: '2024001', name: 'Emma Rodriguez', grade: '11th - A', gpa: 3.5, parentContact: '+91 00000 00000' },
    { id: '2024001', name: 'Emma Rodriguez', grade: '11th - A', gpa: 3.5, parentContact: '+91 00000 00000' },
    { id: '2024001', name: 'Emma Rodriguez', grade: '11th - A', gpa: 3.5, parentContact: '+91 00000 00000' },
    { id: '2024001', name: 'Emma Rodriguez', grade: '11th - A', gpa: 3.5, parentContact: '+91 00000 00000' }
  ];

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      {/* Search and Filter */}
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Grid size={4}>
          <TextField
            placeholder="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { borderRadius: 2, bgcolor: '#f5f5f5' }
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button 
            variant="outlined" 
            startIcon={<FilterListIcon />}
            sx={{ 
              height: '56px', 
              borderRadius: 2,
              color: '#555',
              borderColor: '#ccc',
              '&:hover': {
                borderColor: '#aaa',
                bgcolor: '#f9f9f9'
              }
            }}
            fullWidth
          >
            Filter
          </Button>
        </Grid>
      </Grid>

      {/* Filter Options */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="body2" sx={{ mb: 1 }}>Grade</Typography>
          <FormControl fullWidth>
            <Select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              displayEmpty
              renderValue={selectedGrade !== '' ? undefined : () => "Select grades"}
              sx={{ borderRadius: 1, bgcolor: '#f5f5f5', height: '45px' }}
            >
              <MenuItem value="">All Grades</MenuItem>
              <MenuItem value="10">10th</MenuItem>
              <MenuItem value="11A">11th - A</MenuItem>
              <MenuItem value="11B">11th - B</MenuItem>
              <MenuItem value="12">12th</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="body2" sx={{ mb: 1 }}>Minimum GPA</Typography>
          <FormControl fullWidth>
            <Select
              value={selectedGPA}
              onChange={(e) => setSelectedGPA(e.target.value)}
              displayEmpty
              renderValue={selectedGPA !== '' ? undefined : () => "Select GPA"}
              sx={{ borderRadius: 1, bgcolor: '#f5f5f5', height: '45px' }}
            >
              <MenuItem value="">Any GPA</MenuItem>
              <MenuItem value="3.0">3.0+</MenuItem>
              <MenuItem value="3.5">3.5+</MenuItem>
              <MenuItem value="4.0">4.0</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="body2" sx={{ mb: 1 }}>Attendance %</Typography>
          <TextField
            placeholder="Above%"
            variant="outlined"
            fullWidth
            value={attendancePercentage}
            onChange={(e) => setAttendancePercentage(e.target.value)}
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: 1,
                bgcolor: '#f5f5f5',
                height: '45px'
              }
            }}
          />
        </Grid>
      </Grid>

      {/* Data Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #eee' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f9f9f9' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Student ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Grade</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>GPA</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Parent Contact</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((student, index) => (
              <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.gpa}</TableCell>
                <TableCell>{student.parentContact}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    sx={{ 
                      bgcolor: '#e0e0e0', 
                      color: '#555',
                      borderRadius: 3,
                      textTransform: 'none',
                      px: 2,
                      '&:hover': {
                        bgcolor: '#d5d5d5',
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

export default StudentSearch;