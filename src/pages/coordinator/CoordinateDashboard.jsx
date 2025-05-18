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
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import VisibilityIcon from "@mui/icons-material/Visibility"
import ProfileCard from "../../components/common/ProfileCard";

const CoordinateDashboard = () => {

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
    // Mock data for today's absentees
    const todayAbsentees = [
        {
            name: "John Doe",
            class: "10th",
            section: "B",
            history: ["present", "present", "present", "absent", "no-record"],
        },
        {
            name: "John Doe",
            class: "10th",
            section: "B",
            history: ["present", "present", "absent", "absent", "no-record"],
        },
        {
            name: "John Doe",
            class: "10th",
            section: "B",
            history: ["present", "present", "present", "absent", "no-record"],
        },
        {
            name: "John Doe",
            class: "10th",
            section: "B",
            history: ["present", "present", "present", "absent", "no-record"],
        },
    ]

    // Mock data for leave applications
    const leaveApplications = [
        {
            name: "John Doe",
            dates: "12-mar to 14-mar",
            reason: "Fever",
            status: "Pending",
        },
        {
            name: "John Doe",
            dates: "12-mar to 14-mar",
            reason: "Fever",
            status: "Pending",
        },
        {
            name: "John Doe",
            dates: "12-mar to 14-mar",
            reason: "Fever",
            status: "Approved",
        },
        {
            name: "John Doe",
            dates: "12-mar to 14-mar",
            reason: "Fever",
            status: "Approved",
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
                            width: 12,
                            height: 12,
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
        <Box sx={{ width: "100%", p: 3 }}>

            <Box sx={{ mb: 4 }}>
                <ProfileCard data={Data} />
            </Box>
            {/* Statistics Cards */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 4,
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    gap: 2,
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        flex: "1 1 30%",
                        minWidth: "200px",
                        textAlign: "center",
                        border: "1px solid #e0e0e0",
                        borderRadius: 1,
                    }}
                >
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Attendance Rate
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                        89%
                    </Typography>
                </Paper>

                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        flex: "1 1 30%",
                        minWidth: "200px",
                        textAlign: "center",
                        border: "1px solid #e0e0e0",
                        borderRadius: 1,
                    }}
                >
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Total Present
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                        1,248
                    </Typography>
                </Paper>

                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        flex: "1 1 30%",
                        minWidth: "200px",
                        textAlign: "center",
                        border: "1px solid #e0e0e0",
                        borderRadius: 1,
                    }}
                >
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Total absent
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                        87
                    </Typography>
                </Paper>
            </Box>

            {/* Today's Absentees Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Today Absentees
                </Typography>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ "& th": { fontWeight: "bold" } }}>
                                <TableCell>Student Name</TableCell>
                                <TableCell>Class</TableCell>
                                <TableCell>Section</TableCell>
                                <TableCell>History (Last Week)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todayAbsentees.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.class}</TableCell>
                                    <TableCell>{student.section}</TableCell>
                                    <TableCell>{renderAttendanceDots(student.history)}</TableCell>
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
                        bgcolor: "#1976d2",
                        "&:hover": {
                            bgcolor: "#1565c0",
                        },
                        textTransform: "none",
                        borderRadius: 0,
                    }}
                >
                    View more
                </Button>
            </Box>

            {/* Leaves Application Section */}
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Leaves Application
                </Typography>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ "& th": { fontWeight: "bold" } }}>
                                <TableCell>Applicant Name</TableCell>
                                <TableCell>Leave Dates</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Document</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leaveApplications.map((application, index) => (
                                <TableRow key={index}>
                                    <TableCell>{application.name}</TableCell>
                                    <TableCell>{application.dates}</TableCell>
                                    <TableCell>{application.reason}</TableCell>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                color: application.status === "Approved" ? "#4caf50" : "#ff9800",
                                                fontWeight: "medium",
                                            }}
                                        >
                                            {application.status}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: "flex", gap: 1 }}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                sx={{
                                                    bgcolor: "#4caf50",
                                                    "&:hover": { bgcolor: "#388e3c" },
                                                    textTransform: "none",
                                                    minWidth: "60px",
                                                }}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                sx={{
                                                    bgcolor: "#f44336",
                                                    "&:hover": { bgcolor: "#d32f2f" },
                                                    textTransform: "none",
                                                    minWidth: "60px",
                                                }}
                                            >
                                                Reject
                                            </Button>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Button startIcon={<VisibilityIcon />} sx={{ textTransform: "none", color: "text.secondary" }}>
                                            View
                                        </Button>
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

export default CoordinateDashboard