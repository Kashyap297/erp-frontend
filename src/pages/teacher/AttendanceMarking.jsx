"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material"

const AttendanceMarking = () => {
    // Mock data for students
    const initialStudents = [
        {
            id: 1,
            rollNo: "01",
            name: "Alice Miller",
            isPresent: null,
            history: ["present", "present", "present", "absent", "no-record"],
        },
        {
            id: 2,
            rollNo: "02",
            name: "Alice Miller",
            isPresent: null,
            history: ["present", "present", "absent", "present", "no-record"],
        },
        {
            id: 3,
            rollNo: "03",
            name: "Alice Miller",
            isPresent: null,
            history: ["present", "present", "present", "absent", "no-record"],
        },
        {
            id: 4,
            rollNo: "04",
            name: "Alice Miller",
            isPresent: null,
            history: ["present", "absent", "present", "present", "no-record"],
        },
        {
            id: 5,
            rollNo: "05",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 6,
            rollNo: "06",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 7,
            rollNo: "07",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 8,
            rollNo: "08",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 9,
            rollNo: "09",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 10,
            rollNo: "10",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 11,
            rollNo: "11",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 12,
            rollNo: "12",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 13,
            rollNo: "13",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 14,
            rollNo: "14",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 15,
            rollNo: "15",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 16,
            rollNo: "16",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 17,
            rollNo: "17",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
        {
            id: 18,
            rollNo: "18",
            name: "Alice Miller",
            isPresent: null,
            history: ["absent", "present", "present", "absent", "no-record"],
        },
    ]

    const [students, setStudents] = useState(initialStudents)

    // Mark student as present or absent
    const markAttendance = (id, status) => {
        setStudents(
            students.map((student) => {
                if (student.id === id) {
                    return { ...student, isPresent: status }
                }
                return student
            }),
        )
    }

    // Mark all students as present
    const markAllPresent = () => {
        setStudents(
            students.map((student) => {
                return { ...student, isPresent: true }
            }),
        )
    }

    // Submit attendance
    const submitAttendance = () => {
        console.log("Submitting attendance:", students)
        // Here you would typically send the data to your backend
        alert("Attendance submitted successfully!")
    }

    return (
        <Box sx={{ width: "100%", mt: 0, px: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h5" component="h1" fontWeight="medium">
                    Today's Attendance: Class 8A
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={markAllPresent}
                        sx={{ textTransform: "none", borderRadius: 1 }}
                    >
                        Mark all present
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={submitAttendance}
                        sx={{ textTransform: "none", borderRadius: 1 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold", width: "10%" }}>Roll No.</TableCell>
                            <TableCell sx={{ fontWeight: "bold", width: "25%" }}>Student Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold", width: "35%" }}>Attendance</TableCell>
                            <TableCell sx={{ fontWeight: "bold", width: "30%" }}>History (Last Week)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell>{student.rollNo}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <Button
                                            variant={student.isPresent === true ? "contained" : "outlined"}
                                            color="success"
                                            size="small"
                                            onClick={() => markAttendance(student.id, true)}
                                            sx={{
                                                borderRadius: 4,
                                                textTransform: "none",
                                                minWidth: 100,
                                                bgcolor: student.isPresent === true ? "#4caf50" : "transparent",
                                                color: student.isPresent === true ? "white" : "#4caf50",
                                                borderColor: "#4caf50",
                                            }}
                                        >
                                            Present
                                        </Button>
                                        <Button
                                            variant={student.isPresent === false ? "contained" : "outlined"}
                                            color="error"
                                            size="small"
                                            onClick={() => markAttendance(student.id, false)}
                                            sx={{
                                                borderRadius: 4,
                                                textTransform: "none",
                                                minWidth: 100,
                                                bgcolor: student.isPresent === false ? "#f44336" : "transparent",
                                                color: student.isPresent === false ? "white" : "#f44336",
                                                borderColor: "#f44336",
                                            }}
                                        >
                                            Absent
                                        </Button>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        {student.history.map((status, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: "50%",
                                                    bgcolor: status === "present" ? "#4caf50" : status === "absent" ? "#f44336" : "#bdbdbd",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default AttendanceMarking