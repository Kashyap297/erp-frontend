
import { Box, Typography, IconButton, Divider, Paper, List, ListItem } from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import DescriptionIcon from "@mui/icons-material/Description"
import { useNavigate } from "react-router-dom"

const LeaveHistory = () => {

    const navigate = useNavigate() // Initialize navigate
    // Mock data for leave history
    const leaveHistory = [
        {
            id: 1,
            fromDate: "19/11/24",
            tillDate: "20/11/24",
            type: "Medical Issue",
            status: "Rejected",
            hasDocument: true,
        },
        {
            id: 2,
            fromDate: "19/11/24",
            tillDate: "20/11/24",
            type: "Medical Issue",
            status: "Rejected",
            hasDocument: true,
        },
        {
            id: 3,
            fromDate: "19/11/24",
            tillDate: "20/11/24",
            type: "Medical Issue",
            status: "Rejected",
            hasDocument: true,
        },
        {
            id: 4,
            fromDate: "19/11/24",
            tillDate: "20/11/24",
            type: "Medical Issue",
            status: "Rejected",
            hasDocument: true,
        },
        {
            id: 5,
            fromDate: "19/11/24",
            tillDate: "20/11/24",
            type: "Medical Issue",
            status: "Rejected",
            hasDocument: true,
        },
        {
            id: 6,
            fromDate: "19/11/24",
            tillDate: "20/11/24",
            type: "Medical Issue",
            status: "Rejected",
            hasDocument: true,
        },
        {
            id: 7,
            fromDate: "19/11/24",
            tillDate: "20/11/24",
            type: "Medical Issue",
            status: "Rejected",
            hasDocument: true,
        },
    ]

    const handleViewDocument = (id) => {
        console.log(`Viewing document for leave request ${id}`)
        // Here you would typically open the document or navigate to a document view
    }

    return (
        <Box sx={{ width: "100%", mt: 4, px: 2 }}>
            <List sx={{ p: 0, width: "100%" }}>
                {leaveHistory.map((leave) => (
                    <ListItem
                        key={leave.id}
                        sx={{
                            p: 0,
                            mb: 2,
                            display: "block",
                            width: "100%",
                        }}
                        onClick={() => navigate(`/teacher/leave/${leave.id}`)} // Add this onClick handler
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                width: "100%",
                                borderRadius: 3,
                                border: "1px solid #e0e0e0",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr 1fr",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                {/* Left side - From and Till dates */}
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography variant="body1" color="#2C9EF4" sx={{ mb: 0.5 }}>
                                        From - {leave.fromDate}
                                    </Typography>
                                    <Typography variant="body1" color="#2C9EF4">
                                        Till - {leave.tillDate}
                                    </Typography>
                                </Box>

                                {/* Center - Leave type and Status */}
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                                        {leave.type}
                                    </Typography>
                                    <Box
                                        sx={{
                                            bgcolor: "#d32f2f",
                                            color: "white",
                                            borderRadius: "16px",
                                            px: 2,
                                            py: 0.5,
                                            fontSize: "0.875rem",
                                            display: "inline-block",
                                        }}
                                    >
                                        {leave.status}
                                    </Box>
                                </Box>

                                {/* Right side - Document link */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#2C9EF4",
                                        cursor: "pointer",
                                        justifyContent: "flex-end",
                                    }}
                                    onClick={() => handleViewDocument(leave.id)}
                                >
                                    <DescriptionIcon sx={{ mr: 0.5, fontSize: "1.2rem" }} />
                                    <Typography variant="body1" color="#2C9EF4">
                                        Document
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default LeaveHistory