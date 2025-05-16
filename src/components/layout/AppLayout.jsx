import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import AppBarComponent from './AppBarComponent';

const AppLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main" width="100%">
                <AppBarComponent />
                <Box sx={{ p: 2 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default AppLayout;
