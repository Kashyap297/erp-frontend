import React from 'react';
import { Box, Paper, Typography, Button, Chip } from '@mui/material';
import { InsertDriveFile } from '@mui/icons-material';

const LeaveApplicationDetails = () => {
  return (
    <Paper 
      elevation={1} 
      sx={{ 
        p: 3, 
        borderRadius: 2,
        margin: 5
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
        <Typography color="primary" sx={{ fontWeight: 500 }}>
          From - 19/11/24
        </Typography>
        
        <Typography color="primary" sx={{ fontWeight: 500 }}>
          Till - 20/11/24
        </Typography>
        
        <Typography color="primary" sx={{ fontWeight: 500, mb: 1 }}>
          Medical Issue
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Chip 
            label="Rejected" 
            color="error" 
            sx={{ 
              borderRadius: '16px',
              fontWeight: 'bold',
              color: 'white',
              px: 1
            }} 
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 3, lineHeight: 1.6 }}>
          Lorem Ipsum Dolor Sit Amet Consectetur. Non Eu Ipsum Volutpat Etiam Sapien Nibh Velit Faucibus. Vivamus Aliquam Augue 
          Donec Consequat Porta. Pretium Pharetra Rhoncus Mattis Quis Sed Id Nibh Cursus Commodo Ultrices Quis Nisl Id Risus 
          Tincidunt.
          Faucibus Dictum Nisl Magna Donec Habitant Tincidunt. Massa Fermentum In Porta Consequat A Et Faucibus. Tempor At Id 
          Turpis Pellentesque Maecenas Eget Nibh Euismod. Laoreet Nunc Ullamcorper Viverra Diam In Auctor. Aliquet Cras Tristique Ut 
          Id Purus A Ultrices. Ornare Gravida Viverra Natoque Nulla Eget Etiam Faucibus Vel Nibh Ut Est Ac Purus Adipiscing Viverra 
          Urna. Convallis Vivamus Proin Nisl Sed Pellentesque Ut Diam Mauris Urna Cras Ut Est Dui. Vestibulum Risus Fames 
          Sollicitudin Viverra Nibh Ipsum Urna Non Enim. Sit Sit Eu Suspendisse Quis Molestie Tempus Feugiat Pulvinar Elit Turpis. 
          Suspendisse Velit Tellus Semper Quam Vulputate Cursus Est Elit. Facilisi Malesuada Consequat Arcu Vestibulum Feugiat Proin 
          Sed Massa Faucibus.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant="text"
          color="primary"
          startIcon={<InsertDriveFile />}
          sx={{ textTransform: 'none' }}
        >
          Document
        </Button>
      </Box>
    </Paper>
  );
};

export default LeaveApplicationDetails;