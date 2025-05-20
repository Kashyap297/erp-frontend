import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, } from '@mui/material';
import {  NotificationsNone as NotificationIcon } from '@mui/icons-material';

const AppBarComponent = () => {
    return(
        <AppBar position="static" color="default" elevation={0} sx={{ mb:0 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Attendance
          </Typography>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}

export default AppBarComponent;