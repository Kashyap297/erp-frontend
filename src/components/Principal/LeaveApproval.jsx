"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    IconButton,
    Divider,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogContent,
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import CloseIcon from "@mui/icons-material/Close"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import EventIcon from "@mui/icons-material/Event"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CircleIcon from "@mui/icons-material/Circle"
import DescriptionIcon from "@mui/icons-material/Description"
import AssignmentIcon from "@mui/icons-material/Assignment"

// Mock data for leave requests
const leaveRequests = [
    {
        id: 1,
        name: "Emma Rodriguez",
        employee: "Emma Rodriguez",
        category: "Teacher",
        leaveType: "Casual",
        duration: "Full day",
        startDate: "2024-04-15",
        endDate: "2024-04-20",
        fromDate: "2024-04-15",
        toDate: "2024-04-20",
        status: "Pending",
        description: "I need to take some time off for personal reasons.",
        document: "Medical_Certificate.pdf"
    },
    {
        id: 2,
        name: "John Smith",
        employee: "John Smith",
        category: "Teacher",
        leaveType: "Sick",
        duration: "Full day",
        startDate: "2024-04-22",
        endDate: "2024-04-25",
        fromDate: "2024-04-22",
        toDate: "2024-04-25",
        status: "Approved",
        description: "I'm not feeling well and need to rest.",
        document: "Medical_Report.pdf"
    },
    {
        id: 3,
        name: "Sarah Johnson",
        employee: "Sarah Johnson",
        category: "Staff",
        leaveType: "Vacation",
        duration: "Full day",
        startDate: "2024-05-10",
        endDate: "2024-05-15",
        fromDate: "2024-05-10",
        toDate: "2024-05-15",
        status: "Rejected",
        description: "Family vacation planned months ago.",
        document: "Vacation_Plan.pdf"
    },
]

