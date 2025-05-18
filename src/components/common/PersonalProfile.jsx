import { useState } from "react"
import { Box, Button, Card, Container, TextField, Typography, Avatar, Link, InputAdornment } from "@mui/material"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"

export default function PersonalProfile() {
    const [formData, setFormData] = useState({
        empId: "",
        name: "",
        email: "",
        contactNumber: "",
        department: "",
        designation: "",
        address: "",
        creditCard: "",
        joiningDate: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted with:", formData)
        // Add your form submission logic here
    }

    const handleImageUpload = () => {
        // Trigger file input click
        document.getElementById("profile-image-upload").click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            // Handle file upload logic here
            console.log("File selected:", file.name)
        }
    }

    return (
        <Container maxWidth="md" sx={{ py: 4, height: "100%" }}>
            <Card sx={{ p: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.05)", height: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h6" component="h1" fontWeight="bold">
                        Personal Information
                    </Typography>
                    <Link href="#" color="primary" underline="hover">
                        Edit
                    </Link>
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{ height: "100%" }}>
                    {/* Main container using flexbox */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: { xs: 2, md: 4 },
                            height: "100%",
                        }}
                    >
                        {/* Section 1: Image upload only */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minWidth: { md: "120px" },
                                pt: 1,
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 80,
                                    height: 80,
                                    mb: 1,
                                    border: "1px solid #e0e0e0",
                                }}
                            />
                            <input
                                type="file"
                                id="profile-image-upload"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                            <Button
                                variant="contained"
                                startIcon={<CloudUploadIcon />}
                                onClick={handleImageUpload}
                                size="small"
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "#2196f3",
                                    "&:hover": {
                                        backgroundColor: "#1976d2",
                                    },
                                    mt: 1,
                                    fontSize: "0.75rem",
                                    whiteSpace: "nowrap",
                                    py: 0.5,
                                }}
                            >
                                Upload Image
                            </Button>
                        </Box>

                        {/* Section 2: Information fields */}
                        <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, md: 2 } }}>
                                {/* Row 1 */}
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Emp ID
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="empId"
                                        placeholder="Emp ID"
                                        value={formData.empId}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                    />
                                </Box>
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                    />
                                </Box>

                                {/* Row 2 */}
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Email
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                    />
                                </Box>
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Contact Number
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="contactNumber"
                                        placeholder="Contact Number"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                    />
                                </Box>

                                {/* Row 3 */}
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Department
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="department"
                                        placeholder="Department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                    />
                                </Box>
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Designation
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="designation"
                                        placeholder="Designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                    />
                                </Box>

                                {/* Row 4 - Full width */}
                                <Box sx={{ width: "100%" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Address
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="address"
                                        placeholder="Emp ID"
                                        value={formData.address}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                    />
                                </Box>

                                {/* Row 5 */}
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Credit card
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="creditCard"
                                        placeholder="Credit card"
                                        value={formData.creditCard}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CreditCardIcon fontSize="small" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box sx={{ width: "calc(50% - 8px)" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Joining Date
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="joiningDate"
                                        placeholder="Joining Date"
                                        value={formData.joiningDate}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CalendarTodayIcon fontSize="small" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    py: 1,
                                    borderRadius: 1,
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    backgroundColor: "#2196f3",
                                    "&:hover": {
                                        backgroundColor: "#1976d2",
                                    },
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Container>
    )
}