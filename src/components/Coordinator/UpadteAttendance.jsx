import { useState, useMemo } from "react"
import {
    Box,
    TextField,
    Select,
    MenuItem,
    Paper,
    Typography,
    IconButton,
    FormControl,
    OutlinedInput,
    Button,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import FilterListIcon from "@mui/icons-material/FilterList"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { parseISO, isWithinInterval, startOfDay, endOfDay } from "date-fns"
import { useNavigate } from "react-router-dom"

const UpadteAttendance = () => {
    const [selectedTeacher, setSelectedTeacher] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [selectedSection, setSelectedSection] = useState("")
    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)
    const navigate = useNavigate()

    // Mock data for student records with actual dates
    const allStudentRecords = [
        {
            admissionNo: "STU2025-001",
            name: "Rahul Sharma",
            class: "10",
            section: "A",
            date: "2025-03-15", // ISO format date string
        },
        {
            admissionNo: "STU2025-002",
            name: "Anika Singh",
            class: "10",
            section: "B",
            date: "2025-03-16",
        },
        {
            admissionNo: "STU2025-003",
            name: "Arjun Patel",
            class: "11",
            section: "A",
            date: "2025-03-17",
        },
        {
            admissionNo: "STU2025-004",
            name: "Priya Kapoor",
            class: "11",
            section: "B",
            date: "2025-03-18",
        },
        {
            admissionNo: "STU2025-005",
            name: "Vikram Mehta",
            class: "12",
            section: "A",
            date: "2025-03-19",
        },
        {
            admissionNo: "STU2025-006",
            name: "Neha Gupta",
            class: "12",
            section: "C",
            date: "2025-03-20",
        },
    ]

    // Filter student records based on selected criteria
    const filteredStudentRecords = useMemo(() => {
        return allStudentRecords.filter((record) => {
            // Filter by teacher if selected
            if (selectedTeacher && !record.teacher?.includes(selectedTeacher)) {
                return false
            }

            // Filter by class if selected
            if (selectedClass && record.class !== selectedClass) {
                return false
            }

            // Filter by section if selected
            if (selectedSection && record.section !== selectedSection) {
                return false
            }

            // Filter by date range if both dates are selected
            if (fromDate && toDate) {
                const recordDate = parseISO(record.date)
                return isWithinInterval(recordDate, {
                    start: startOfDay(fromDate),
                    end: endOfDay(toDate),
                })
            }

            // If only fromDate is selected
            if (fromDate && !toDate) {
                const recordDate = parseISO(record.date)
                return recordDate >= startOfDay(fromDate)
            }

            // If only toDate is selected
            if (!fromDate && toDate) {
                const recordDate = parseISO(record.date)
                return recordDate <= endOfDay(toDate)
            }

            return true
        })
    }, [allStudentRecords, selectedTeacher, selectedClass, selectedSection, fromDate, toDate])

    // Format date for display
    const formatDate = (dateString) => {
        try {
            const date = parseISO(dateString)
            return new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
            }).format(date)
        } catch (error) {
            return dateString
        }
    }

    const handleRecordClick = (studentId) => {
        // Navigate to the attendance table view with the student ID
        navigate(`/coordinator/update-attendance/update/${studentId}`)
    }

    return (
        <Box sx={{ maxWidth: "100%", mx: "auto" }}>
            {/* Filter Section */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
                    {/* Select Teacher */}
                    <Box sx={{ minWidth: 200, flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Select Teacher
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Select Teacher"
                            value={selectedTeacher}
                            onChange={(e) => setSelectedTeacher(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    backgroundColor: "#e0e0e0",
                                    "& fieldset": {
                                        borderColor: "#ccc",
                                    },
                                },
                            }}
                        />
                    </Box>

                    {/* Class Dropdown */}
                    <Box sx={{ minWidth: 120, flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Class
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                                displayEmpty
                                input={
                                    <OutlinedInput
                                        sx={{
                                            borderRadius: "8px",
                                            backgroundColor: "#e0e0e0",
                                            "& fieldset": {
                                                borderColor: "#ccc",
                                            },
                                        }}
                                    />
                                }
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return "Class"
                                    }
                                    return selected
                                }}
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="11">11</MenuItem>
                                <MenuItem value="12">12</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Section Dropdown */}
                    <Box sx={{ minWidth: 120, flex: 1 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Sec
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                value={selectedSection}
                                onChange={(e) => setSelectedSection(e.target.value)}
                                displayEmpty
                                input={
                                    <OutlinedInput
                                        sx={{
                                            borderRadius: "8px",
                                            backgroundColor: "#e0e0e0",
                                            "& fieldset": {
                                                borderColor: "#ccc",
                                            },
                                        }}
                                    />
                                }
                                renderValue={(selected) => {
                                    if (!selected) {
                                        return "Sec"
                                    }
                                    return selected
                                }}
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="C">C</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

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
                            startIcon={<FilterListIcon />}
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
            </LocalizationProvider>

            {/* Student Records */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {filteredStudentRecords.length === 0 ? (
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="body1" color="text.secondary">
                            No student records found matching the selected criteria.
                        </Typography>
                    </Paper>
                ) : (
                    filteredStudentRecords.map((record, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                            }}
                            onClick={() => handleRecordClick(record.admissionNo)}
                        >
                            <Box sx={{ display: "flex", width: "100%" }}>
                                {/* Admission No. */}
                                <Box sx={{ width: "20%", pr: 2 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: "0.75rem" }}>
                                        Admission no.
                                    </Typography>
                                    <Typography variant="body1">{record.admissionNo}</Typography>
                                </Box>

                                {/* Name */}
                                <Box sx={{ width: "20%", pr: 2 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: "0.75rem" }}>
                                        Name
                                    </Typography>
                                    <Typography variant="body1">{record.name}</Typography>
                                </Box>

                                {/* Class */}
                                <Box sx={{ width: "15%", pr: 2 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: "0.75rem" }}>
                                        Class
                                    </Typography>
                                    <Typography variant="body1">{record.class}</Typography>
                                </Box>

                                {/* Section */}
                                <Box sx={{ width: "15%", pr: 2 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: "0.75rem" }}>
                                        Sec
                                    </Typography>
                                    <Typography variant="body1">{record.section}</Typography>
                                </Box>

                                {/* Date */}
                                <Box sx={{ width: "20%", pr: 2 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: "0.75rem" }}>
                                        Date
                                    </Typography>
                                    <Typography variant="body1">{formatDate(record.date)}</Typography>
                                </Box>
                            </Box>

                            {/* Chevron Icon */}
                            <IconButton edge="end" aria-label="view details">
                                <ChevronRightIcon />
                            </IconButton>
                        </Paper>
                    ))
                )}
            </Box>
        </Box>
    )
}

export default UpadteAttendance