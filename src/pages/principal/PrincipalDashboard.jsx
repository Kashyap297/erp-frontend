"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Divider,
    Card,
    CardContent,
    useMediaQuery,
    useTheme,
    Chip,
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import PersonIcon from "@mui/icons-material/Person"
import ClassIcon from "@mui/icons-material/Class"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import BadgeIcon from "@mui/icons-material/Badge"
import ProfileCard from "../../components/common/ProfileCard"

const PrincipalDashboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const Data = {
        name: "Ranjeet Singh",
        role: "Teacher",
        contact: "+91 000000 00000",
        email: "rsingh45@gmail.com",
        classAdvisor: "Class Advisor",
        attendance: 90,
        leaveBalance: {
            annual: 60,
            sick: 40,
            paid: 20,
        },
    };

    // Mock data for teacher attendance
    const teacherAttendance = Array(5).fill({
        id: "EMP-0056",
        name: "Neha Singh",
        position: "HOD",
        history: ["present", "present", "absent", "present", "no-record"],
    })

    // Mock data for student fee status
    const studentFees = [
        {
            id: "STU2025-001",
            name: "Rahul Sharma",
            class: "10-A",
            dueDate: "15 Mar 2025",
            amount: "₹25,000",
            status: "Paid",
        },
        {
            id: "STU2025-001",
            name: "Rahul Sharma",
            class: "10-A",
            dueDate: "15 Mar 2025",
            amount: "₹25,000",
            status: "Pending",
        },
    ]

    // Function to render attendance history dots
    const renderAttendanceDots = (history) => {
        return (
            <Box sx={{ display: "flex", gap: 0.5 }}>
                {history.map((status, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: isMobile ? 12 : 16,
                            height: isMobile ? 12 : 16,
                            borderRadius: "50%",
                            bgcolor:
                                status === "present"
                                    ? "#2DB500" // Green for present
                                    : status === "absent"
                                        ? "#EB2E2E" // Red for absent
                                        : "#bdbdbd", // Gray for no record
                        }}
                    />
                ))}
            </Box>
        )
    }

    // Render mobile card view for teacher attendance
    const renderTeacherAttendanceCard = (teacher, index) => (
        <Card 
            key={index} 
            sx={{ 
                mb: 2, 
                borderRadius: 1,
                boxShadow: 'none',
                border: '1px solid #e0e0e0'
            }}
        >
            <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                    <Typography variant="body1" fontWeight="medium">
                        {teacher.name}
                    </Typography>
                    <Chip 
                        label={teacher.position} 
                        size="small" 
                        sx={{ 
                            bgcolor: '#e3f2fd', 
                            color: '#0277bd',
                            fontWeight: 'medium',
                            fontSize: '0.75rem'
                        }} 
                    />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <BadgeIcon sx={{ color: 'text.secondary', mr: 1, fontSize: '1rem' }} />
                    <Typography variant="body2" color="text.secondary">
                        {teacher.id}
                    </Typography>
                </Box>
                
                <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Attendance (Last Week):
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        {renderAttendanceDots(teacher.history)}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );

    // Render mobile card view for student fees
    const renderStudentFeeCard = (fee, index) => (
        <Card 
            key={index} 
            sx={{ 
                mb: 2, 
                borderRadius: 1,
                boxShadow: 'none',
                border: '1px solid #e0e0e0'
            }}
        >
            <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                    <Typography variant="body1" fontWeight="medium">
                        {fee.name}
                    </Typography>
                    <Chip 
                        label={fee.status} 
                        size="small" 
                        sx={{ 
                            bgcolor: fee.status === "Paid" ? '#e8f5e9' : '#fff3e0',
                            color: fee.status === "Paid" ? '#2DB500' : '#ff9800',
                            fontWeight: 'medium',
                            fontSize: '0.75rem'
                        }} 
                    />
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 2 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '120px' }}>
                        <BadgeIcon sx={{ color: 'text.secondary', mr: 0.5, fontSize: '1rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            ID: {fee.id}
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ClassIcon sx={{ color: 'text.secondary', mr: 0.5, fontSize: '1rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            Class: {fee.class}
                        </Typography>
                    </Box>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 2 }, mt: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '120px' }}>
                        <CalendarTodayIcon sx={{ color: 'text.secondary', mr: 0.5, fontSize: '1rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            Due: {fee.dueDate}
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon sx={{ color: 'text.secondary', mr: 0.5, fontSize: '1rem' }} />
                        <Typography variant="body2" fontWeight="medium">
                            {fee.amount}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );

    return (
        <Box sx={{ width: "100%", px: { xs: 1, md: 0 }, py: 0 }}>
            {/* Profile Card Section */}
            <Box sx={{ mb: 4 }}>
                <ProfileCard data={Data} />
            </Box>
            
            {/* Key Metrics Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 4,
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 3, md: 2 },
                }}
            >
                {/* Fee Collection */}
                <Card 
                    sx={{ 
                        width: { xs: "100%", md: "calc(33% - 16px)" },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderLeft: '4px solid #0277bd',
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box 
                                sx={{ 
                                    bgcolor: '#e3f2fd', 
                                    p: 1, 
                                    borderRadius: '50%',
                                    mr: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <AttachMoneyIcon sx={{ fontSize: '1.5rem', color: '#0277bd' }} />
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                Fee Collection
                            </Typography>
                        </Box>
                        <Typography 
                            variant="h5" 
                            fontWeight="medium"
                            sx={{ 
                                mt: 1,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                            }}
                        >
                            ₹5,248,750
                        </Typography>
                    </CardContent>
                </Card>

                {/* Student Enrollment */}
                <Card 
                    sx={{ 
                        width: { xs: "100%", md: "calc(33% - 16px)" },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderLeft: '4px solid #00897b',
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box 
                                sx={{ 
                                    bgcolor: '#e0f2f1', 
                                    p: 1, 
                                    borderRadius: '50%',
                                    mr: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <PersonIcon sx={{ fontSize: '1.5rem', color: '#00897b' }} />
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                Student Enrollment
                            </Typography>
                        </Box>
                        <Typography 
                            variant="h5" 
                            fontWeight="medium"
                            sx={{ 
                                mt: 1,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                            }}
                        >
                            1,248
                        </Typography>
                    </CardContent>
                </Card>

                {/* Teaching Staff */}
                <Card 
                    sx={{ 
                        width: { xs: "100%", md: "calc(33% - 16px)" },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderLeft: '4px solid #5e35b1',
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box 
                                sx={{ 
                                    bgcolor: '#ede7f6', 
                                    p: 1, 
                                    borderRadius: '50%',
                                    mr: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <BadgeIcon sx={{ fontSize: '1.5rem', color: '#5e35b1' }} />
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                Teaching Staff
                            </Typography>
                        </Box>
                        <Typography 
                            variant="h5" 
                            fontWeight="medium"
                            sx={{ 
                                mt: 1,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                            }}
                        >
                            87
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Teacher Attendance Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Teacher Attendance
                </Typography>
                
                {isMobile ? (
                    // Mobile card view for teacher attendance
                    <Box>
                        {teacherAttendance.map((teacher, index) => renderTeacherAttendanceCard(teacher, index))}
                    </Box>
                ) : (
                    // Desktop table view for teacher attendance
                    <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ "& th": { fontWeight: "bold", bgcolor: "#f5f5f5" } }}>
                                    <TableCell sx={{ width: "20%", py: 2 }}>Employee ID</TableCell>
                                    <TableCell sx={{ width: "30%", py: 2 }}>Teacher Name</TableCell>
                                    <TableCell sx={{ width: "20%", py: 2, textAlign: "center" }}>Position</TableCell>
                                    <TableCell sx={{ width: "30%", py: 2, textAlign: "center" }}>History (Last Week)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {teacherAttendance.map((teacher, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ py: 2 }}>{teacher.id}</TableCell>
                                        <TableCell sx={{ py: 2 }}>{teacher.name}</TableCell>
                                        <TableCell sx={{ py: 2, textAlign: "center" }}>{teacher.position}</TableCell>
                                        <TableCell sx={{ py: 2 }}>
                                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                {renderAttendanceDots(teacher.history)}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon fontSize="small" />}
                    fullWidth
                    sx={{
                        mt: 1,
                        bgcolor: "#0277bd",
                        "&:hover": {
                            bgcolor: "#01579b",
                        },
                        textTransform: "none",
                        borderRadius: 0,
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        py: { xs: 1.5, md: 1 }
                    }}
                >
                    See more
                </Button>
            </Box>

            {/* Student Fee Status Section */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Student Fee Status
                </Typography>
                
                {isMobile ? (
                    // Mobile card view for student fees
                    <Box>
                        {studentFees.map((fee, index) => renderStudentFeeCard(fee, index))}
                    </Box>
                ) : (
                    // Desktop table view for student fees
                    <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ "& th": { fontWeight: "bold", bgcolor: "#f5f5f5" } }}>
                                    <TableCell>Student ID</TableCell>
                                    <TableCell>Student Name</TableCell>
                                    <TableCell>Class</TableCell>
                                    <TableCell>Due Date</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {studentFees.map((fee, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{fee.id}</TableCell>
                                        <TableCell>{fee.name}</TableCell>
                                        <TableCell>{fee.class}</TableCell>
                                        <TableCell>{fee.dueDate}</TableCell>
                                        <TableCell>{fee.amount}</TableCell>
                                        <TableCell>
                                            <Chip 
                                                label={fee.status} 
                                                size="small" 
                                                sx={{ 
                                                    bgcolor: fee.status === "Paid" ? '#e8f5e9' : '#fff3e0',
                                                    color: fee.status === "Paid" ? '#2DB500' : '#ff9800',
                                                    fontWeight: 'medium'
                                                }} 
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon fontSize="small" />}
                    fullWidth
                    sx={{
                        mt: 1,
                        bgcolor: "#0277bd",
                        "&:hover": {
                            bgcolor: "#01579b",
                        },
                        textTransform: "none",
                        borderRadius: 0,
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        py: { xs: 1.5, md: 1 }
                    }}
                >
                    See more
                </Button>
            </Box>
        </Box>
    )
}

export default PrincipalDashboard