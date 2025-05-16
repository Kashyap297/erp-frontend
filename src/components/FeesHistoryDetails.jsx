import React from 'react';
import { 
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Container,
  Paper
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    success: {
      light: '#e8f5e9',
      main: '#4caf50',
    },
    error: {
      light: '#ffebee',
      main: '#f44336',
    },
  },
});

const FeesHistoryDetails = () => {
  const studentInfo = {
    name: "Arpit Jha",
    className: "10(a)",
    enrollmentNo: "1244"
  };

  const feeRecords = [
    {
      month: "January",
      status: "Paid",
      isComplete: true,
      academicFee: 5000,
      transport: 0,
      lateFee: 0,
      dueDate: "Mar 14",
      isPaid: true
    },
    {
      month: "February",
      status: "Overdue",
      isComplete: false,
      academicFee: 5000,
      transport: 0,
      lateFee: 0,
      dueDate: "Mar 14",
      isPaid: false
    },
    {
      month: "February",
      status: "Overdue",
      isComplete: false,
      academicFee: 5000,
      transport: 0,
      lateFee: 0,
      dueDate: "Mar 14",
      isPaid: false
    },
    {
      month: "February",
      status: "Overdue",
      isComplete: false,
      academicFee: 5000,
      transport: 0,
      lateFee: 0,
      dueDate: "Mar 14",
      isPaid: false
    },
    {
      month: "February",
      status: "Overdue",
      isComplete: false,
      academicFee: 5000,
      transport: 0,
      lateFee: 0,
      dueDate: "Mar 14",
      isPaid: false
    },
    {
      month: "February",
      status: "Overdue",
      isComplete: false,
      academicFee: 5000,
      transport: 0,
      lateFee: 0,
      dueDate: "Mar 14",
      isPaid: false
    },
    {
      month: "February",
      status: "Overdue",
      isComplete: false,
      academicFee: 5000,
      transport: 0,
      lateFee: 0,
      dueDate: "Mar 14",
      isPaid: false
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        {/* Header with student info */}
        <Paper 
          elevation={1} 
          sx={{ 
            p: 2, 
            mb: 2, 
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              {studentInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Class - {studentInfo.className}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Enrollment no-{studentInfo.enrollmentNo}
            </Typography>
          </Box>
        </Paper>

        {/* Fee records */}
        {feeRecords.map((record, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{ 
              p: 2, 
              mb: 2, 
              borderRadius: 2,
              bgcolor: record.isPaid ? 'success.light' : 'error.light',
              border: 1,
              borderColor: record.isPaid ? 'success.main' : 'error.main',
              borderWidth: '1px'
            }}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              {/* Status and Month */}
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {record.isComplete ? (
                    <CheckCircleIcon color="success" fontSize="small" />
                  ) : (
                    <CancelIcon color="error" fontSize="small" />
                  )}
                  <Typography variant="body1" fontWeight="medium">
                    {record.month}
                  </Typography>
                </Box>
              </Grid>

              {/* Payment Status */}
              <Grid item>
                <Typography 
                  variant="body1" 
                  fontWeight="medium" 
                  color={record.isPaid ? 'success.main' : 'error.main'}
                >
                  {record.status}
                </Typography>
              </Grid>

              {/* Fee Details */}
              <Grid item>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2">
                    Academic: {record.academicFee}
                  </Typography>
                  <Typography variant="body2">
                    Transport: {record.transport}
                  </Typography>
                  <Typography variant="body2">
                    Late Fee: {record.lateFee}
                  </Typography>
                </Box>
              </Grid>

              {/* Due Date */}
              <Grid item>
                <Typography 
                  variant="body2" 
                  color={record.isPaid ? 'success.main' : 'error.main'}
                >
                  {record.isPaid ? `Paid on ${record.dueDate}` : `Due on ${record.dueDate}`}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default FeesHistoryDetails;