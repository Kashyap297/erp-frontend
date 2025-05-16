import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Home,
  Person,
  Schedule,
  School,
  Announcement,
  Money,
  EventNote,
  Message,
  HelpOutline,
  LogoutOutlined,
  Menu
} from '@mui/icons-material';

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <Home /> },
    { text: 'Student attendance', icon: <Person /> },
    { text: 'My Attendance', icon: <Person /> },
    { text: 'Time table', icon: <Schedule /> },
    { text: 'Result', icon: <School /> },
    { text: 'Notice', icon: <Announcement /> },
    { text: 'Salary', icon: <Money /> },
    { text: 'Leave', icon: <EventNote /> },
    { text: 'Remark', icon: <Message /> },
    { text: 'Support', icon: <HelpOutline /> },
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: '#1565c0' }}>RS</Avatar>
        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 500 }}>
          Ranjeet Singh
        </Typography>
      </Box>
      
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={index}
            sx={{ 
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiTypography-root': { 
                  color: 'white',
                  fontSize: '0.9rem'
                } 
              }}
            />
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ mt: 'auto' }}>
        <ListItem 
          button 
          sx={{ 
            py: 1,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText 
            primary="Logout" 
            sx={{ 
              '& .MuiTypography-root': { 
                color: 'white',
                fontSize: '0.9rem'
              } 
            }}
          />
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
      )}
      
      <Box component="nav">
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              backgroundColor: '#0277bd',
              backgroundImage: 'linear-gradient(180deg, #0277bd 0%, #0288d1 100%)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}