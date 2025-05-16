import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Avatar,
    Typography,
    Divider,
    styled,
    IconButton,
} from '@mui/material';
import {
    Dashboard,
    AccessTime,
    CheckCircle,
    MenuBook,
    Schedule,
    Image,
    Announcement,
    Payments,
    Assignment,
    Note,
    Headphones,
    Logout,
    Group,
    EventNote,
    Badge,
    Home,
    PersonSearch,
    HowToReg,
    MeetingRoom,
    CalendarMonth,
    EventAvailable,
    EditNote,
    HeadsetMic,
    Description,
    RequestQuote,
    Groups2,
    TrackChanges,
    ReceiptLong,
    FactCheck,
    LibraryBooks,
    Campaign,
    Loop,
    Feedback,
    AppRegistration,
    PersonAddAlt,
    UploadFile,
    Event,
    ChevronLeft, // Added missing Event icon import
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { getCurrentUserRole } from '../../utils/roles';

const drawerWidth = 240;

// Styled NavLink
const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: 'white',
    '&.active .MuiListItem-root': {
        backgroundColor: 'rgba(255,255,255,0.15)',
    },
}));

// Sidebar menus per role
const roleMenus = {
    teacher: [
        { text: 'Dashboard', icon: <Dashboard />, path: '/teacher' },
        { text: 'Student attendance', icon: <AccessTime />, path: '/teacher/student-attendance' },
        { text: 'Attendance status', icon: <CheckCircle />, path: 'teacher/attendance-status' },
        { text: 'Homework', icon: <MenuBook />, path: '/homework' },
        { text: 'Time table', icon: <Schedule />, path: 'teacher/timetable' },
        { text: 'Result', icon: <Image />, path: 'teacher/result' },
        { text: 'Notice', icon: <Announcement />, path: 'teacher/notice' },
        { text: 'Salary', icon: <Payments />, path: 'teacher/salary' },
        { text: 'Leave', icon: <Assignment />, path: 'teacher/leave' },
        { text: 'Remark', icon: <Note />, path: 'teacher/remark' },
        { text: 'Support', icon: <Headphones />, path: '/support' },
    ],
    principal: [
        { text: 'Dashboard', icon: <Home />, path: '/' },
        { text: 'Student search', icon: <PersonSearch />, path: '/student-search' },
        { text: 'Attendance status', icon: <HowToReg />, path: '/attendance-status' },
        { text: 'Leave approval', icon: <MeetingRoom />, path: '/leave-approval' },
        { text: 'Teacher status', icon: <CalendarMonth />, path: '/teacher-status' },
        { text: 'Schedule event', icon: <EventAvailable />, path: '/schedule-event' },
        { text: 'Schedule exam', icon: <Image />, path: '/schedule-exam' },
        { text: 'Remark', icon: <EditNote />, path: '/remark' },
        { text: 'Support', icon: <HeadsetMic />, path: '/support' },
    ],
    finance: [
        { text: 'Dashboard', icon: <Home />, path: '/' },
        { text: 'Fees management', icon: <Description />, path: '/fees-management' },
        { text: 'Student fees', icon: <RequestQuote />, path: '/student-fees' },
        { text: 'Fees structure', icon: <Groups2 />, path: '/fees-structure' },
        { text: 'Fine & late fees', icon: <CalendarMonth />, path: '/late-fees' },
        { text: 'Payment tracking', icon: <TrackChanges />, path: '/payment-tracking' },
        { text: 'Receipt generation', icon: <ReceiptLong />, path: '/receipt-generation' },
        { text: 'Offline fees verification', icon: <FactCheck />, path: '/offline-verification' },
        { text: 'Remark', icon: <EditNote />, path: '/remark' },
        { text: 'Support', icon: <HeadsetMic />, path: '/support' },
    ],
    coordinator: [
        { text: 'Dashboard', icon: <Home />, path: '/' },
        { text: 'Timetable scheduling', icon: <EventNote />, path: '/timetable' },
        { text: 'Schedule event', icon: <Event />, path: '/schedule-event' },
        { text: 'Assigns class', icon: <LibraryBooks />, path: '/assign-class' },
        { text: 'Leave approval', icon: <MeetingRoom />, path: '/leave-approval' },
        { text: 'Notice board', icon: <Campaign />, path: '/notices' },
        { text: 'Salary', icon: <Payments />, path: '/salary' },
        { text: 'Student data', icon: <Group />, path: '/student-data' },
        { text: 'Update attendance', icon: <Loop />, path: '/update-attendance' },
        { text: 'Remark', icon: <Feedback />, path: '/remark' },
        { text: 'Support', icon: <HeadsetMic />, path: '/support' },
    ],
    admission: [
        { text: 'Dashboard', icon: <Home />, path: '/' },
        { text: 'Student registration', icon: <AppRegistration />, path: '/student-registration' },
        { text: 'Teacher Registration', icon: <PersonAddAlt />, path: '/teacher-registration' },
        { text: 'TC upload', icon: <UploadFile />, path: '/tc-upload' },
        { text: 'Edit Record', icon: <EditNote />, path: '/edit-record' },
        { text: 'Student data', icon: <Group />, path: '/student-data' },
        { text: 'Salary', icon: <Payments />, path: '/salary' },
        { text: 'Support', icon: <HeadsetMic />, path: '/support' },
    ],
};

const Sidebar = ({ mobileOpen, handleDrawerToggle, isMobile }) => {
    const role = getCurrentUserRole();
    const menuItems = roleMenus[role] || [];

    return (
        <>
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#0072C9',
                        color: 'white',
                    },
                }}
            >
                {isMobile && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                            <ChevronLeft />
                        </IconButton>
                    </Box>
                )}
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                        src="/path-to-profile-image.jpg"
                        sx={{ width: 48, height: 48 }}
                    />
                    <Typography variant="subtitle1" fontWeight={500}>
                        Ranjeet Singh
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mx: 2, mb: 1 }} />
                <List>
                    {menuItems.map((item, index) => (
                        <StyledNavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={isMobile ? handleDrawerToggle : undefined}
                        >
                            <ListItem>
                                <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </StyledNavLink>
                    ))}
                </List>
                <Box sx={{ flexGrow: 1 }} />
                <List sx={{ mt: 'auto' }}>
                    <StyledNavLink to="/logout" onClick={isMobile ? handleDrawerToggle : undefined}>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}><Logout /></ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </StyledNavLink>
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;