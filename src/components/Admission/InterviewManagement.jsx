"use client"

import { useState } from "react"
import {
    Box,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    InputAdornment,
    MenuItem,
    Select,
    FormControl,
    useMediaQuery,
    useTheme,
    Typography,
    IconButton,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const InterviewManagement = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [subjectFilter, setSubjectFilter] = useState("")
    const [actionFilter, setActionFilter] = useState("")
    const [showFilters, setShowFilters] = useState(false)
    
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

    // Mock data for interviews
    const interviews = [
        { id: 1, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
        { id: 2, name: "Jane Smith", subject: "Science", interviewDate: "2023-06-15" },
        { id: 3, name: "Robert Johnson", subject: "English", interviewDate: "Not assigned" },
        { id: 4, name: "Emily Davis", subject: "History", interviewDate: "2023-06-20" },
        { id: 5, name: "Michael Brown", subject: "Math", interviewDate: "Pending" },
    ]

    const handleSearch = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSubjectFilter = (event) => {
        setSubjectFilter(event.target.value)
    }

    const handleActionFilter = (event) => {
        setActionFilter(event.target.value)
    }

    const resetFilters = () => {
        setSearchQuery("")
        setSubjectFilter("")
        setActionFilter("")
    }

    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    const handleAccept = (id) => {
        console.log(`Accepted interview ${id}`)
        // Implement your accept logic here
    }

    const handleReject = (id) => {
        console.log(`Rejected interview ${id}`)
        // Implement your reject logic here
    }

    // Filter interviews based on search and filters
    const filteredInterviews = interviews.filter(interview => {
        const matchesSearch = interview.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             interview.subject.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesSubject = subjectFilter === "" || interview.subject === subjectFilter
        const matchesAction = actionFilter === "" || 
                             (actionFilter === "Pending" && interview.interviewDate === "Pending") ||
                             (actionFilter === "Accepted" && interview.interviewDate !== "Not assigned" && interview.interviewDate !== "Pending") ||
                             (actionFilter === "Rejected" && interview.interviewDate === "Not assigned")
        
        return matchesSearch && matchesSubject && matchesAction
    })

    return (
        <Box sx={{ 
            p: { xs: 2, sm: 3, md: 4 }, 
            mt: 2, 
            margin: "0 auto",
            maxWidth: '1800px'
        }}>
            {/* Search and Filter Section */}
            <Box sx={{ 
                display: "flex", 
                gap: 2, 
                mb: 3, 
                flexWrap: "wrap",
                alignItems: 'center'
            }}>
                <TextField
                    placeholder="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearch}
                    sx={{
                        bgcolor: "#f5f5f5",
                        borderRadius: '10px',
                        flexGrow: 1,
                        minWidth: { xs: "100%", sm: "250px" },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                {!isSmallScreen ? (
                    <>
                        <FormControl sx={{ minWidth: "150px" }}>
                            <Select
                                displayEmpty
                                value={subjectFilter}
                                onChange={handleSubjectFilter}
                                sx={{ bgcolor: "#f5f5f5", borderRadius: '10px' }}
                                renderValue={(selected) => {
                                    if (selected === "") {
                                        return "Subject"
                                    }
                                    return selected
                                }}
                            >
                                <MenuItem value="">All Subjects</MenuItem>
                                <MenuItem value="Math">Math</MenuItem>
                                <MenuItem value="Science">Science</MenuItem>
                                <MenuItem value="English">English</MenuItem>
                                <MenuItem value="History">History</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ minWidth: "150px" }}>
                            <Select
                                displayEmpty
                                value={actionFilter}
                                onChange={handleActionFilter}
                                sx={{ bgcolor: "#f5f5f5", borderRadius: '10px' }}
                                renderValue={(selected) => {
                                    if (selected === "") {
                                        return "Action"
                                    }
                                    return selected
                                }}
                            >
                                <MenuItem value="">All Actions</MenuItem>
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Accepted">Accepted</MenuItem>
                                <MenuItem value="Rejected">Rejected</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            variant="outlined"
                            onClick={resetFilters}
                            sx={{
                                bgcolor: "#f5f5f5",
                                color: "text.primary",
                                borderColor: "#e0e0e0",
                                borderRadius: '10px',
                                "&:hover": {
                                    bgcolor: "#e0e0e0",
                                    borderColor: "#d0d0d0",
                                },
                            }}
                        >
                            Reset
                        </Button>
                    </>
                ) : (
                    <IconButton
                        onClick={toggleFilters}
                        sx={{
                            bgcolor: "#f5f5f5",
                            borderRadius: '10px',
                            ml: 'auto'
                        }}
                    >
                        {showFilters ? <FilterAltOffIcon /> : <FilterAltIcon />}
                    </IconButton>
                )}
            </Box>

            {/* Mobile Filters */}
            {isSmallScreen && showFilters && (
                <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mb: 3, 
                    flexWrap: 'wrap',
                    bgcolor: '#f9f9f9',
                    p: 2,
                    borderRadius: '10px'
                }}>
                    <FormControl sx={{ minWidth: "120px", flexGrow: 1 }}>
                        <Select
                            displayEmpty
                            value={subjectFilter}
                            onChange={handleSubjectFilter}
                            sx={{ bgcolor: "#f5f5f5", borderRadius: '10px' }}
                            renderValue={(selected) => {
                                if (selected === "") {
                                    return "Subject"
                                }
                                return selected
                            }}
                            size="small"
                        >
                            <MenuItem value="">All Subjects</MenuItem>
                            <MenuItem value="Math">Math</MenuItem>
                            <MenuItem value="Science">Science</MenuItem>
                            <MenuItem value="English">English</MenuItem>
                            <MenuItem value="History">History</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ minWidth: "120px", flexGrow: 1 }}>
                        <Select
                            displayEmpty
                            value={actionFilter}
                            onChange={handleActionFilter}
                            sx={{ bgcolor: "#f5f5f5", borderRadius: '10px' }}
                            renderValue={(selected) => {
                                if (selected === "") {
                                    return "Action"
                                }
                                return selected
                            }}
                            size="small"
                        >
                            <MenuItem value="">All Actions</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Accepted">Accepted</MenuItem>
                            <MenuItem value="Rejected">Rejected</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        variant="outlined"
                        onClick={resetFilters}
                        sx={{
                            bgcolor: "#f5f5f5",
                            color: "text.primary",
                            borderColor: "#e0e0e0",
                            borderRadius: '10px',
                            flexGrow: 1,
                            "&:hover": {
                                bgcolor: "#e0e0e0",
                                borderColor: "#d0d0d0",
                            },
                        }}
                        size="small"
                    >
                        Reset Filters
                    </Button>
                </Box>
            )}

            {/* Interviews Table */}
            {filteredInterviews.length === 0 ? (
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '200px',
                    bgcolor: '#f9f9f9',
                    borderRadius: '10px'
                }}>
                    <Typography variant="h6" color="textSecondary">
                        No interviews found matching your criteria
                    </Typography>
                </Box>
            ) : (
                <TableContainer 
                    component={Paper} 
                    sx={{ 
                        boxShadow: "none", 
                        border: "1px solid #e0e0e0",
                        overflowX: 'auto'
                    }}
                >
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Subject</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Interview Date</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredInterviews.map((interview) => (
                                <TableRow key={interview.id}>
                                    <TableCell>{interview.name}</TableCell>
                                    <TableCell>{interview.subject}</TableCell>
                                    <TableCell>
                                        {interview.interviewDate === "Not assigned" ? (
                                            <Typography color="error">Not assigned</Typography>
                                        ) : interview.interviewDate === "Pending" ? (
                                            <Typography color="warning.main">Pending</Typography>
                                        ) : (
                                            interview.interviewDate
                                        )}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box sx={{ 
                                            display: "flex", 
                                            justifyContent: "flex-end", 
                                            gap: 1,
                                            flexWrap: isSmallScreen ? 'wrap' : 'nowrap'
                                        }}>
                                            <Button
                                                variant="contained"
                                                size={isSmallScreen ? "small" : "medium"}
                                                onClick={() => handleAccept(interview.id)}
                                                sx={{
                                                    bgcolor: "#4caf50",
                                                    "&:hover": {
                                                        bgcolor: "#388e3c",
                                                    },
                                                    minWidth: isSmallScreen ? '100%' : 'auto'
                                                }}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                variant="contained"
                                                size={isSmallScreen ? "small" : "medium"}
                                                onClick={() => handleReject(interview.id)}
                                                sx={{
                                                    bgcolor: "#f44336",
                                                    "&:hover": {
                                                        bgcolor: "#d32f2f",
                                                    },
                                                    minWidth: isSmallScreen ? '100%' : 'auto'
                                                }}
                                            >
                                                Reject
                                            </Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    )
}

export default InterviewManagement