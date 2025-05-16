import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Stack,
  Grid,
  Divider,
  Badge,
  Tooltip
} from '@mui/material';
import {
  NotificationsNone as NotificationIcon,
  FiberManualRecord as DotIcon,
  CheckCircle as PresentIcon,
  Cancel as AbsentIcon
} from '@mui/icons-material';
import MarkAttendanceCard from '../components/MarkAttendanceCard';

// Sample data
const initialStudents = Array.from({ length: 18 }, (_, index) => ({
  rollNo: String(index + 1).padStart(2, '0'),
  name: 'Alice Miller',
  isPresent: false,
  history: [
    index < 3 ? 'present' : 'absent',
    'present',
    'present',
    index % 4 === 3 ? 'present' : 'absent',
    'none'
  ]
}));

export default function Attendance() {
  const [students, setStudents] = useState(initialStudents);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Toggle attendance for a student
  

  // Mark all students as present
  const markAllPresent = () => {
    const updatedStudents = students.map(student => ({
      ...student,
      isPresent: true
    }));
    setStudents(updatedStudents);
  };

  // Render attendance history dots
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Box sx={{ flex: 1, p: { xs: 1, sm: 2, md: 3 }, overflow: 'auto' }}>
        <Paper elevation={0} sx={{ p: { xs: 1, sm: 2 }, mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', mb: 2 }}>
            <Typography variant="h6" component="h2">
              Today's Attendance: Class 8A
            </Typography>
            <Box sx={{ mt: { xs: 1, sm: 0 }, display: 'flex', gap: 1 }}>
              <Button 
                variant="contained" 
                color="success" 
                onClick={markAllPresent}
                size={isMobile ? "small" : "medium"}
              >
                Mark all present
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                size={isMobile ? "small" : "medium"}
              >
                Submit
              </Button>
            </Box>
          </Box>

         <MarkAttendanceCard />

          {/* Mobile-only history view */}
          {/* {isMobile && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Attendance History Legend:
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DotIcon sx={{ color: 'success.main', mr: 0.5 }} />
                  <Typography variant="body2">Present</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DotIcon sx={{ color: 'error.main', mr: 0.5 }} />
                  <Typography variant="body2">Absent</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DotIcon sx={{ color: 'grey.400', mr: 0.5 }} />
                  <Typography variant="body2">No Data</Typography>
                </Box>
              </Stack>
            </Box>
          )} */}
        </Paper>
      </Box>
    </Box>
  );
}