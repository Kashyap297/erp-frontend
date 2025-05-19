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
    Chip,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const StudentFees = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [filterType, setFilterType] = useState("")

    // Mock data for student fee payments
    const studentPayments = Array(6).fill({
        id: "2024001",
        name: "Emma Rodriguez",
        grade: "11th - A",
        totalFeesPaid: "₹ 50,000",
        status: "Completed",
    })

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

    // Filter payments based on search term and filters
    const filteredPayments = studentPayments.filter((payment) => {
        const matchesSearch =
            payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesClass = classFilter === "" || payment.grade === classFilter
        return matchesSearch && matchesClass
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
                            bgcolor: "#D9D9D9C2",
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
                        bgcolor: "#D9D9D9C2",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All Classes</MenuItem>
                    <MenuItem value="11th - A">11th - A</MenuItem>
                    <MenuItem value="11th - B">11th - B</MenuItem>
                    <MenuItem value="12th - A">12th - A</MenuItem>
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
                        bgcolor: "#D9D9D9C2",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
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

            {/* Student Fee Payments Table */}
            <TableContainer sx={{ border: "none" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ "& th": { fontWeight: "medium", borderBottom: "1px solid #e0e0e0" } }}>
                            <TableCell>Student ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Grade</TableCell>
                            <TableCell>Total Fees Paid</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPayments.map((payment, index) => (
                            <TableRow key={index} sx={{ "& td": { borderBottom: "1px solid #e0e0e0" } }}>
                                <TableCell>{payment.id}</TableCell>
                                <TableCell>{payment.name}</TableCell>
                                <TableCell>{payment.grade}</TableCell>
                                <TableCell>{payment.totalFeesPaid}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={payment.status}
                                        sx={{
                                            bgcolor: "#e0e0e0",
                                            color: "#757575",
                                            fontWeight: "medium",
                                            fontSize: "0.75rem",
                                            height: "24px",
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default StudentFees