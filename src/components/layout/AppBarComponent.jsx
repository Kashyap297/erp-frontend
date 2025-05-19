import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Menu } from '@mui/material';
import { NotificationsNone } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

// Create a comprehensive title map from all role menus
const createTitleMap = () => {
    const roleMenus = {
        teacher: [
            { path: '/teacher', text: 'Dashboard' },
            { path: '/teacher/student-attendance', text: 'Student Attendance' },
            { path: '/teacher/attendance-status', text: 'Attendance Status' },
            { path: '/teacher/homework', text: 'Homework' },
            { path: '/teacher/timetable', text: 'Time Table' },
            { path: '/teacher/result', text: 'Result' },
            { path: '/teacher/notice', text: 'Notice' },
            { path: '/teacher/salary', text: 'Salary' },
            { path: '/teacher/leave', text: 'Leave' },
            { path: '/teacher/remark', text: 'Remark' },
            { path: '/teacher/support', text: 'Support' },
        ],
        principal: [
            { path: '/principal', text: 'Dashboard' },
            { path: '/principal/student-search', text: 'Student Search' },
            { path: '/principal/attendance-status', text: 'Attendance Status' },
            { path: '/principal/leave-approval', text: 'Leave Approval' },
            { path: '/principal/teacher-status', text: 'Teacher Status' },
            { path: '/principal/schedule-event', text: 'Schedule Event' },
            { path: '/principal/schedule-exam', text: 'Schedule Exam' },
            { path: '/principal/remark', text: 'Remark' },
            { path: '/principal/support', text: 'Support' },
        ],
        finance: [
            { path: '/finance', text: 'Dashboard' },
            { path: '/finance/fees-management', text: 'Fees Management' },
            { path: '/finance/student-fees', text: 'Student Fees' },
            { path: '/finance/fees-structure', text: 'Fees Structure' },
            { path: '/finance/late-fees', text: 'Fine & Late Fees' },
            { path: '/finance/payment-tracking', text: 'Payment Tracking' },
            { path: '/finance/receipt-generation', text: 'Receipt Generation' },
            { path: '/finance/fees-verification', text: 'Offline Fees Verification' },
            { path: '/finance/remark', text: 'Remark' },
            { path: '/finance/support', text: 'Support' },
        ],
        coordinator: [
            { path: '/coordinator', text: 'Dashboard' },
            { path: '/coordinator/timetable', text: 'Timetable Scheduling' },
            { path: '/coordinator/schedule-event', text: 'Schedule Event' },
            { path: '/coordinator/assign-class', text: 'Assign Class' },
            { path: '/coordinator/leave-approval', text: 'Leave Approval' },
            { path: '/coordinator/notices', text: 'Notice Board' },
            { path: '/coordinator/salary', text: 'Salary' },
            { path: '/coordinator/student-data', text: 'Student Data' },
            { path: '/coordinator/update-attendance', text: 'Update Attendance' },
            { path: '/coordinator/remark', text: 'Remark' },
            { path: '/coordinator/support', text: 'Support' },
        ],
        admission: [
            { path: '/admission', text: 'Dashboard' },
            { path: '/admission/student-registration', text: 'Student Registration' },
            { path: '/admission/teacher-registration', text: 'Teacher Registration' },
            { path: '/admission/tc-upload', text: 'TC Upload' },
            { path: '/admission/edit-record', text: 'Edit Record' },
            { path: '/admission/student-data', text: 'Student Data' },
            { path: '/admission/salary', text: 'Salary' },
            { path: '/admission/support', text: 'Support' },
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

const AppBarComponent = ({ handleDrawerToggle, isMobile }) => {
    const location = useLocation();
    const titleMap = createTitleMap();

    // Function to find the best matching title for the current path
    const getTitle = () => {
        // First try exact match
        if (titleMap[location.pathname]) {
            return titleMap[location.pathname];
        }

        // If no exact match, try to find the closest parent path
        const pathParts = location.pathname.split('/').filter(Boolean);
        while (pathParts.length > 0) {
            const testPath = '/' + pathParts.join('/');
            if (titleMap[testPath]) {
                return titleMap[testPath];
            }
            pathParts.pop();
        }

        return 'Dashboard';
    };

    return (
        <AppBar
            position="fixed"
            color="default"
            elevation={0}
            sx={{
                width: { md: `calc(100% - ${240}px)` },
                ml: { md: `${240}px` },
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isMobile && (
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <Menu sx={{ color: 'black' }} />
                        </IconButton>
                    )}
                    <Typography variant="h6" noWrap>
                        {getTitle()}
                    </Typography>
                </Box>
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