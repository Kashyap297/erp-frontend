import { useState } from "react"
import {
    Box,
    Typography,
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

const FeesManagement = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [paymentType, setPaymentType] = useState("")

    // Mock data for recent transactions
    const recentTransactions = [
        {
            id: 1,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
            color: "#2DB500", // green
        },
        {
            id: 2,
            studentName: "Aarav Patel",
            class: "2st",
            paymentType: "Full Fee Payment",
            amount: "+ ₹90000",
            color: "#2DB500", // green
        },
        {
            id: 3,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Fee Penalty",
            amount: "+ ₹5000",
            color: "#EB2E2E", // red
        },
        {
            id: 4,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
            color: "#2DB500", // green
        },
        {
            id: 5,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
            color: "#2DB500", // green
        },
        {
            id: 6,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
            color: "#2DB500", // green
        },
        {
            id: 7,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
            color: "#2DB500", // green
        },
        {
            id: 8,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
            color: "#2DB500", // green
        },
    ]

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handlePaymentTypeChange = (e) => {
        setPaymentType(e.target.value)
    }

    const resetFilters = () => {
        setSearchTerm("")
        setPaymentType("")
    }

    // Filter transactions based on search term and payment type
    const filteredTransactions = recentTransactions.filter((transaction) => {
        const matchesSearch = transaction.studentName.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesPaymentType = paymentType === "" || transaction.paymentType === paymentType
        return matchesSearch && matchesPaymentType
    })

    return (
        <Box sx={{ width: "100%", p: 3 }}>
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

                {/* Payment Type Filter */}
                <Select
                    value={paymentType}
                    onChange={handlePaymentTypeChange}
                    displayEmpty
                    renderValue={() => "Payment type"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: { xs: "100%", sm: 180 },
                        borderRadius: "8px",
                        bgcolor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#e0e0e0",
                        },
                    }}
                >
                    <MenuItem value="">All Payment Types</MenuItem>
                    <MenuItem value="Partial Payment">Partial Payment</MenuItem>
                    <MenuItem value="Full Fee Payment">Full Fee Payment</MenuItem>
                    <MenuItem value="Fee Penalty">Fee Penalty</MenuItem>
                </Select>

                {/* Reset Filter Button */}
                <Button
                    variant="outlined"
                    onClick={resetFilters}
                    sx={{
                        width: { xs: "100%", sm: 150 },
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

            {/* Recent Transactions Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "medium" }}>
                    Recent Fee Transactions
                </Typography>
                <TableContainer sx={{ border: "none" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ "& th": { fontWeight: "medium", borderBottom: "1px solid #e0e0e0" } }}>
                                <TableCell sx={{ width: "25%" }}>Student name</TableCell>
                                <TableCell sx={{ width: "15%" }}>Class</TableCell>
                                <TableCell sx={{ width: "35%" }}>Payment type</TableCell>
                                <TableCell sx={{ width: "25%" }}>Fees</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredTransactions.map((transaction) => (
                                <TableRow key={transaction.id} sx={{ "& td": { borderBottom: "1px solid #e0e0e0" } }}>
                                    <TableCell>{transaction.studentName}</TableCell>
                                    <TableCell>{transaction.class}</TableCell>
                                    <TableCell>{transaction.paymentType}</TableCell>
                                    <TableCell sx={{ color: transaction.color, fontWeight: "medium" }}>{transaction.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default FeesManagement