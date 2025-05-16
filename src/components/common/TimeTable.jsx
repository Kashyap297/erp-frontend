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

const TimeTable = () => {
    // Mock data for the timetable
    const timeSlots = [
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 1:00",
        "1:00 - 2:00",
        "2:00 - 3:00",
        "3:00 - 4:00",
    ]

    const classes = [
        {
            time: "8:00 - 9:00",
            subject: "Mathematics",
            class: "9A",
            room: "203",
            type: "Lecture",
            isHighlighted: true,
        },
        {
            time: "9:00 - 10:00",
            subject: "Mathematics",
            class: "9A",
            room: "203",
            type: "Lecture",
        },
        {
            time: "10:00 - 11:00",
            subject: "Mathematics",
            class: "9A",
            room: "203",
            type: "Lecture",
        },
        {
            time: "11:00 - 12:00",
            subject: "Mathematics",
            class: "9A",
            room: "203",
            type: "Lecture",
        },
        {
            time: "12:00 - 1:00",
            subject: "Mathematics",
            class: "9A",
            room: "203",
            type: "Lecture",
        },
        {
            time: "1:00 - 2:00",
            subject: "Lunch",
            class: "",
            room: "",
            type: "",
            isLunch: true,
        },
        {
            time: "2:00 - 3:00",
            subject: "Mathematics",
            class: "9A",
            room: "203",
            type: "Lecture",
        },
        {
            time: "3:00 - 4:00",
            subject: "Mathematics",
            class: "9A",
            room: "203",
            type: "Lecture",
        },
    ]

    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                Time Table
            </Typography>
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: 2,
                    overflow: "auto", // Changed from "hidden" to "auto" to enable scrolling
                    maxWidth: "100%",
                }}
            >
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow>
                            {timeSlots.map((slot, index) => (
                                <TableCell
                                    key={index}
                                    align="center"
                                    sx={{
                                        fontWeight: "medium",
                                        p: 1.5,
                                        borderRight: index < timeSlots.length - 1 ? "1px solid rgba(224, 224, 224, 1)" : "none",
                                    }}
                                >
                                    {slot}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {classes.map((classItem, index) => (
                                <TableCell
                                    key={index}
                                    align="center"
                                    sx={{

                                        backgroundColor: classItem.isHighlighted ? "#1976d2" : classItem.isLunch ? "#bbdefb" : "inherit",
                                        color: classItem.isHighlighted ? "white" : "inherit",
                                        borderRight: index < classes.length - 1 ? "1px solid rgba(224, 224, 224, 1)" : "none",
                                        minWidth: 80,
                                    }}
                                >
                                    {classItem.isLunch ? (
                                        <Box sx={{ py: 3 }}>
                                            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                                                Lunch
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 1 }}>
                                            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                                {classItem.subject}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                                                Class: {classItem.class}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                                                Room: {classItem.room}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                sx={{
                                                    mt: 1,
                                                    textTransform: "none",
                                                    backgroundColor: classItem.isHighlighted ? "white" : "#1976d2",
                                                    color: classItem.isHighlighted ? "#1976d2" : "white",
                                                    "&:hover": {
                                                        backgroundColor: classItem.isHighlighted ? "#f5f5f5" : "#1565c0",
                                                    },
                                                }}
                                            >
                                                {classItem.type}
                                            </Button>
                                        </Box>
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TimeTable