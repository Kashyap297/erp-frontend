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
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"

const FineLateFee = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [filterType, setFilterType] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [newCategory, setNewCategory] = useState("")
    const [newAmount, setNewAmount] = useState("")

    // Mock data for fee categories
    const [feeCategories, setFeeCategories] = useState([
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
    ])

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
        // Here you would typically open a modal to edit the fee category
    }

    const handleRemove = (id) => {
        console.log(`Remove fee category with ID: ${id}`)
        // Remove the fee category from the list
        setFeeCategories(feeCategories.filter(category => category.id !== id))
    }

    const handleAddCategory = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setNewCategory("")
        setNewAmount("")
    }

    const handleAddNewCategory = () => {
        if (newCategory && newAmount) {
            // Add new category to the list
            const newId = Math.max(...feeCategories.map(cat => cat.id)) + 1
            const newCategoryObj = {
                id: newId,
                category: newCategory,
                amount: newAmount,
            }
            setFeeCategories([...feeCategories, newCategoryObj])
            handleCloseModal()
        }
    }

    // Filter fee categories based on search term
    const filteredCategories = feeCategories.filter((category) => {
        return category.category.toLowerCase().includes(searchTerm.toLowerCase())
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
                        bgcolor: "#D9D9D9C2",
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

            {/* Add Category Button */}
            <Box sx={{ mb: 3 }}>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddCategory}
                    sx={{
                        bgcolor: "#2196f3",
                        color: "white",
                        textTransform: "none",
                        borderRadius: "4px",
                        "&:hover": {
                            bgcolor: "#1976d2",
                        },
                        boxShadow: "none",
                    }}
                >
                    Add more category
                </Button>
            </Box>

            {/* Fee Categories Table */}
            <TableContainer sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                overflow: "hidden"
            }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{
                            bgcolor: "#f5f5f5",
                            "& th": {
                                fontWeight: "medium",
                                borderBottom: "1px solid #e0e0e0",
                                borderRight: "1px dotted #e0e0e0",
                                "&:last-child": {
                                    borderRight: "none"
                                }
                            }
                        }}>
                            <TableCell>ID</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Amount (₹)</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredCategories.map((category) => (
                            <TableRow key={category.id} sx={{
                                "& td": {
                                    borderBottom: "1px dotted #e0e0e0",
                                    borderRight: "1px dotted #e0e0e0",
                                    "&:last-child": {
                                        borderRight: "none"
                                    }
                                },
                                "&:last-child td": {
                                    borderBottom: "none"
                                }
                            }}>
                                <TableCell>{category.id}</TableCell>
                                <TableCell>{category.category}</TableCell>
                                <TableCell>{category.amount}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <Button
                                            variant="contained"
                                            onClick={() => handleChange(category.id)}
                                            size="small"
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
                                        <Button
                                            variant="contained"
                                            onClick={() => handleRemove(category.id)}
                                            size="small"
                                            sx={{
                                                bgcolor: "#f44336",
                                                color: "white",
                                                textTransform: "none",
                                                borderRadius: "4px",
                                                px: 2,
                                                py: 0.5,
                                                fontSize: "0.75rem",
                                                "&:hover": {
                                                    bgcolor: "#d32f2f",
                                                },
                                                boxShadow: "none",
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add Category Modal */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                PaperProps={{
                    sx: {
                        width: "400px",
                        maxWidth: "90%",
                        borderRadius: "8px",
                        border: "2px solid #2196f3",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        p: 1
                    }
                }}
            >
                <DialogTitle sx={{
                    textAlign: "center",
                    borderBottom: "1px dotted #e0e0e0",
                    pb: 2,
                    pt: 1
                }}>
                    Add Fee Category
                </DialogTitle>

                <DialogContent sx={{ mt: 2 }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        p: 1
                    }}>
                        <TextField
                            fullWidth
                            placeholder="Category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "4px",
                                    "& fieldset": {
                                        borderColor: "#e0e0e0",
                                    },
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            placeholder="Amount"
                            value={newAmount}
                            onChange={(e) => setNewAmount(e.target.value)}
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "4px",
                                    "& fieldset": {
                                        borderColor: "#e0e0e0",
                                    },
                                },
                            }}
                        />
                    </Box>
                </DialogContent>

                <DialogActions sx={{
                    justifyContent: "center",
                    p: 2,
                    pt: 1
                }}>
                    <Button
                        onClick={handleCloseModal}
                        sx={{
                            color: "#757575",
                            textTransform: "none",
                            "&:hover": {
                                bgcolor: "transparent",
                                textDecoration: "underline"
                            }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleAddNewCategory}
                        sx={{
                            color: "#2196f3",
                            textTransform: "none",
                            "&:hover": {
                                bgcolor: "transparent",
                                textDecoration: "underline"
                            }
                        }}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default FineLateFee