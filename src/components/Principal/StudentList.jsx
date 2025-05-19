"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    Modal,
    Divider,
    IconButton,
    Tab,
    Tabs,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import TuneIcon from "@mui/icons-material/Tune"
import CloseIcon from "@mui/icons-material/Close"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import SchoolIcon from "@mui/icons-material/School"
import HomeIcon from "@mui/icons-material/Home"
import PhoneIcon from "@mui/icons-material/Phone"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"

// Mock data for students with more details
const mockStudents = [
    {
        id: "2024001",
        name: "Emma Rodriguez",
        email: "emma.rodriguez@school.edu",
        grade: "11th - A",
        gpa: "3.5",
        parentContact: "+91 00000 00000",
        address: "123 Main St, Cityville",
        feeStatus: "Paid",
        subjects: [
            { name: "Mathematics", grade: "A+" },
            { name: "Science", grade: "A" },
            { name: "English", grade: "A-" },
            { name: "History", grade: "B+" },
        ],
        overallGrade: "A",
        attendance: "95%"
    },
    {
        id: "2024002",
        name: "John Doe",
        email: "john.doe@school.edu",
        grade: "10th - Science",
        gpa: "3.8",
        parentContact: "+91 95254 54514",
        address: "456 Oak Ave, Townsville",
        feeStatus: "Paid",
        subjects: [
            { name: "Mathematics", grade: "A" },
            { name: "Science", grade: "A+" },
            { name: "English", grade: "B+" },
            { name: "History", grade: "A-" },
        ],
        overallGrade: "A-",
        attendance: "92%"
    },
    // Add more students as needed
]

