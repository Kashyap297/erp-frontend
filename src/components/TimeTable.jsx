import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  Typography, 
  Button, 
  Grid, 
  Paper,
  useTheme,
  useMediaQuery,
  styled,
  Divider
} from '@mui/material';

// Styled components for timeline cells
const TimelineCell = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(2),
  height: '100%',
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: active ? '#2C9EF4' : '#fff',
  color: active ? '#fff' : 'inherit',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: active ? '#1976d2' : '#f5f5f5',
  },
  border: '1px solid #e0e0e0',
  overflow: 'hidden'
}));

// Class data
const classSchedule = [
  {
    time: '8:00 - 9:00',
    subject: 'Mathematics',
    class: 'Class: 9A',
    room: 'Room: 203',
    type: 'Lecture',
    isActive: false
  },
  {
    time: '9:00 - 10:00',
    subject: 'Mathematics',
    class: 'Class: 9A',
    room: 'Room: 203',
    type: 'Lecture',
    isActive: false
  },
  {
    time: '10:00 - 11:00',
    subject: 'Mathematics',
    class: 'Class: 9A',
    room: 'Room: 203',
    type: 'Lecture',
    isActive: false
  },
  {
    time: '11:00 - 12:00',
    subject: 'Mathematics',
    class: 'Class: 9A',
    room: 'Room: 203',
    type: 'Lecture',
    isActive: false
  },
  {
    time: '12:00 - 1:00',
    subject: 'Mathematics',
    class: 'Class: 9A',
    room: 'Room: 203',
    type: 'Lecture',
    isActive: true
  },
  {
    time: '1:00 - 2:00',
    subject: '',
    class: '',
    room: 'Lunch',
    type: '',
    isActive: false,
    isBreak: true
  },
  {
    time: '2:00 - 3:00',
    subject: 'Mathematics',
    class: 'Class: 9A',
    room: 'Room: 203',
    type: 'Lecture',
    isActive: false
  },
  {
    time: '3:00 - 4:00',
    subject: 'Mathematics',
    class: 'Class: 9A',
    room: 'Room: 203',
    type: 'Lecture',
    isActive: false
  }
];

export default function TimeTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // Determine how many cells to show based on screen size
  const getVisibleCellCount = () => {
    if (isMobile) return 2;
    if (isTablet) return 4;
    return classSchedule.length;
  };
  
  const [startIndex, setStartIndex] = useState(0);
  const visibleCellCount = getVisibleCellCount();
  
  // Navigation functions
  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };
  
  const handleNext = () => {
    setStartIndex(Math.min(classSchedule.length - visibleCellCount, startIndex + 1));
  };
  
  // Extract cells to display
  const visibleCells = classSchedule.slice(startIndex, startIndex + visibleCellCount);
  
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Card 
        elevation={2} 
        sx={{ 
          borderRadius: 4,
          overflow: 'hidden',
          mb: 2
        }}
      >
        {/* Navigation for mobile/tablet */}
        {(isMobile || isTablet) && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1, py: 1, bgcolor: '#f5f5f5' }}>
            <Button 
              disabled={startIndex === 0}
              onClick={handlePrevious}
              size="small"
            >
              Previous
            </Button>
            <Button 
              disabled={startIndex >= classSchedule.length - visibleCellCount}
              onClick={handleNext}
              size="small"
            >
              Next
            </Button>
          </Box>
        )}
        
        {/* Timeline grid */}
        <Grid container>
          {visibleCells.map((slot, index) => (
            <Grid item xs={6} sm={3} md={3} lg={1.5} key={index} sx={{ width: '156px', height: '180px' }}>
              <TimelineCell active={slot.isActive} elevation={0}>
                <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                  {slot.time}
                </Typography>
                
                {slot.isBreak ? (
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '100%',
                    color: slot.isActive ? '#fff' : '#1976d2',
                    fontWeight: 'medium'
                  }}>
                    <Typography variant="body1">{slot.room}</Typography>
                  </Box>
                ) : (
                  <>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" fontWeight="medium" sx={{ mb: 0.5 }}>
                        {slot.subject}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        {slot.class}
                      </Typography>
                      <Typography variant="body2">
                        {slot.room}
                      </Typography>
                    </Box>
                    
                    <Button 
                      variant="contained" 
                      size="small"
                      sx={{ 
                        mt: 1,
                        backgroundColor: slot.isActive ? '#ffffff' : '#2C9EF4',
                        color: slot.isActive ? '#2C9EF4' : '#ffffff',
                        '&:hover': {
                          backgroundColor: slot.isActive ? '#f5f5f5' : '#1976d2',
                        }
                      }}
                    >
                      {slot.type}
                    </Button>
                  </>
                )}
              </TimelineCell>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}