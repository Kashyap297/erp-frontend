import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { NotificationsNone } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

// Create a comprehensive title map from all role menus
const createTitleMap = () => {
    const roleMenus = {
        teacher: [
            { path: '/', text: 'Dashboard' },
            { path: '/student-attendance', text: 'Student Attendance' },
            { path: '/attendance-status', text: 'Attendance Status' },
            { path: '/homework', text: 'Homework' },
            { path: '/timetable', text: 'Time Table' },
            { path: '/result', text: 'Result' },
            { path: '/notice', text: 'Notice' },
            { path: '/salary', text: 'Salary' },
            { path: '/leave', text: 'Leave' },
            { path: '/remark', text: 'Remark' },
            { path: '/support', text: 'Support' },
        ],
        principal: [
            { path: '/', text: 'Dashboard' },
            { path: '/student-search', text: 'Student Search' },
            { path: '/attendance-status', text: 'Attendance Status' },
            { path: '/leave-approval', text: 'Leave Approval' },
            { path: '/teacher-status', text: 'Teacher Status' },
            { path: '/schedule-event', text: 'Schedule Event' },
            { path: '/schedule-exam', text: 'Schedule Exam' },
            { path: '/remark', text: 'Remark' },
            { path: '/support', text: 'Support' },
        ],
        finance: [
            { path: '/', text: 'Dashboard' },
            { path: '/fees-management', text: 'Fees Management' },
            { path: '/student-fees', text: 'Student Fees' },
            { path: '/fees-structure', text: 'Fees Structure' },
            { path: '/late-fees', text: 'Fine & Late Fees' },
            { path: '/payment-tracking', text: 'Payment Tracking' },
            { path: '/receipt-generation', text: 'Receipt Generation' },
            { path: '/offline-verification', text: 'Offline Verification' },
            { path: '/remark', text: 'Remark' },
            { path: '/support', text: 'Support' },
        ],
        coordinator: [
            { path: '/', text: 'Dashboard' },
            { path: '/timetable', text: 'Timetable Scheduling' },
            { path: '/schedule-event', text: 'Schedule Event' },
            { path: '/assign-class', text: 'Assign Class' },
            { path: '/leave-approval', text: 'Leave Approval' },
            { path: '/notices', text: 'Notice Board' },
            { path: '/salary', text: 'Salary' },
            { path: '/student-data', text: 'Student Data' },
            { path: '/update-attendance', text: 'Update Attendance' },
            { path: '/remark', text: 'Remark' },
            { path: '/support', text: 'Support' },
        ],
        admission: [
            { path: '/', text: 'Dashboard' },
            { path: '/student-registration', text: 'Student Registration' },
            { path: '/teacher-registration', text: 'Teacher Registration' },
            { path: '/tc-upload', text: 'TC Upload' },
            { path: '/edit-record', text: 'Edit Record' },
            { path: '/student-data', text: 'Student Data' },
            { path: '/salary', text: 'Salary' },
            { path: '/support', text: 'Support' },
        ],
    };

    // Combine all paths from all roles into one map
    const titleMap = {};
    Object.values(roleMenus).forEach(menuItems => {
        menuItems.forEach(item => {
            titleMap[item.path] = item.text;
        });
    });
    return titleMap;
};

const AppBarComponent = () => {
    const location = useLocation();
    const titleMap = createTitleMap();

    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    {titleMap[location.pathname] || 'Dashboard'}
                </Typography>
                <IconButton>
                    <Badge badgeContent={3} color="error">
                        <NotificationsNone />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;