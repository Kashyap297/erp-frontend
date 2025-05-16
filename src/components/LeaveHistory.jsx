import React from 'react';
import { Box, Paper, Typography, Button, Grid } from '@mui/material';
import { InsertDriveFile } from '@mui/icons-material';

const MedicalIssueItem = ({ fromDate, tillDate, status }) => {
  return (
    <Paper elevation={1} sx={{ p: 2, mb: 2, borderRadius: 2, border: '1px solid gray' }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={3}>
          <Box>
            <Typography variant="caption" color="primary" fontWeight="medium">
              From - {fromDate}
            </Typography>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="primary" fontWeight="medium">
                Till - {tillDate}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid>
        <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="primary" fontWeight="medium">
                Medical Issue
              </Typography>
            </Box>
        </Grid>
        
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Button
            variant="text"
            color="primary"
            startIcon={<InsertDriveFile />}
            sx={{ textTransform: 'none' }}
          >
            Document
          </Button>
         
        </Grid>


        <Grid item xs={3}>
          <Button 
            variant="contained" 
            color="error" 
            size="small"
            sx={{
              borderRadius: 3,
              textTransform: 'none',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}
          >
            Rejected
          </Button>
        </Grid>
        
        
      </Grid>
    </Paper>
  );
};

const MedicalIssueList = () => {
  const medicalIssues = [
    { fromDate: '19/11/24', tillDate: '20/11/24', status: 'Rejected' },
    { fromDate: '19/11/24', tillDate: '20/11/24', status: 'Rejected' },
    { fromDate: '19/11/24', tillDate: '20/11/24', status: 'Rejected' },
    { fromDate: '19/11/24', tillDate: '20/11/24', status: 'Rejected' },
    { fromDate: '19/11/24', tillDate: '20/11/24', status: 'Rejected' },
    { fromDate: '19/11/24', tillDate: '20/11/24', status: 'Rejected' }
  ];

  return (
    <Box sx={{ p: 2 }}>
      {medicalIssues.map((issue, index) => (
        <MedicalIssueItem
          key={index}
          fromDate={issue.fromDate}
          tillDate={issue.tillDate}
          status={issue.status}
        />
      ))}
    </Box>
  );
};

export default MedicalIssueList;