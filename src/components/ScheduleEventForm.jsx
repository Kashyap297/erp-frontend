import React, { useState } from 'react';
import { 
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  InputAdornment
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const ScheduleEventForm = () => {
  const [subject, setSubject] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ subject, fromDate, toDate, description });
    // Handle form submission here
  };

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>Subject</Typography>
          <TextField
            fullWidth
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            InputProps={{
              sx: { 
                bgcolor: '#f0f0f0',
                borderRadius: 1,
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }
            }}
          />
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>From</Typography>
            <TextField
              fullWidth
              placeholder="DD/MM/YYYY"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
                sx: { 
                  bgcolor: '#f0f0f0',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>To</Typography>
            <TextField
              fullWidth
              placeholder="DD/MM/YYYY"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
                sx: { 
                  bgcolor: '#f0f0f0',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>Description</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            InputProps={{
              sx: { 
                bgcolor: '#f0f0f0',
                borderRadius: 1,
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#4dabf5',
              color: 'white',
              textTransform: 'none',
              px: 4,
              py: 1,
              fontSize: '16px',
              borderRadius: 2,
              width: '250px',
              '&:hover': {
                bgcolor: '#3d8bd5'
              }
            }}
          >
            Schedule
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ScheduleEventForm;