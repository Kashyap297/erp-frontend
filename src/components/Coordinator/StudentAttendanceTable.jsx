import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
    TextField,
    Select,
    MenuItem,
    InputAdornment,
    Box,
    Button,
    IconButton,
    FormControl,
    OutlinedInput,
} from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { format, parseISO } from "date-fns"

const StudentAttendanceTable = () => {
    const { studentId } = useParams()
    const navigate = useNavigate()
    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)
    const [notes, setNotes] = useState(Array(11).fill(""))
    const [statuses, setStatuses] = useState(Array(11).fill("Absent"))
    const [studentInfo, setStudentInfo] = useState(null)

    useEffect(() => {
        // Mock data for student information
        const mockStudentData = {
            "STU2025-001": {
                name: "Rahul Sharma",
                class: "10",
                section: "A",
                admissionNo: "STU2025-001"
            },
            "STU2025-002": {
                name: "Anika Singh",
                class: "10",
                section: "B",
                admissionNo: "STU2025-002"
            },
            "STU2025-003": {
                name: "Arjun Patel",
                class: "11",
                section: "A",
                admissionNo: "STU2025-003"
            },
            "STU2025-004": {
                name: "Priya Kapoor",
                class: "11",
                section: "B",
                admissionNo: "STU2025-004"
            },
            "STU2025-005": {
                name: "Vikram Mehta",
                class: "12",
                section: "A",
                admissionNo: "STU2025-005"
            },
            "STU2025-006": {
                name: "Neha Gupta",
                class: "12",
                section: "C",
                admissionNo: "STU2025-006"
            }
        }

        if (studentId && mockStudentData[studentId]) {
            setStudentInfo(mockStudentData[studentId])
        } else {
            // Redirect if student not found
            navigate("/coordinator/update-attendance")
        }
    }, [studentId, navigate])

    // Handle note change
    const handleNoteChange = (index, value) => {
        const newNotes = [...notes]
        newNotes[index] = value
        setNotes(newNotes)
    }

    const handleStatusChange = (index, value) => {
        const newStatuses = [...statuses]
        newStatuses[index] = value
        setStatuses(newStatuses)
    }

    // Format date for display
    const formatDate = (dateString) => {
        try {
            const date = parseISO(dateString)
            return format(date, "MMM dd, yyyy")
        } catch (error) {
            return dateString
        }
    }

    // Generate mock attendance data
    const generateAttendanceData = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const today = new Date()

        return Array(11).fill().map((_, index) => {
            const date = new Date(today)
            date.setDate(today.getDate() - index)

            return {
                id: index + 1,
                date: format(date, "yyyy-MM-dd"),
                day: days[date.getDay()],
                mode: "Full day",
                status: statuses[index],
                note: notes[index],
            }
        })
    }

    const attendanceRows = generateAttendanceData()

    if (!studentInfo) {
        return (
            <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography>Loading student information...</Typography>
            </Box>
        )
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ maxWidth: "100%", mx: "auto" }}>
                {/* Back button and student info */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <IconButton onClick={() => navigate("/coordinator/update-attendance")} sx={{ mr: 2 }}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="h6">{studentInfo.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {studentInfo.class} - {studentInfo.section} | Admission No: {studentInfo.admissionNo}
                        </Typography>
                    </Box>
                </Box>

                {/* Date Filter Section */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
                    {/* From Date */}
                    <Box sx={{ minWidth: 120, flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            From
                        </Typography>
                        <DatePicker
                            value={fromDate}
                            onChange={(newDate) => setFromDate(newDate)}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    placeholder: "From",
                                    sx: {
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "8px",
                                            backgroundColor: "#e0e0e0",
                                            "& fieldset": {
                                                borderColor: "#ccc",
                                            },
                                        },
                                    },
                                },
                            }}
                            format="dd MMM yyyy"
                        />
                    </Box>

                    {/* To Date */}
                    <Box sx={{ minWidth: 120, flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            To
                        </Typography>
                        <DatePicker
                            value={toDate}
                            onChange={(newDate) => setToDate(newDate)}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    placeholder: "To",
                                    sx: {
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "8px",
                                            backgroundColor: "#e0e0e0",
                                            "& fieldset": {
                                                borderColor: "#ccc",
                                            },
                                        },
                                    },
                                },
                            }}
                            format="dd MMM yyyy"
                        />
                    </Box>

                    {/* Filter Button */}
                    <Box sx={{ minWidth: 100, display: "flex", alignItems: "flex-end" }}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#1976d2",
                                color: "white",
                                height: "56px",
                                borderRadius: "8px",
                                "&:hover": {
                                    backgroundColor: "#1565c0",
                                },
                            }}
                            onClick={() => console.log("Filtering with date range:", { fromDate, toDate })}
                        >
                            Filter
                        </Button>
                    </Box>
                </Box>

                {/* Attendance Table */}
                <TableContainer component={Paper} sx={{ borderRadius: "8px", border: "1px solid #ccc" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="student attendance table">
                        <TableHead sx={{ backgroundColor: "#f9f9f9" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Day</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Mode</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Notes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {attendanceRows.map((row, index) => (
                                <TableRow key={row.id} hover>
                                    <TableCell>{formatDate(row.date)}</TableCell>
                                    <TableCell>{row.day}</TableCell>
                                    <TableCell>{row.mode}</TableCell>
                                    <TableCell>
                                        <FormControl fullWidth size="small">
                                            <Select
                                                value={statuses[index]}
                                                onChange={(e) => handleStatusChange(index, e.target.value)}
                                                displayEmpty
                                                input={
                                                    <OutlinedInput
                                                        sx={{
                                                            borderRadius: "8px",
                                                            "& fieldset": {
                                                                borderColor: "#ccc",
                                                            },
                                                        }}
                                                    />
                                                }
                                                IconComponent={KeyboardArrowDownIcon}
                                                sx={{
                                                    color: statuses[index] === "Absent" ? "#d32f2f" :
                                                        statuses[index] === "Present" ? "#2e7d32" :
                                                            statuses[index] === "Late" ? "#ed6c02" : "#1976d2",
                                                    ".MuiOutlinedInput-notchedOutline": {
                                                        borderColor: statuses[index] === "Absent" ? "#d32f2f" :
                                                            statuses[index] === "Present" ? "#2e7d32" :
                                                                statuses[index] === "Late" ? "#ed6c02" : "#1976d2",
                                                    },
                                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: statuses[index] === "Absent" ? "#d32f2f" :
                                                            statuses[index] === "Present" ? "#2e7d32" :
                                                                statuses[index] === "Late" ? "#ed6c02" : "#1976d2",
                                                    },
                                                }}
                                            >
                                                <MenuItem value="Present" sx={{ color: "#2e7d32" }}>Present</MenuItem>
                                                <MenuItem value="Absent" sx={{ color: "#d32f2f" }}>Absent</MenuItem>
                                                <MenuItem value="Late" sx={{ color: "#ed6c02" }}>Late</MenuItem>
                                                <MenuItem value="Excused" sx={{ color: "#1976d2" }}>Excused</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            placeholder="Add Note"
                                            value={notes[index]}
                                            onChange={(e) => handleNoteChange(index, e.target.value)}
                                            size="small"
                                            fullWidth
                                            sx={{
                                                "& .MuiOutlinedInput-root": {
                                                    borderRadius: "8px",
                                                    "& fieldset": {
                                                        borderColor: "#ccc",
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

                {/* Save Button */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1976d2",
                            color: "white",
                            borderRadius: "8px",
                            px: 4,
                            "&:hover": {
                                backgroundColor: "#1565c0",
                            },
                        }}
                        onClick={() => console.log("Saving attendance:", { statuses, notes })}
                    >
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </LocalizationProvider>
    )
}

export default StudentAttendanceTable