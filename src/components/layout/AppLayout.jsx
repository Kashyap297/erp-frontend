import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom'; // ✅ Import this
import Sidebar from './Sidebar';
import AppBarComponent from './AppBarComponent';

const AppLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                isMobile={isMobile}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { md: `calc(100% - 240px)` },
                }}
            >
                <AppBarComponent
                    handleDrawerToggle={handleDrawerToggle}
                    isMobile={isMobile}
                />
                <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
                    <Box sx={{ ...theme.mixins.toolbar }} />
                    <Outlet /> {/* ✅ This is where child routes render */}
                </Box>
            </Box>
        </Box>
    );
};

export default AppLayout;