const StudentList = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [gradeFilter, setGradeFilter] = useState("")
    const [gpaFilter, setGpaFilter] = useState("")
    const [attendanceFilter, setAttendanceFilter] = useState("")
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [activeTab, setActiveTab] = useState(0)

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleViewDetail = (student) => {
        setSelectedStudent(student)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setSelectedStudent(null)
        setActiveTab(0)
    }

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue)
    }

    // Filter students based on search and filters
    const filteredStudents = mockStudents.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.id.includes(searchTerm)
        const matchesGrade = !gradeFilter || student.grade.includes(gradeFilter)
        const matchesGpa = !gpaFilter || parseFloat(student.gpa) >= parseFloat(gpaFilter)

        return matchesSearch && matchesGrade && matchesGpa
    })

    return (
        <Box sx={{ width: "100%"}}>
            {/* Search and Filter Row */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, gap: 2 }}>
                <Paper
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        px: 2,
                        py: 0.5,
                        border: "1px solid #e0e0e0",
                        bgcolor: "#D9D9D9C2",
                        borderRadius: 1,
                        "&:hover": {
                            borderColor: "#bdbdbd",
                        },
                        "&:focus-within": {
                            borderColor: "#1976d2",
                            boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
                        },
                    }}
                >
                    <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                    <TextField
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        variant="standard"
                        fullWidth
                        sx={{
                            "& .MuiInput-root": {
                                "&:before, &:after": {
                                    display: "none",
                                },
                            },
                            "& .MuiInputBase-input": {
                                py: 1.5,
                            },
                           
                        }}
                    />
                </Paper>

                <Button
                    variant="contained"
                    startIcon={<TuneIcon />}
                    sx={{
                        borderRadius: 1,
                        bgcolor: "#D9D9D9C2",
                        color: "text.primary",
                        boxShadow: "none",
                        border: "1px solid #e0e0e0",
                        "&:hover": {
                            bgcolor: "#e0e0e0",
                            boxShadow: "none",
                        },
                        px: 2,
                        textTransform: "none",
                        fontWeight: "normal",
                    }}
                >
                    Filter
                </Button>
            </Box>

            {/* Filter Options Row */}
            <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                {/* Grade Filter */}
                <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Grade
                    </Typography>
                    <FormControl sx={{ minWidth: 180 }}>
                        <Select
                            value={gradeFilter}
                            onChange={(e) => setGradeFilter(e.target.value)}
                            displayEmpty
                            renderValue={(selected) => (selected ? selected : "Select grades")}
                            sx={{
                                bgcolor: "#D9D9D9C2",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#e0e0e0",
                                },
                                "& .MuiSelect-select": {
                                    py: 1.5,
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#bdbdbd",
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    elevation: 2,
                                    sx: { mt: 0.5, borderRadius: 1 },
                                },
                            }}
                        >
                            <MenuItem value="">All Grades</MenuItem>
                            <MenuItem value="11th">11th Grade</MenuItem>
                            <MenuItem value="10th">10th Grade</MenuItem>
                            <MenuItem value="9th">9th Grade</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* GPA Filter */}
                <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Minimum GPA
                    </Typography>
                    <FormControl sx={{ minWidth: 180 }}>
                        <Select
                            value={gpaFilter}
                            onChange={(e) => setGpaFilter(e.target.value)}
                            displayEmpty
                            renderValue={(selected) => (selected ? selected : "Select GPA")}
                            sx={{
                                bgcolor: "#D9D9D9C2",
                                borderRadius: 1,
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#e0e0e0",
                                },
                                "& .MuiSelect-select": {
                                    py: 1.5,
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#bdbdbd",
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    elevation: 2,
                                    sx: { mt: 0.5, borderRadius: 1 },
                                },
                            }}
                        >
                            <MenuItem value="">Any GPA</MenuItem>
                            <MenuItem value="4.0">4.0+</MenuItem>
                            <MenuItem value="3.5">3.5+</MenuItem>
                            <MenuItem value="3.0">3.0+</MenuItem>
                            <MenuItem value="2.5">2.5+</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Attendance Filter */}
                <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Attendance %
                    </Typography>
                    <TextField
                        placeholder="Above%"
                        value={attendanceFilter}
                        onChange={(e) => setAttendanceFilter(e.target.value)}
                        sx={{
                            minWidth: 180,
                            "& .MuiOutlinedInput-root": {
                                bgcolor: "#D9D9D9C2",
                                borderRadius: 1,
                                "& fieldset": {
                                    borderColor: "#e0e0e0",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#bdbdbd",
                                },
                                "& input": {
                                    py: 1.5,
                                },
                            },
                        }}
                    />
                </Box>
            </Box>

            {/* Column Headers */}
            <Box sx={{ mb: 1 }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1.5fr 1fr",
                        gap: 2,
                        px: 2,
                    }}
                >
                    <Typography variant="body2" fontWeight="medium">
                        Student ID
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                        Name
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                        Grade
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                        GPA
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                        Parent Contact
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                        Actions
                    </Typography>
                </Box>
            </Box>

            {/* Student List */}
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
                <Table>
                    <TableBody>
                        {filteredStudents.map((student, index) => (
                            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell sx={{ py: 2 }}>{student.id}</TableCell>
                                <TableCell sx={{ py: 2 }}>{student.name}</TableCell>
                                <TableCell sx={{ py: 2 }}>{student.grade}</TableCell>
                                <TableCell sx={{ py: 2 }}>{student.gpa}</TableCell>
                                <TableCell sx={{ py: 2 }}>{student.parentContact}</TableCell>
                                <TableCell sx={{ py: 2 }}>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleViewDetail(student)}
                                        sx={{
                                            borderRadius: 1,
                                            borderColor: "#e0e0e0",
                                            color: "text.secondary",
                                            bgcolor: "#D9D9D9C2",
                                            textTransform: "none",
                                            "&:hover": {
                                                bgcolor: "#e0e0e0",
                                                borderColor: "#bdbdbd",
                                            },
                                        }}
                                    >
                                        View detail
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Student Details Modal - Redesigned as per the second image */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="student-details-modal"
                aria-describedby="student-details-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 600,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 0,
                    outline: 'none',
                    overflow: 'hidden',
                    border: '1px solid #2C9EF4'
                }}>
                    {selectedStudent && (
                        <>
                            {/* Modal Header */}
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                p: 2,
                                borderBottom: '1px solid #e0e0e0'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PersonIcon sx={{ mr: 1 }} />
                                    <Typography variant="h6">
                                        Student Details
                                    </Typography>
                                </Box>
                                <IconButton onClick={handleCloseModal} size="small">
                                    <CloseIcon />
                                </IconButton>
                            </Box>

                            {/* Modal Content */}
                            <Box sx={{ p: 3 }}>
                                {/* Personal Information Section */}
                                <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                                    Personal Information
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {/* Left Column */}
                                    <Box sx={{ width: '50%', mb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <PersonIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                                            <Typography variant="body1">
                                                {selectedStudent.name}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <EmailIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                                            <Typography variant="body1">
                                                {selectedStudent.email}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <SchoolIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                                            <Typography variant="body1">
                                                {selectedStudent.grade}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                            <HomeIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20, mt: 0.5 }} />
                                            <Typography variant="body1">
                                                Address: {selectedStudent.address}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Right Column */}
                                    <Box sx={{ width: '50%', mb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <PersonIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                                            <Typography variant="body1">
                                                Overall Grade: {selectedStudent.overallGrade}
                                            </Typography>
                                        </Box>

                                        <Typography variant="subtitle1" fontWeight="medium" mt={2} mb={1}>
                                            Personal Information
                                        </Typography>

                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="body1" sx={{ mb: 1 }}>
                                                ~ Mathematics: {selectedStudent.subjects.find(s => s.name === 'Mathematics')?.grade}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mb: 1 }}>
                                                ~ Science: {selectedStudent.subjects.find(s => s.name === 'Science')?.grade}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mb: 1 }}>
                                                ~ English: {selectedStudent.subjects.find(s => s.name === 'English')?.grade}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mb: 1 }}>
                                                ~ History: {selectedStudent.subjects.find(s => s.name === 'History')?.grade}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Phone and Fee Status */}
                                <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <PhoneIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                                        <Typography variant="body1">
                                            Phone no. - {selectedStudent.parentContact}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccountBalanceWalletIcon sx={{ mr: 1, color: selectedStudent.feeStatus === 'Paid' ? 'success.main' : 'error.main', fontSize: 20 }} />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: selectedStudent.feeStatus === 'Paid' ? 'success.main' : 'error.main',
                                            }}
                                        >
                                            Fee Status - {selectedStudent.feeStatus}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Tabs */}
                                <Box sx={{ borderTop: '1px solid #e0e0e0', mt: 2, pt: 2 }}>
                                    <Tabs
                                        value={activeTab}
                                        onChange={handleTabChange}
                                        sx={{
                                            '& .MuiTab-root': {
                                                textTransform: 'none',
                                                minWidth: 100,
                                            },
                                            '& .Mui-selected': {
                                                color: '#2C9EF4',
                                            },
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: '#2C9EF4',
                                            },
                                        }}
                                    >
                                        <Tab label="Result" />
                                        <Tab label="Attendance" />
                                    </Tabs>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    )
}

export default StudentList