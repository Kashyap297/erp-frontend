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
    Select,
    MenuItem,
    InputAdornment,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"

const PaymentTracking = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [filterType, setFilterType] = useState("")

    // Mock data for student fee payments
    const studentPayments = [
        {
            id: 1,
            student: "Amit Kumar",
            amount: "5000",
            status: "Paid",
            date: "15/03/25",
        },
        {
            id: 2,
            student: "Neha Sharma",
            amount: "4500",
            status: "Unpaid",
            date: "",
        },
        {
            id: 3,
            student: "Raj Verma",
            amount: "6000",
            status: "Unpaid",
            date: "",
        },
        {
            id: 4,
            student: "Priya Mehta",
            amount: "3000",
            status: "Unpaid",
            date: "",
        },
        {
            id: 5,
            student: "Amit Kumar",
            amount: "5000",
            status: "Paid",
            date: "15/03/25",
        },
    ]

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleClassFilterChange = (e) => {
        setClassFilter(e.target.value)
    }

    const handleFilterTypeChange = (e) => {
        setFilterType(e.target.value)
    }

    const resetFilters = () => {
        setSearchTerm("")
        setClassFilter("")
        setFilterType("")
    }

    const handleSendReminder = (student) => {
        console.log(`Sending reminder to ${student}`)
        // Here you would typically send a reminder notification
    }

    // Filter student payments based on search term
    const filteredPayments = studentPayments.filter((payment) => {
        return payment.student.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <Box sx={{ width: "100%", p: 4, mt: 2 }}>
            {/* Search and Filter Row */}
            <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                {/* Search Field */}
                <TextField
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                    sx={{
                        flex: 1,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
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

                {/* Class Filter */}
                <Select
                    value={classFilter}
                    onChange={handleClassFilterChange}
                    displayEmpty
                    renderValue={() => "Class"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: { xs: "100%", sm: 170 },
                        borderRadius: "8px",
                        bgcolor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All Classes</MenuItem>
                    <MenuItem value="1">Class 1</MenuItem>
                    <MenuItem value="2">Class 2</MenuItem>
                    <MenuItem value="3">Class 3</MenuItem>
                </Select>

                {/* Filter Type */}
                <Select
                    value={filterType}
                    onChange={handleFilterTypeChange}
                    displayEmpty
                    renderValue={() => "Filter"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: { xs: "100%", sm: 170 },
                        borderRadius: "8px",
                        bgcolor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="unpaid">Unpaid</MenuItem>
                </Select>

                {/* Reset Filter Button */}
                <Button
                    variant="outlined"
                    onClick={resetFilters}
                    sx={{
                        width: { xs: "100%", sm: 170 },
                        borderRadius: "8px",
                        borderColor: "#e0e0e0",
                        color: "text.primary",
                        bgcolor: "#f5f5f5",
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

            {/* Student Fee Payments Table */}
            <TableContainer sx={{ border: "none" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ "& th": { fontWeight: "medium", borderBottom: "1px solid #e0e0e0" } }}>
                            <TableCell>Student</TableCell>
                            <TableCell>Amount (₹)</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPayments.map((payment) => (
                            <TableRow key={payment.id} sx={{ "& td": { borderBottom: "1px solid #e0e0e0" } }}>
                                <TableCell>{payment.student}</TableCell>
                                <TableCell>{payment.amount}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        {payment.status === "Paid" ? (
                                            <>
                                                <CheckIcon sx={{ color: "#4caf50", fontSize: "1rem", mr: 0.5 }} />
                                                <span style={{ color: "#4caf50" }}>Paid</span>
                                            </>
                                        ) : (
                                            <>
                                                <CloseIcon sx={{ color: "#f44336", fontSize: "1rem", mr: 0.5 }} />
                                                <span style={{ color: "#f44336" }}>Unpaid</span>
                                            </>
                                        )}
                                    </Box>
                                </TableCell>
                                <TableCell>{payment.date}</TableCell>
                                <TableCell>
                                    {payment.status === "Unpaid" && (
                                        <Button
                                            variant="text"
                                            onClick={() => handleSendReminder(payment.student)}
                                            sx={{
                                                color: "#f44336",
                                                textTransform: "none",
                                                p: 0,
                                                minWidth: "auto",
                                                "&:hover": {
                                                    bgcolor: "transparent",
                                                    textDecoration: "underline",
                                                },
                                            }}
                                        >
                                            Reminder
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default PaymentTracking