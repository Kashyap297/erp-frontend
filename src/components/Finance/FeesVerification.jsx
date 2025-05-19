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
    Typography,
    Paper,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import FileUploadIcon from "@mui/icons-material/FileUpload"

const FeesVerification = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [filterType, setFilterType] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [uploadedImage, setUploadedImage] = useState(null)

    // Mock data for student fee status with more details
    const studentFees = [
        {
            id: 1,
            studentName: "Aryan Gupta",
            class: "10A",
            mode: "Offline",
            amount: "₹12000",
            status: "Pending",
        },
        {
            id: 2,
            studentName: "Aryan Gupta",
            class: "10A",
            mode: "Offline",
            amount: "₹12000",
            status: "Pending",
        },
        {
            id: 3,
            studentName: "Aryan Gupta",
            class: "10A",
            mode: "Offline",
            amount: "₹12000",
            status: "Pending",
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

    const handleUpdate = (student) => {
        setSelectedStudent(student)
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setSelectedStudent(null)
        setUploadedImage(null)
    }

    const handleApprove = () => {
        console.log(`Approved payment for ${selectedStudent?.studentName}`)
        // Here you would update the status in your backend
        handleCloseModal()
    }

    const handleDecline = () => {
        console.log(`Declined payment for ${selectedStudent?.studentName}`)
        // Here you would update the status in your backend
        handleCloseModal()
    }

    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setUploadedImage(URL.createObjectURL(file))
        }
    }

    // Filter student fees based on search term
    const filteredFees = studentFees.filter((fee) => {
        return fee.studentName.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <Box sx={{ width: "100%" }}>
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
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="paid">Paid</MenuItem>
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

            {/* Student Fee Status Table */}
            <TableContainer sx={{ border: "none" }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ "& th": { fontWeight: "medium", borderBottom: "1px solid #e0e0e0" } }}>
                            <TableCell>Student Name</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredFees.map((fee) => (
                            <TableRow key={fee.id} sx={{ "& td": { borderBottom: "1px solid #e0e0e0" } }}>
                                <TableCell>{fee.studentName}</TableCell>
                                <TableCell>{fee.amount}</TableCell>
                                <TableCell>{fee.status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleUpdate(fee)}
                                        size="small"
                                        sx={{
                                            bgcolor: "#2C9EF4",
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
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Update Fee Payment Modal */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                PaperProps={{
                    sx: {
                        width: "450px",
                        maxWidth: "95%",
                        borderRadius: "8px",
                        border: "2px solid #2C9EF4",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        p: 0,
                        overflow: "hidden"
                    }
                }}
            >
                {selectedStudent && (
                    <>
                        <DialogTitle sx={{
                            borderBottom: "1px solid #e0e0e0",
                            p: 2,
                            fontWeight: "medium"
                        }}>
                            Update Fee Payment
                        </DialogTitle>

                        <DialogContent sx={{ p: 3, pt: 2 }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    <strong>Name:</strong> {selectedStudent.studentName}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    <strong>Class:</strong> {selectedStudent.class}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    <strong>Mode:</strong> {selectedStudent.mode}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <strong>Amount:</strong> {selectedStudent.amount}
                                </Typography>
                            </Box>

                            {/* Image Upload Area */}
                            <Box
                                component={Paper}
                                variant="outlined"
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "4px",
                                    borderColor: "#e0e0e0",
                                    bgcolor: "#f9f9f9",
                                    cursor: "pointer",
                                    height: "80px",
                                    mb: 3
                                }}
                                onClick={() => document.getElementById('upload-image').click()}
                            >
                                {uploadedImage ? (
                                    <Box
                                        component="img"
                                        src={uploadedImage}
                                        alt="Uploaded receipt"
                                        sx={{
                                            maxHeight: "100%",
                                            maxWidth: "100%",
                                            objectFit: "contain"
                                        }}
                                    />
                                ) : (
                                    <Box sx={{ display: "flex", alignItems: "center", color: "#757575" }}>
                                        <FileUploadIcon sx={{ mr: 1 }} />
                                        <Typography variant="body2">Upload Image</Typography>
                                    </Box>
                                )}
                                <input
                                    id="upload-image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </Box>
                        </DialogContent>

                        <DialogActions sx={{
                            p: 2,
                            pt: 0,
                            display: "flex",
                            justifyContent: "center",
                            gap: 2
                        }}>
                            <Button
                                variant="contained"
                                onClick={handleApprove}
                                sx={{
                                    bgcolor: "#388e3c",
                                    color: "white",
                                    textTransform: "none",
                                    borderRadius: "4px",
                                    px: 3,
                                    "&:hover": {
                                        bgcolor: "#2e7d32",
                                    },
                                    boxShadow: "none",
                                    flex: 1
                                }}
                            >
                                Approve
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleDecline}
                                sx={{
                                    bgcolor: "#d32f2f",
                                    color: "white",
                                    textTransform: "none",
                                    borderRadius: "4px",
                                    px: 3,
                                    "&:hover": {
                                        bgcolor: "#c62828",
                                    },
                                    boxShadow: "none",
                                    flex: 1
                                }}
                            >
                                Decline
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Box>
    )
}

export default FeesVerification