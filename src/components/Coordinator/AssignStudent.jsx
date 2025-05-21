import { useState } from "react"
import {
    Box,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Select,
    MenuItem,
    InputAdornment,
    useMediaQuery,
    useTheme,
    TablePagination,
    FormControl,
    InputLabel,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const AssignStudent = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [searchTerm, setSearchTerm] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [recentClass, setRecentClass] = useState("")
    const [selectedStudents, setSelectedStudents] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [students, setStudents] = useState(
        Array(10).fill().map((_, index) => ({
            id: `1255215${index}`,
            name: `Student ${index + 1}`,
            batch: "6th",
            admissionDate: "25-10-2024",
            status: "Unassigned",
            class: "6 th",
            section: "B",
        }))
    )

    // Handle select all checkbox
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            const newSelected = students
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((student) => student.id);
            setSelectedStudents(newSelected);
        } else {
            setSelectedStudents([])
        }
    }

    // Handle individual student selection
    const handleSelectStudent = (event, studentId) => {
        const selectedIndex = selectedStudents.indexOf(studentId);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selectedStudents, studentId];
        } else {
            newSelected = selectedStudents.filter(id => id !== studentId);
        }

        setSelectedStudents(newSelected);
    }

    // Handle class change for a student
    const handleClassChange = (studentId, newClass) => {
        setStudents(students.map(student =>
            student.id === studentId ? { ...student, class: newClass } : student
        ))
    }

    // Handle section change for a student
    const handleSectionChange = (studentId, newSection) => {
        setStudents(students.map(student =>
            student.id === studentId ? { ...student, section: newSection } : student
        ))
    }

    // Handle schedule button click
    const handleScheduleClick = () => {
        if (selectedStudents.length === 0) {
            alert("Please select at least one student");
            return;
        }

        // Update status of selected students
        setStudents(students.map(student =>
            selectedStudents.includes(student.id)
                ? { ...student, status: "Assigned" }
                : student
        ))

        setSelectedStudents([]);
    }

    // Handle pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Filter students based on search term and selected filters
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.id.includes(searchTerm);
        const matchesClass = !selectedClass || student.class.includes(selectedClass);
        const matchesRecent = !recentClass || student.class.includes(recentClass);

        return matchesSearch && matchesClass && matchesRecent;
    });

    // Calculate the current page students
    const currentPageStudents = filteredStudents.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    // Check if all students on current page are selected
    const isAllSelected = currentPageStudents.length > 0 &&
        currentPageStudents.every(student => selectedStudents.includes(student.id));

    return (
        <Box sx={{ p: isSmallScreen ? 1 : 3 }}>
            {/* Statistics Cards */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 4,
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                {[
                    { label: "New admission", value: 87 },
                    { label: "Total unassigned student", value: filteredStudents.filter(s => s.status === "Unassigned").length },
                    { label: "Recently assigned", value: filteredStudents.filter(s => s.status === "Assigned").length },
                ].map((stat, index) => (
                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            p: 2,
                            textAlign: "center",
                            borderRadius: 1,
                            border: "1px solid #e0e0e0",
                            flex: "1 1 30%",
                            minWidth: isSmallScreen ? "100%" : "200px",
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            {stat.label}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
                            {stat.value}
                        </Typography>
                    </Paper>
                ))}
            </Box>

            {/* Search Bar */}
            <TextField
                fullWidth
                placeholder="Search by name or ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                        bgcolor: "#f5f5f5",
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

            {/* Filter and Action Row */}
            <Box sx={{
                display: "flex",
                gap: 2,
                mb: 3,
                flexWrap: "wrap",
                flexDirection: isSmallScreen ? 'column' : 'row'
            }}>
                <FormControl sx={{ minWidth: isSmallScreen ? '100%' : 200, flexGrow: 1 }}>
                    <InputLabel>Select class</InputLabel>
                    <Select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        label="Select class"
                        sx={{
                            borderRadius: "10px",
                            bgcolor: "#f5f5f5",
                            height: "50px",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#e0e0e0",
                            },
                        }}
                    >
                        <MenuItem value="">All Classes</MenuItem>
                        <MenuItem value="6">6th</MenuItem>
                        <MenuItem value="7">7th</MenuItem>
                        <MenuItem value="8">8th</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: isSmallScreen ? '100%' : 200, flexGrow: 1 }}>
                    <InputLabel>Recent class</InputLabel>
                    <Select
                        value={recentClass}
                        onChange={(e) => setRecentClass(e.target.value)}
                        label="Recent class"
                        sx={{
                            borderRadius: "10px",
                            bgcolor: "#f5f5f5",
                            height: "50px",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#e0e0e0",
                            },
                        }}
                    >
                        <MenuItem value="">All Recent</MenuItem>
                        <MenuItem value="6">6th</MenuItem>
                        <MenuItem value="7">7th</MenuItem>
                        <MenuItem value="8">8th</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    ml: isSmallScreen ? 0 : "auto",
                    width: isSmallScreen ? '100%' : 'auto'
                }}>
                    <Button
                        variant="contained"
                        onClick={handleScheduleClick}
                        disabled={selectedStudents.length === 0}
                        fullWidth={isSmallScreen}
                        sx={{
                            bgcolor: "#2196f3",
                            color: "white",
                            height: "50px",
                            borderRadius: "10px",
                            textTransform: "none",
                            px: 3,
                            "&:hover": {
                                bgcolor: "#1976d2",
                            },
                            "&:disabled": {
                                bgcolor: "#e0e0e0",
                                color: "#a0a0a0"
                            }
                        }}
                    >
                        Schedule student ({selectedStudents.length})
                    </Button>
                </Box>
            </Box>

            {/* Students Table */}
            <TableContainer
                component={Paper}
                elevation={0}
                sx={{
                    border: "1px solid #e0e0e0",
                    overflowX: 'auto'
                }}
            >
                <Table sx={{ minWidth: isSmallScreen ? 600 : '100%' }}>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#f9f9f9" }}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={
                                        selectedStudents.length > 0 &&
                                        selectedStudents.length < currentPageStudents.length
                                    }
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                />
                            </TableCell>
                            {!isSmallScreen && <TableCell>Student ID</TableCell>}
                            <TableCell>Name</TableCell>
                            {!isSmallScreen && <TableCell>Batch</TableCell>}
                            {!isSmallScreen && <TableCell>Admission date</TableCell>}
                            <TableCell>Status</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Section</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentPageStudents.length > 0 ? (
                            currentPageStudents.map((student) => (
                                <TableRow key={student.id} hover>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedStudents.includes(student.id)}
                                            onChange={(event) => handleSelectStudent(event, student.id)}
                                        />
                                    </TableCell>
                                    {!isSmallScreen && <TableCell>{student.id}</TableCell>}
                                    <TableCell>{student.name}</TableCell>
                                    {!isSmallScreen && <TableCell>{student.batch}</TableCell>}
                                    {!isSmallScreen && <TableCell>{student.admissionDate}</TableCell>}
                                    <TableCell>
                                        <Box
                                            sx={{
                                                color: student.status === "Assigned" ? "green" : "orange",
                                                fontWeight: 500
                                            }}
                                        >
                                            {student.status}
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Select
                                            value={student.class}
                                            size="small"
                                            onChange={(e) => handleClassChange(student.id, e.target.value)}
                                            sx={{
                                                minWidth: 80,
                                                height: "32px",
                                                bgcolor: "#f5f5f5",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#e0e0e0",
                                                },
                                            }}
                                        >
                                            <MenuItem value="6 th">6th</MenuItem>
                                            <MenuItem value="7 th">7th</MenuItem>
                                            <MenuItem value="8 th">8th</MenuItem>
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <Select
                                            value={student.section}
                                            size="small"
                                            onChange={(e) => handleSectionChange(student.id, e.target.value)}
                                            sx={{
                                                minWidth: 60,
                                                height: "32px",
                                                bgcolor: "#f5f5f5",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#e0e0e0",
                                                },
                                            }}
                                        >
                                            <MenuItem value="A">A</MenuItem>
                                            <MenuItem value="B">B</MenuItem>
                                            <MenuItem value="C">C</MenuItem>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7} sx={{ textAlign: 'center', py: 4 }}>
                                    <Typography variant="body1" color="text.secondary">
                                        No students found
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredStudents.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Box>
    )
}

export default AssignStudent