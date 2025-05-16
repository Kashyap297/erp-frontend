import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  MenuItem, 
  IconButton, 
  LinearProgress,
  InputAdornment,
  Container,
  Paper
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export default function LeaveApplication() {
  const [leaveType, setLeaveType] = useState('');
  const [duration, setDuration] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');
  const [file, setFile] = useState(null);
  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Paper elevation={0} sx={{ width: '100%', p: 0 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          borderBottom: '1px solid #f0f0f0',
          px: 3,
          py: 2
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
            Leave
          </Typography>
          <IconButton size="small">
            <NotificationsOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ p: 3 }}>
          {/* Leave Balance Section */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            mb: 4 
          }}>
            {/* Annual Leave */}
            <Box sx={{ width: '30%' }}>
              <Typography variant="body2" sx={{ color: '#666', mb: 0.5, fontSize: '0.8rem' }}>
                Annual Leave Balance
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                15 days
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={60} 
                sx={{ 
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: '#e0e0e0',
                  width: '100%',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#2196f3'
                  }
                }}
              />
            </Box>
            
            {/* Sick Leave 1 */}
            <Box sx={{ width: '30%' }}>
              <Typography variant="body2" sx={{ color: '#666', mb: 0.5, fontSize: '0.8rem' }}>
                Sick Leave Balance
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                08 days
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={25} 
                sx={{ 
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: '#e0e0e0',
                  width: '100%',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#2196f3'
                  }
                }}
              />
            </Box>
            
            {/* Sick Leave 2 */}
            <Box sx={{ width: '30%' }}>
              <Typography variant="body2" sx={{ color: '#666', mb: 0.5, fontSize: '0.8rem' }}>
                Sick Leave Balance
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                02 days
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={10} 
                sx={{ 
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: '#e0e0e0',
                  width: '100%',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#2196f3'
                  }
                }}
              />
            </Box>
          </Box>

          {/* Apply for Leave Section */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 3 
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
              Apply for Leave
            </Typography>
            <Button 
              color="primary" 
              sx={{ 
                textTransform: 'none', 
                fontWeight: 500,
                fontSize: '0.95rem',
                color: '#2196f3'
              }}
            >
              History
            </Button>
          </Box>

          {/* Form Rows */}
          <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              placeholder="Select leave type"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  '& fieldset': { border: 'none' },
                }
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) => {
                  return value === '' ? 'Select leave type' : value;
                }
              }}
            >
              <MenuItem value="">Select leave type</MenuItem>
              <MenuItem value="annual">Annual Leave</MenuItem>
              <MenuItem value="sick">Sick Leave</MenuItem>
              <MenuItem value="unpaid">Unpaid Leave</MenuItem>
            </TextField>

            <TextField
              select
              fullWidth
              variant="outlined"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Duration"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  '& fieldset': { border: 'none' },
                }
              }}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) => {
                  return value === '' ? 'Duration' : value;
                }
              }}
            >
              <MenuItem value="">Duration</MenuItem>
              <MenuItem value="half">Half Day</MenuItem>
              <MenuItem value="1">1 Day</MenuItem>
              <MenuItem value="multiple">Multiple Days</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="From"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  '& fieldset': { border: 'none' },
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayOutlinedIcon fontSize="small" sx={{ color: '#757575' }} />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              fullWidth
              variant="outlined"
              placeholder="To"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  '& fieldset': { border: 'none' },
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayOutlinedIcon fontSize="small" sx={{ color: '#757575' }} />
                  </InputAdornment>
                )
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              placeholder="Select leave type"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  '& fieldset': { border: 'none' },
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ alignSelf: 'flex-start', mt: 1, mr: 1 }}>
                    <TextSnippetOutlinedIcon fontSize="small" sx={{ color: '#757575' }} />
                  </InputAdornment>
                )
              }}
            />
          </Box>

          <Box sx={{ 
            mb: 3, 
            p: 2, 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center' 
          }}>
            <Button 
              variant="outlined" 
              component="label" 
              size="small"
              sx={{ 
                borderColor: '#ddd', 
                color: '#666',
                textTransform: 'none', 
                mr: 2,
                fontSize: '0.8rem',
                backgroundColor: '#eee',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  borderColor: '#ccc'
                }
              }}
            >
              Upload file
              <input
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </Button>
            <Typography sx={{ color: '#666', fontSize: '0.85rem' }}>
              {file ? file.name : 'No file chosen'}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ 
                borderRadius: '4px',
                textTransform: 'none',
                px: 4,
                py: 1
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