const LeaveApproval = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("")
    const [statusFilter, setStatusFilter] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [selectedLeave, setSelectedLeave] = useState(null)

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value)
    }

    const resetFilters = () => {
        setSearchTerm("")
        setCategoryFilter("")
        setStatusFilter("")
    }

    const handleViewDetail = (leaveRequest) => {
        setSelectedLeave(leaveRequest)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setSelectedLeave(null)
    }

    const handleAccept = (id) => {
        console.log(`Accepting leave request ${id}`)
        // Here you would typically update the status in your backend
        handleCloseModal()
    }

    const handleReject = (id) => {
        console.log(`Rejecting leave request ${id}`)
        // Here you would typically update the status in your backend
        handleCloseModal()
    }

    // Function to get status color
    const getStatusColor = (status) => {
        switch (status) {
            case "Approved":
                return "#2DB500" // Green
            case "Rejected":
                return "#EB2E2E" // Red
            case "Pending":
                return "#ff9800" // Orange/Yellow
            default:
                return "#757575" // Grey
        }
    }

    // Filter leave requests based on search and filters
    const filteredLeaveRequests = leaveRequests.filter(request => {
        const matchesSearch = request.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = !categoryFilter || request.category === categoryFilter
        const matchesStatus = !statusFilter || request.status === statusFilter

        return matchesSearch && matchesCategory && matchesStatus
    })

    return (
        <Box sx={{ width: "100%", mt: 2 }}>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
                <TextField
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                    sx={{
                        flex: { xs: "1 1 100%", sm: "1 1 auto" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                            bgcolor: "#f5f5f5",
                            "& fieldset": {
                                borderColor: "#e0e0e0",
                            },
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

                <Select
                    value={categoryFilter}
                    onChange={handleCategoryChange}
                    displayEmpty
                    renderValue={() => categoryFilter || "Categories"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: { xs: "100%", sm: 200 },
                        borderRadius: 2,
                        bgcolor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="Teacher">Teacher</MenuItem>
                    <MenuItem value="Staff">Staff</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                </Select>

                <Select
                    value={statusFilter}
                    onChange={handleStatusChange}
                    displayEmpty
                    renderValue={() => statusFilter || "Status"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: { xs: "100%", sm: 150 },
                        borderRadius: 2,
                        bgcolor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All Statuses</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>

                <Button
                    variant="outlined"
                    onClick={resetFilters}
                    sx={{
                        width: { xs: "100%", sm: "auto" },
                        borderRadius: 2,
                        borderColor: "#e0e0e0",
                        color: "text.primary",
                        bgcolor: "#f5f5f5",
                        "&:hover": {
                            bgcolor: "#e0e0e0",
                            borderColor: "#bdbdbd",
                        },
                    }}
                >
                    Reset Filter
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Leave Type</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Dates</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredLeaveRequests.map((request) => (
                            <TableRow key={request.id}>
                                <TableCell>{request.name}</TableCell>
                                <TableCell>{request.category}</TableCell>
                                <TableCell>{request.leaveType}</TableCell>
                                <TableCell>{`${request.startDate} to ${request.endDate}`}</TableCell>
                                <TableCell>
                                    <Typography sx={{ color: getStatusColor(request.status) }}>{request.status}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleViewDetail(request)}
                                        sx={{
                                            borderRadius: 1,
                                            borderColor: "#e0e0e0",
                                            color: "text.secondary",
                                            bgcolor: "#f5f5f5",
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

            {/* Leave Request Details Modal */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }
                }}
            >
                {selectedLeave && (
                    <>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #eee' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AssignmentIcon sx={{ mr: 1 }} />
                                <Typography variant="h6">Leave Request Details</Typography>
                            </Box>
                            <IconButton onClick={handleCloseModal} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <DialogContent sx={{ p: 3 }}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                                {/* Employee Info */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PersonOutlineIcon sx={{ mr: 1, color: '#555' }} />
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">Employee:</Typography>
                                        <Typography variant="body1">{selectedLeave.employee}</Typography>
                                    </Box>
                                </Box>

                                {/* From Date */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EventIcon sx={{ mr: 1, color: '#555' }} />
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">From:</Typography>
                                        <Typography variant="body1">{selectedLeave.fromDate}</Typography>
                                    </Box>
                                </Box>

                                {/* Leave Type */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PersonOutlineIcon sx={{ mr: 1, color: '#555' }} />
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">Leave type:</Typography>
                                        <Typography variant="body1">{selectedLeave.leaveType}</Typography>
                                    </Box>
                                </Box>

                                {/* To Date */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EventIcon sx={{ mr: 1, color: '#555' }} />
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">To:</Typography>
                                        <Typography variant="body1">{selectedLeave.toDate}</Typography>
                                    </Box>
                                </Box>

                                {/* Duration */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AccessTimeIcon sx={{ mr: 1, color: '#555' }} />
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">Duration:</Typography>
                                        <Typography variant="body1">{selectedLeave.duration}</Typography>
                                    </Box>
                                </Box>

                                {/* Status */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CircleIcon sx={{ mr: 1, color: getStatusColor(selectedLeave.status), fontSize: 20 }} />
                                    <Box>
                                        <Typography variant="body2" color="textSecondary">Status:</Typography>
                                        <Typography variant="body1" sx={{ color: getStatusColor(selectedLeave.status) }}>
                                            {selectedLeave.status}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Description */}
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="body1" sx={{ mb: 1 }}>Description</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    disabled
                                    value={selectedLeave.description}
                                    sx={{
                                        backgroundColor: '#f5f5f5',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#e0e0e0',
                                            },
                                        },
                                    }}
                                />
                            </Box>

                            {/* Document Link */}
                            <Box sx={{ mt: 2 }}>
                                <Button
                                    startIcon={<DescriptionIcon />}
                                    sx={{
                                        color: '#1976d2',
                                        textTransform: 'none',
                                        px: 0,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    {selectedLeave.document}
                                </Button>
                            </Box>

                            {/* Action Buttons - Only show for Pending requests */}
                            {selectedLeave.status === "Pending" && (
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 1 }}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => handleAccept(selectedLeave.id)}
                                        sx={{
                                            minWidth: 100,
                                            textTransform: 'none',
                                            borderRadius: 1
                                        }}
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleReject(selectedLeave.id)}
                                        sx={{
                                            minWidth: 100,
                                            textTransform: 'none',
                                            borderRadius: 1
                                        }}
                                    >
                                        Reject
                                    </Button>
                                </Box>
                            )}
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    )
}

export default LeaveApproval