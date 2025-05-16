import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  IconButton, 
  Box, 
  Typography, 
  TextField, 
  Button,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';

const LeaveRequestDetailsModel = ({ open, onClose, leaveRequest }) => {
  // Sample data if no leaveRequest is provided
  const requestData = leaveRequest || {
    employee: 'John Smith',
    leaveType: 'Casual',
    duration: 'Full day',
    fromDate: '2024-04-15',
    toDate: '2024-04-20',
    status: 'Pending',
    description: '',
    document: 'Document'
  };

  // Function to get status color
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
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #eee' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AssignmentIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Leave Request Details</Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      
      <DialogContent sx={{ p: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          {/* Employee Info */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonOutlineIcon sx={{ mr: 1, color: '#555' }} />
            <Box>
              <Typography variant="body2" color="textSecondary">Employee:</Typography>
              <Typography variant="body1">{requestData.employee}</Typography>
            </Box>
          </Box>
          
          {/* From Date */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EventIcon sx={{ mr: 1, color: '#555' }} />
            <Box>
              <Typography variant="body2" color="textSecondary">From:</Typography>
              <Typography variant="body1">{requestData.fromDate}</Typography>
            </Box>
          </Box>
          
          {/* Leave Type */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonOutlineIcon sx={{ mr: 1, color: '#555' }} />
            <Box>
              <Typography variant="body2" color="textSecondary">Leave type:</Typography>
              <Typography variant="body1">{requestData.leaveType}</Typography>
            </Box>
          </Box>
          
          {/* To Date */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EventIcon sx={{ mr: 1, color: '#555' }} />
            <Box>
              <Typography variant="body2" color="textSecondary">To:</Typography>
              <Typography variant="body1">{requestData.toDate}</Typography>
            </Box>
          </Box>
          
          {/* Duration */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ mr: 1, color: '#555' }} />
            <Box>
              <Typography variant="body2" color="textSecondary">Duration:</Typography>
              <Typography variant="body1">{requestData.duration}</Typography>
            </Box>
          </Box>
          
          {/* Status */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon sx={{ mr: 1, color: '#555', fontSize: 20 }} />
            <Box>
              <Typography variant="body2" color="textSecondary">Status:</Typography>
              <Typography variant="body1" sx={{ color: getStatusColor(requestData.status) }}>
                {requestData.status}
              </Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Description */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>Description</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            disabled
            defaultValue={requestData.description}
            sx={{ 
              backgroundColor: '#f5f5f5',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
              },
            }}
          />
        </Box>
        
        {/* Document Link */}
        <Box sx={{ mt: 2 }}>
          <Button 
            startIcon={<DescriptionIcon />} 
            sx={{ 
              color: '#1976d2', 
              textTransform: 'none', 
              px: 0,
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline'
              }
            }}
          >
            {requestData.document}
          </Button>
        </Box>
        
        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 1 }}>
          <Button 
            variant="contained" 
            color="success"
            sx={{ 
              minWidth: 100, 
              textTransform: 'none',
              borderRadius: 1
            }}
          >
            Accept
          </Button>
          <Button 
            variant="outlined" 
            color="error"
            sx={{ 
              minWidth: 100, 
              textTransform: 'none',
              borderRadius: 1
            }}
          >
            Reject
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveRequestDetailsModel;