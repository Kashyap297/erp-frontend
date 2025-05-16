
import { useState } from "react"
import { Box, Typography, TextField, Button, Container, IconButton, Divider } from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"

const RemarkForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        class: "",
        section: "",
        description: "",
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
        console.log("Form submitted:", formData)
        // Here you would typically send the data to your backend
        alert("Remark sent successfully!")
        // Reset form
        setFormData({
            name: "",
            date: "",
            class: "",
            section: "",
            description: "",
        })
    }

    // Custom styling for input fields to match the design
    const inputStyle = {
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": {
                borderColor: "#ccc",
                borderWidth: "1px",
            },
            "&:hover fieldset": {
                borderColor: "#999",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#2196f3",
                borderWidth: "1px",
            },
        },
        "& .MuiInputBase-input": {
            padding: "12px 14px",
        },
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h5" component="h1" fontWeight="regular">
                    Remark
                </Typography>
                <IconButton aria-label="notifications">
                    <NotificationsIcon />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, px: 2 }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3, mb: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Name
                        </Typography>
                        <TextField
                            fullWidth
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            variant="outlined"
                            sx={inputStyle}
                        />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Date
                        </Typography>
                        <TextField
                            fullWidth
                            name="date"
                            type="text" // Changed to text to match the design
                            value={formData.date}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="DD/MM/YYYY"
                            sx={inputStyle}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Box sx={{ width: "140px" }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Class
                        </Typography>
                        <TextField
                            fullWidth
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            variant="outlined"
                            sx={inputStyle}
                        />
                    </Box>

                    <Box sx={{ width: "140px" }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Sec
                        </Typography>
                        <TextField
                            fullWidth
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            variant="outlined"
                            sx={inputStyle}
                        />
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Description
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={8}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        variant="outlined"
                        sx={inputStyle}
                    />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "220px",
                            borderRadius: "8px",
                            py: 1.5,
                            textTransform: "none",
                            fontSize: "1rem",
                            bgcolor: "#2196f3",
                            "&:hover": {
                                bgcolor: "#1976d2",
                            },
                        }}
                    >
                        Send remark
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default RemarkForm