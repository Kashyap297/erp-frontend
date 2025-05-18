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

const FeesStructure = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [filterType, setFilterType] = useState("")

    // Mock data for fee categories
    const feeCategories = [
        {
            id: 1,
            category: "Tuition Fees",
            amount: "50000",
        },
        {
            id: 2,
            category: "Transport Fees",
            amount: "1000/Km",
        },
        {
            id: 3,
            category: "Transport Fees",
            amount: "1000/Km",
        },
        {
            id: 4,
            category: "Transport Fees",
            amount: "1000/Km",
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

    const handleChange = (id) => {
        console.log(`Change fee category with ID: ${id}`)
        // Here you would typically open a modal or navigate to edit the fee category
    }

    // Filter fee categories based on search term
    const filteredCategories = feeCategories.filter((category) => {
        return category.category.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <Box sx={{ width: "100%", mt: 2 }}>
            {/* Search and Filter Row */}
            <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
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
                    <MenuItem value="tuition">Tuition Fees</MenuItem>
                    <MenuItem value="transport">Transport Fees</MenuItem>
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

            {/* Fee Categories Table */}
            <TableContainer sx={{ border: "none" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ "& th": { fontWeight: "medium", borderBottom: "1px solid #e0e0e0" } }}>
                            <TableCell>ID</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Amount (₹)</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredCategories.map((category) => (
                            <TableRow key={category.id} sx={{ "& td": { borderBottom: "1px solid #e0e0e0" } }}>
                                <TableCell>{category.id}</TableCell>
                                <TableCell>{category.category}</TableCell>
                                <TableCell>{category.amount}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleChange(category.id)}
                                        sx={{
                                            bgcolor: "#2196f3",
                                            color: "white",
                                            textTransform: "none",
                                            borderRadius: "4px",
                                            px: 2,
                                            py: 0.5,
                                            fontSize: "0.75rem",
                                            "&:hover": {
                                                bgcolor: "#1976d2",
                                            },
                                            boxShadow: "none",
                                        }}
                                    >
                                        Change
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default FeesStructure