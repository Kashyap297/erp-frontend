import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  IconButton,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export default function UploadResult() {
  // Sample student data
  const students = [
    { id: 'CS22045', name: 'Alex Thompson' },
    { id: 'CS22046', name: 'Emma Rodriguez' },
    { id: 'CS22047', name: 'Michael Chen' },
    { id: 'CS22048', name: 'Sophia Patel' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' },
    { id: 'CS22049', name: 'James Wilson' }
  ];

  return (
    <Container maxWidth="lg" sx={{ p: 0 }}>
      <Paper elevation={0} sx={{ width: '100%', borderRadius: 0 }}>

        {/* Content */}
        <Box sx={{ p: 3 }}>

          <TableContainer component={Box} sx={{ mb: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label="student results table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ 
                    borderBottom: '1px solid #ddd', 
                    fontWeight: 500, 
                    pl: 0 
                  }}>ID</TableCell>
                  <TableCell sx={{ 
                    borderBottom: '1px solid #ddd', 
                    fontWeight: 500 
                  }}>Student Name</TableCell>
                  <TableCell align="center" sx={{ 
                    borderBottom: '1px solid #ddd', 
                    fontWeight: 500 
                  }}>Internal</TableCell>
                  <TableCell align="center" sx={{ 
                    borderBottom: '1px solid #ddd', 
                    fontWeight: 500 
                  }}>External</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell 
                      component="th" 
                      scope="row" 
                      sx={{ 
                        borderBottom: '1px solid #f0f0f0',
                        pl: 0
                      }}
                    >
                      {student.id}
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        borderBottom: '1px solid #f0f0f0' 
                      }}
                    >
                      {student.name}
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        borderBottom: '1px solid #f0f0f0',
                        p: 1
                      }}
                    >
                      <TextField
                        variant="outlined"
                        size="small"
                        inputProps={{ 
                          style: { 
                            padding: '6px 8px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px'
                          } 
                        }}
                        sx={{
                          width: '120px',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              border: 'none'
                            }
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell 
                      align="center" 
                      sx={{ 
                        borderBottom: '1px solid #f0f0f0',
                        p: 1
                      }}
                    >
                      <TextField
                        variant="outlined"
                        size="small"
                        inputProps={{ 
                          style: { 
                            padding: '6px 8px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px'
                          } 
                        }}
                        sx={{
                          width: '120px',
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              border: 'none'
                            }
                          }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#2196f3',
                borderRadius: '4px',
                textTransform: 'none',
                px: 4,
                py: 1,
                minWidth: '120px'
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}