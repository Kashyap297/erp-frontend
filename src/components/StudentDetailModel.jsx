import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  IconButton, 
  Typography, 
  Box, 
  Divider, 
  Button,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PaymentIcon from '@mui/icons-material/Payment';

const StudentDetailsModel = ({ open, handleClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 2,
          width: '550px',
          maxHeight: '450px',
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PersonIcon sx={{ color: '#555', mr: 1 }} />
          <Typography variant="h6">Student Details</Typography>
        </Box>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <DialogContent sx={{ px: 3, py: 2 }}>
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={6}>
            <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2 }}>
              Personal Information
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PersonIcon sx={{ color: '#555', mr: 1 }} />
              <Typography>John Doe</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ color: '#555', mr: 1 }} />
              <Typography>john.doe@school.edu</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SchoolIcon sx={{ color: '#555', mr: 1 }} />
              <Typography>10A - Science</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ color: '#555', mr: 1 }} />
              <Typography>Address: 123 Main St, Cityville</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ color: '#555', mr: 1 }} />
              <Typography>Phone no. - 95254 54514</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PaymentIcon sx={{ color: '#2196f3', mr: 1 }} />
              <Typography>Fee Status - <span style={{ color: 'green' }}>Paid</span></Typography>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={6}>
            <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2 }}>
              Personal Information
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PersonIcon sx={{ color: '#555', mr: 1 }} />
              <Typography>Overall Grade: A</Typography>
            </Box>

            <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2, mt: 3 }}>
              Personal Information
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Typography>~ Mathematics: A+</Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography>~ Science: A</Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography>~ English: A-</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography>~ History: B+</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="text" 
                sx={{ color: '#2196f3', textTransform: 'none' }}
              >
                Result
              </Button>
              <Button 
                variant="text" 
                sx={{ color: '#2196f3', textTransform: 'none' }}
              >
                Attendance
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetailsModel;

// Usage example:
const ParentComponent = () => {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Button onClick={handleOpen}>Open Student Details</Button>
      <StudentDetailsModel open={open} handleClose={handleClose} />
    </>
  );
};