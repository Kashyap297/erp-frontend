"use client"

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
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ProfileCard from "../../components/common/ProfileCard"

const PrincipalDashboard = () => {

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
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            bgcolor:
                                status === "present"
                                    ? "#4caf50" // Green for present
                                    : status === "absent"
                                        ? "#f44336" // Red for absent
                                        : "#bdbdbd", // Gray for no record
                        }}
                    />
                ))}
            </Box>
        )
    }

    return (
        <Box sx={{ width: "100%" }}>
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
                    flexDirection: { xs: "column", md: "row" },  // Stack vertically on mobile
                    flexWrap: "wrap",
                    gap: 3,  // Consistent gap between items
                }}
            >
                {/* Fee Collection */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "30%" },
                        order: 1  // Ensure consistent ordering
                    }}
                >
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Fee Collection
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                        ₹5,248,750
                    </Typography>
                </Box>

                {/* First Divider - only visible on desktop */}
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        display: { xs: "none", md: "block" },
                        order: 2
                    }}
                />

                {/* Student Enrollment */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "30%" },
                        textAlign: { xs: "left", md: "center" },  // Left align on mobile
                        order: 3
                    }}
                >
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Student Enrollment
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                        1,248
                    </Typography>
                </Box>

                {/* Second Divider - only visible on desktop */}
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        display: { xs: "none", md: "block" },
                        order: 4
                    }}
                />

                {/* Teaching Staff */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "30%" },
                        textAlign: { xs: "left", md: "right" },  // Left align on mobile
                        order: 5
                    }}
                >
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Teaching Staff
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                        87
                    </Typography>
                </Box>
            </Box>

            {/* Teacher Attendance Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Teacher Attendance
                </Typography>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ "& th": { fontWeight: "bold" } }}>
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
                    }}
                >
                    See more
                </Button>
            </Box>

            {/* Student Fee Status Section */}
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Student Fee Status
                </Typography>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ "& th": { fontWeight: "bold" } }}>
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
                                        <Typography
                                            sx={{
                                                color: fee.status === "Paid" ? "#4caf50" : "#ff9800",
                                                fontWeight: "medium",
                                            }}
                                        >
                                            {fee.status}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default PrincipalDashboard