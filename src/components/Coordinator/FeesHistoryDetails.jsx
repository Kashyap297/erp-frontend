"use client"

import { Box, Typography, IconButton, Divider, Paper, useTheme, useMediaQuery } from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const FeesHistoryDetails = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Mock data for student
    const student = {
        name: "Arpit Jha",
        class: "10(a)",
        enrollmentNo: "1244",
    }

    // Mock data for fee records
    const feeRecords = [
        {
            id: 1,
            month: "January",
            status: "Paid",
            academic: 5000,
            transport: "-",
            lateFine: 0,
            date: "Mar 14",
            isPaid: true,
        },
        {
            id: 2,
            month: "February",
            status: "Overdue",
            academic: 5000,
            transport: "-",
            lateFine: 0,
            date: "Mar 14",
            isPaid: false,
        },
        {
            id: 3,
            month: "March",
            status: "Overdue",
            academic: 5000,
            transport: "-",
            lateFine: 0,
            date: "Mar 14",
            isPaid: false,
        },
        {
            id: 4,
            month: "April",
            status: "Pending",
            academic: 5000,
            transport: "-",
            lateFine: 0,
            date: "Mar 14",
            isPaid: false,
        },
        {
            id: 5,
            month: "May",
            status: "Pending",
            academic: 5000,
            transport: "-",
            lateFine: 0,
            date: "Mar 14",
            isPaid: false,
        },
    ]

    return (
        <Box sx={{
            width: "100%",
            mt: 2,
            px: isSmallScreen ? 1 : 2,
            p: isSmallScreen ? 1 : 4
        }}>
            {/* Student Information */}
            <Paper
                elevation={0}
                sx={{
                    p: isSmallScreen ? 1.5 : 3,
                    mb: 2,
                    borderRadius: 4,
                    border: "1px solid #e0e0e0",
                    display: "flex",
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: isSmallScreen ? 1 : 0,
                    textAlign: isSmallScreen ? 'center' : 'left'
                }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isSmallScreen ? "center" : "flex-start"
                }}>
                    <Typography variant={isSmallScreen ? "subtitle1" : "h6"}>
                        {student.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Class - {student.class}
                    </Typography>
                </Box>

                <Typography variant="body1">
                    Enrollment no-{student.enrollmentNo}
                </Typography>
            </Paper>

            {/* Fee Records */}
            {feeRecords.map((record) => (
                <Paper
                    key={record.id}
                    elevation={0}
                    sx={{
                        p: isSmallScreen ? 1.5 : 3,
                        mb: 2,
                        borderRadius: 4,
                        border: `1px solid ${record.isPaid ? "#4caf50" : "#f44336"}`,
                        display: "flex",
                        flexDirection: isMediumScreen ? 'column' : 'row',
                        justifyContent: "space-between",
                        alignItems: isMediumScreen ? 'flex-start' : 'center',
                        gap: isMediumScreen ? 2 : 0,
                    }}
                >
                    {/* Left - Month and Status */}
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        width: isMediumScreen ? '100%' : 'auto',
                        justifyContent: isSmallScreen ? 'space-between' : 'flex-start'
                    }}>
                        {record.isPaid ? (
                            <CheckCircleIcon sx={{
                                color: "#4caf50",
                                mr: 1,
                                fontSize: isSmallScreen ? '1rem' : '1.5rem'
                            }} />
                        ) : (
                            <CancelIcon sx={{
                                color: "#f44336",
                                mr: 1,
                                fontSize: isSmallScreen ? '1rem' : '1.5rem'
                            }} />
                        )}
                        <Typography variant={isSmallScreen ? "body2" : "body1"}>
                            {record.month}
                        </Typography>

                        {isMediumScreen && (
                            <Typography
                                variant={isSmallScreen ? "body2" : "body1"}
                                sx={{
                                    color: record.isPaid ? "#4caf50" : "#f44336",
                                    fontWeight: "medium",
                                    ml: 'auto'
                                }}
                            >
                                {record.status}
                            </Typography>
                        )}
                    </Box>

                    {/* Middle - Status (hidden on medium screens) */}
                    {!isMediumScreen && (
                        <Typography
                            variant={isSmallScreen ? "body2" : "body1"}
                            sx={{
                                color: record.isPaid ? "#4caf50" : "#f44336",
                                fontWeight: "medium",
                            }}
                        >
                            {record.status}
                        </Typography>
                    )}

                    {/* Right - Fee Details and Date */}
                    <Box sx={{
                        display: "flex",
                        alignItems: isSmallScreen ? 'flex-start' : 'center',
                        gap: isSmallScreen ? 2 : 4,
                        flexDirection: isSmallScreen ? 'column' : 'row',
                        width: isMediumScreen ? '100%' : 'auto'
                    }}>
                        <Box>
                            <Typography variant="body2">
                                Academic : {record.academic}
                            </Typography>
                            <Typography variant="body2">
                                Transport : {record.transport}
                            </Typography>
                            <Typography variant="body2">
                                Late fine : {record.lateFine}
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            ml: isSmallScreen ? 0 : 'auto'
                        }}>
                            <AccessTimeIcon sx={{
                                fontSize: isSmallScreen ? "0.8rem" : "1rem",
                                mr: 0.5
                            }} />
                            <Typography variant="body2">
                                {record.isPaid ? "Paid on" : "Due on"} {record.date}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </Box>
    )
}

export default FeesHistoryDetails