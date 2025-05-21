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
    Paper,
    TextField,
    Select,
    MenuItem,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
} from "@mui/material"
import { Search as SearchIcon, Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material"

const TransferRequestManagement = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [subjectFilter, setSubjectFilter] = useState("")
    const [actionFilter, setActionFilter] = useState("")

    // Sample data for transfer requests
    const initialRequests = [
        { id: 1, name: "Rahul Sharma", admissionNo: "A12345", class: "10th", reason: "Relocation" },
        { id: 2, name: "Ananya Verma", admissionNo: "A12345", class: "8th", reason: "Financial Issues" },
        { id: 3, name: "John Doe", admissionNo: "A12345", class: "10th", reason: "Relocation" },
        { id: 4, name: "Esther Howard", admissionNo: "A12345", class: "10th", reason: "Relocation" },
    ]

    // Filter requests based on search term and filters
    const filteredRequests = initialRequests.filter((request) => {
        const matchesSearch =
            request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.admissionNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
            request.reason.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesSubject = subjectFilter === "" || request.class === subjectFilter
        const matchesAction = actionFilter === "" // We would implement this if we had action status in the data

        return matchesSearch && matchesSubject && matchesAction
    })

    // Handle approve action
    const handleApprove = (id) => {
        console.log(`Approved request with ID: ${id}`)
        // Here you would typically call an API to update the status
    }

    // Handle reject action
    const handleReject = (id) => {
        console.log(`Rejected request with ID: ${id}`)
        // Here you would typically call an API to update the status
    }

    // Reset all filters
    const resetFilters = () => {
        setSearchTerm("")
        setSubjectFilter("")
        setActionFilter("")
    }

    return (
        <Box sx={{ width: "100%", mt: 2 }}>
            {/* Search and Filter Section */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
                {/* Search Input */}
                <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        flexGrow: 1,
                        maxWidth: 400,
                        bgcolor: "grey.100",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Subject Filter */}
                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{
                        width: 160,
                        bgcolor: "grey.100",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                        },
                    }}
                >
                    <Select
                        displayEmpty
                        value={subjectFilter}
                        onChange={(e) => setSubjectFilter(e.target.value)}
                        renderValue={(selected) => {
                            if (selected === "") {
                                return "Subject"
                            }
                            return selected
                        }}
                    >
                        <MenuItem value="">
                            <em>Subject</em>
                        </MenuItem>
                        <MenuItem value="10th">10th</MenuItem>
                        <MenuItem value="9th">9th</MenuItem>
                        <MenuItem value="8th">8th</MenuItem>
                    </Select>
                </FormControl>

                {/* Action Filter */}
                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{
                        width: 160,
                        bgcolor: "grey.100",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                        },
                    }}
                >
                    <Select
                        displayEmpty
                        value={actionFilter}
                        onChange={(e) => setActionFilter(e.target.value)}
                        renderValue={(selected) => {
                            if (selected === "") {
                                return "Action"
                            }
                            return selected
                        }}
                    >
                        <MenuItem value="">
                            <em>Action</em>
                        </MenuItem>
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="rejected">Rejected</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                    </Select>
                </FormControl>

                {/* Reset Filter Button */}
                <Button
                    variant="outlined"
                    onClick={resetFilters}
                    sx={{
                        bgcolor: "grey.100",
                        color: "text.primary",
                        borderColor: "grey.300",
                        "&:hover": {
                            bgcolor: "grey.200",
                            borderColor: "grey.400",
                        },
                    }}
                >
                    Reset Filter
                </Button>
            </Box>

            {/* Transfer Requests Table */}
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid", borderColor: "divider" }}>
                <Table sx={{ minWidth: 650 }} aria-label="transfer requests table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Admission No.</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Reason</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRequests.map((request) => (
                            <TableRow key={request.id}>
                                <TableCell component="th" scope="row">
                                    {request.name}
                                </TableCell>
                                <TableCell>{request.admissionNo}</TableCell>
                                <TableCell>{request.class}</TableCell>
                                <TableCell>{request.reason}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <IconButton size="small" onClick={() => handleApprove(request.id)} sx={{ color: "success.main" }}>
                                            <CheckIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small" onClick={() => handleReject(request.id)} sx={{ color: "error.main" }}>
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
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

export default TransferRequestManagement