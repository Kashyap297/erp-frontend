"use client"

import { useState } from "react"
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    InputAdornment,
    Select,
    MenuItem,
    Paper,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const StudentAttendanceList = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [statusFilter, setStatusFilter] = useState("")

    // Mock data for students
    const students = Array(13).fill({
        id: "2024001",
        name: "Emma Rodriguez",
        grade: "11th - A",
        parentContact: "+91 00000 00000",
        attendance: "91%",
        history: ["present", "present", "present", "absent", "no-record"],
    })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleResetFilter = () => {
        setClassFilter("")
        setStatusFilter("")
    }

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

    return (
        <Box sx={{ width: "100%" }}>
            {/* Search and Filter Row */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                {/* Search Field */}
                <TextField
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                    sx={{
                        flex: 1,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                            height: "40px",
                            bgcolor: "#D9D9D9C2",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Class Filter */}
                <Select
                    value={classFilter}
                    onChange={(e) => setClassFilter(e.target.value)}
                    displayEmpty
                    renderValue={() => "Class"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: 150,
                        height: 40,
                        borderRadius: 1,
                       bgcolor: "#D9D9D9C2",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All Classes</MenuItem>
                    <MenuItem value="11th">11th Grade</MenuItem>
                    <MenuItem value="10th">10th Grade</MenuItem>
                    <MenuItem value="9th">9th Grade</MenuItem>
                </Select>

                {/* Status Filter */}
                <Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    displayEmpty
                    renderValue={() => "Filter"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: 150,
                        height: 40,
                        borderRadius: 1,
                       bgcolor: "#D9D9D9C2",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All Statuses</MenuItem>
                    <MenuItem value="present">Present</MenuItem>
                    <MenuItem value="absent">Absent</MenuItem>
                </Select>

                {/* Reset Filter Button */}
                <Button
                    variant="outlined"
                    onClick={handleResetFilter}
                    sx={{
                        width: 150,
                        height: 40,
                        borderRadius: 1,
                        borderColor: "#e0e0e0",
                        color: "text.primary",
                        bgcolor: "#D9D9D9C2",
                        "&:hover": {
                            bgcolor: "#e0e0e0",
                            borderColor: "#bdbdbd",
                        },
                        textTransform: "none",
                    }}
                >
                    Reset Filter
                </Button>
            </Box>

            {/* Student List Table */}
            <TableContainer
                component={Paper}
                elevation={0}
                sx={{ border: "1px solid #e0e0e0", borderBottom: "2px solid #2C9EF4" }}
            >
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow sx={{ borderBottom: "1px solid #e0e0e0" }}>
                            <TableCell sx={{ fontWeight: "normal", py: 1.5 }}>Student ID</TableCell>
                            <TableCell sx={{ fontWeight: "normal", py: 1.5 }}>Student Name</TableCell>
                            <TableCell sx={{ fontWeight: "normal", py: 1.5 }}>Grade</TableCell>
                            <TableCell sx={{ fontWeight: "normal", py: 1.5 }}>Parent Contact</TableCell>
                            <TableCell sx={{ fontWeight: "normal", py: 1.5 }}>Attendance</TableCell>
                            <TableCell sx={{ fontWeight: "normal", py: 1.5 }}>History (Last Week)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    borderBottom: "1px solid #e0e0e0",
                                    "&:last-child": {
                                        borderBottom: "none",
                                    },
                                }}
                            >
                                <TableCell sx={{ py: 1.5 }}>{student.id}</TableCell>
                                <TableCell sx={{ py: 1.5 }}>{student.name}</TableCell>
                                <TableCell sx={{ py: 1.5 }}>{student.grade}</TableCell>
                                <TableCell sx={{ py: 1.5 }}>{student.parentContact}</TableCell>
                                <TableCell sx={{ py: 1.5 }}>{student.attendance}</TableCell>
                                <TableCell sx={{ py: 1.5 }}>{renderAttendanceDots(student.history)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default StudentAttendanceList