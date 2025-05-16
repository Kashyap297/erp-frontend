"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Paper,
} from "@mui/material"

const ResultUpload = () => {
    // Mock data for students
    const initialStudents = [
        { id: "CS22045", name: "Alex Thompson", internal: "", external: "" },
        { id: "CS22046", name: "Emma Rodriguez", internal: "", external: "" },
        { id: "CS22047", name: "Michael Chen", internal: "", external: "" },
        { id: "CS22048", name: "Sophia Patel", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    ]

    const [students, setStudents] = useState(initialStudents)

    // Handle input change
    const handleInputChange = (index, field, value) => {
        const updatedStudents = [...students]
        updatedStudents[index][field] = value
        setStudents(updatedStudents)
    }

    // Handle form submission
    const handleSubmit = () => {
        console.log("Submitted data:", students)
        // Here you would typically send the data to your backend
        alert("Results submitted successfully!")
    }

    return (
        <Box sx={{ width: "100%", mt: 4, px: 2 }}>
            <Typography variant="h5" component="h1" fontWeight="regular" sx={{ mb: 4 }}>
                Upload result
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ mb: 3 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "medium", width: "15%" }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: "medium", width: "35%" }}>Student Name</TableCell>
                            <TableCell sx={{ fontWeight: "medium", width: "25%" }}>Internal</TableCell>
                            <TableCell sx={{ fontWeight: "medium", width: "25%" }}>External</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, index) => (
                            <TableRow key={index}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        value={student.internal}
                                        onChange={(e) => handleInputChange(index, "internal", e.target.value)}
                                        InputProps={{
                                            sx: {
                                                bgcolor: "#e0e0e0",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    border: "none",
                                                },
                                            },
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        value={student.external}
                                        onChange={(e) => handleInputChange(index, "external", e.target.value)}
                                        InputProps={{
                                            sx: {
                                                bgcolor: "#e0e0e0",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    border: "none",
                                                },
                                            },
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        bgcolor: "#2196f3",
                        color: "white",
                        "&:hover": {
                            bgcolor: "#1976d2",
                        },
                        borderRadius: 1,
                        px: 4,
                        py: 1,
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default ResultUpload