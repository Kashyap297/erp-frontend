import React from 'react';
import { 
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Avatar,
  Button,
  LinearProgress,
  Grid,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const StyledCard = styled(Card)({
  borderRadius: 16,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  overflow: 'visible',
  padding: '24px',
  display: 'flex',
  width: '100%',
  marginBottom: '20px'
});

const ProfileAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  borderRadius: 8,
});

const CircularProgressContainer = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
  margin: '0 20px'
});

const CircularProgressLabel = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProgressLabel = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '4px',
});

const StyledLinearProgress = styled(LinearProgress)(({ theme, value }) => ({
  height: 8,
  // width: 180,
  borderRadius: 4,
  backgroundColor: theme.palette.grey[300],
  '& .MuiLinearProgress-bar': {
    backgroundColor: (() => {
      if (value >= 75) return theme.palette.primary.main;
      if (value >= 50) return theme.palette.info.main;
      if (value >= 25) return theme.palette.warning.main;
      return theme.palette.error.main;
    })()
  }
}));

const ProfileCard = () => {
  const teacherData = {
    name: 'Ranjeet Singh',
    position: 'Teacher',
    contact: '+91 00000 00000',
    email: 'oihafsdi@gmail.com',
    role: 'Class Advisor',
    attendance: 90,
    leaves: {
      annual: 75,
      sick: 90,
      paid: 40,
    },
    avatar: '/api/placeholder/120/120'
  };

  return (
    <StyledCard>
      <Grid width='100%' justifyContent='space-between' container spacing={2}>
        {/* Profile Section */}
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <ProfileAvatar src={teacherData.avatar} alt={teacherData.name} />
            <Box sx={{ ml: 2, flexGrow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {teacherData.name}
                </Typography>
                <Button 
                  variant="text" 
                  color="primary" 
                  size="small"
                  sx={{ fontSize: '0.95rem', p: 0, minWidth: 'auto' }}
                >
                  Edit
                </Button>
              </Box>
              <Typography variant="body1" color="text.primary" sx={{fontSize: '1.2rem'}}>
                {teacherData.position}
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ fontSize: '1rem' }}>
                Contact - {teacherData.contact}
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ fontSize: '1rem' }}>
                E-Mail - {teacherData.email}
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ fontSize: '1rem' }}>
                {teacherData.role}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Attendance Circle */}
        <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgressContainer>
              <CircularProgress 
                variant="determinate" 
                value={teacherData.attendance} 
                size={110} 
                thickness={5}
                sx={{ color: '#2196f3' }}
              />
              <CircularProgressLabel>
                <Typography variant="h6" component="div" color="text.primary">
                  {`${teacherData.attendance}%`}
                </Typography>
              </CircularProgressLabel>
            </CircularProgressContainer>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Attendance
            </Typography>
          </Box>
        </Grid>

        {/* Leave Balance Section */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
                Annual Leave Balance
              </Typography>
              <StyledLinearProgress variant="determinate" value={teacherData.leaves.annual} sx={{ flexGrow: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
                Sick Leave Balance
              </Typography>
              <StyledLinearProgress variant="determinate" value={teacherData.leaves.sick} sx={{ flexGrow: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
                Paid Leave Balance
              </Typography>
              <StyledLinearProgress variant="determinate" value={teacherData.leaves.paid} sx={{ flexGrow: 1 }} />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProfileCard;