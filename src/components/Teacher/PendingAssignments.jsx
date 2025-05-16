import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const PendingAssignments = () => {
    // Mock data
    const assignments = [
        {
            id: 1,
            name: "sa dsfjhi ......",
            class: "10/B",
            dueDate: "19-2-2025",
        },
        {
            id: 2,
            name: "sa dsfjhi ......",
            class: "10/B",
            dueDate: "19-2-2025",
        },
        {
            id: 3,
            name: "sa dsfjhi ......",
            class: "10/B",
            dueDate: "19-2-2025",
        },
        {
            id: 4,
            name: "sa dsfjhi ......",
            class: "10/B",
            dueDate: "19-2-2025",
        },
    ]

    return (
        <Box>
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    backgroundColor: "#1399FF",
                    color: "white",
                }}
            >
                <Typography variant="h6" component="div" sx={{ mb: 3 }}>
                    Pending Assignment
                </Typography>
                <TableContainer component={Box} sx={{ backgroundColor: "transparent" }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "white", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", p: 1 }}>
                                    Assignment
                                </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", p: 1 }}>
                                    Class/Sec
                                </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", p: 1 }}>
                                    Due date
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {assignments.map((assignment) => (
                                <TableRow key={assignment.id}>
                                    <TableCell sx={{ color: "white", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", p: 1 }}>
                                        {assignment.name}
                                    </TableCell>
                                    <TableCell sx={{ color: "white", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", p: 1 }}>
                                        {assignment.class}
                                    </TableCell>
                                    <TableCell sx={{ color: "white", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", p: 1 }}>
                                        {assignment.dueDate}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default PendingAssignments