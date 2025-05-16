import React from "react";
import { Stack, Tooltip, useTheme, useMediaQuery } from '@mui/material';

import {
    NotificationsNone as NotificationIcon,
    FiberManualRecord as DotIcon,
    CheckCircle as PresentIcon,
    Cancel as AbsentIcon
  } from '@mui/icons-material';

const renderAttendanceHistory = (history) => {
     const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
      <Stack direction="row" spacing={1} justifyContent="center">
        {history.map((status, idx) => {
          let color;
          switch (status) {
            case 'present':
              color = 'success.main';
              break;
            case 'absent':
              color = 'error.main';
              break;
            default:
              color = 'grey.400';
          }
          return (
            <Tooltip 
              key={idx} 
              title={status.charAt(0).toUpperCase() + status.slice(1)}
              arrow
            >
              <DotIcon 
                sx={{ 
                  color, 
                  fontSize: isMobile ? 16 : 24 
                }} 
              />
            </Tooltip>
          );
        })}
      </Stack>
    );
  };

export default renderAttendanceHistory;