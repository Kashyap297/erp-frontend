"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    Paper,
    IconButton,
    Grid,
    Container,
    useTheme,
    useMediaQuery
} from "@mui/material"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import { useNavigate } from "react-router-dom"

const HomeworkCreationForm = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    const [formData, setFormData] = useState({
        class: "",
        section: "",
        subject: "",
        title: "",
        description: "",
        file: null,
    })

    // Mock data for dropdowns
    const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"]
    const sections = ["A", "B", "C", "D"]
    const subjects = ["Mathematics", "Science", "English", "History", "Geography"]
    const navigate = useNavigate() // Initialize navigate

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                file: e.target.files[0],
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Here you would typically send the data to your backend
        alert("Homework assignment created successfully!")
        navigate("/teacher/homework") // Navigate to the homework list after submission
    }

    return (
        <Container maxWidth="" disableGutters>
            <Box sx={{
                width: "100%",
                p: { xs: 1, sm: 1.5, md: 2 }
            }}>
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2, sm: 2.5, md: 3 },
                        border: "1px solid #e0e0e0",
                        borderRadius: 2,
                        position: "relative",
                    }}
                >
                    {/* Calendar Icon */}
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: { xs: 5, sm: 10 },
                            right: { xs: 5, sm: 10 },
                        }}
                    >
                        <CalendarMonthIcon />
                    </IconButton>

                    <Box component="form" onSubmit={handleSubmit}>
                        {/* Class and Section Row */}
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    Class
                                </Typography>
                                <TextField
                                    select
                                    fullWidth
                                    name="class"
                                    value={formData.class}
                                    onChange={handleChange}
                                    placeholder="Class"
                                    size={isMobile ? "small" : "medium"}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            bgcolor: "#e0e0e0",
                                            "& fieldset": {
                                                borderColor: "transparent",
                                            },
                                        },
                                    }}
                                    SelectProps={{
                                        displayEmpty: true,
                                        renderValue: (value) => (value ? value : "Class"),
                                    }}
                                >
                                    <MenuItem disabled value="">
                                        Class
                                    </MenuItem>
                                    {classes.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    Sec
                                </Typography>
                                <TextField
                                    select
                                    fullWidth
                                    name="section"
                                    value={formData.section}
                                    onChange={handleChange}
                                    placeholder="Sec"
                                    size={isMobile ? "small" : "medium"}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            bgcolor: "#e0e0e0",
                                            "& fieldset": {
                                                borderColor: "transparent",
                                            },
                                        },
                                    }}
                                    SelectProps={{
                                        displayEmpty: true,
                                        renderValue: (value) => (value ? value : "Sec"),
                                    }}
                                >
                                    <MenuItem disabled value="">
                                        Sec
                                    </MenuItem>
                                    {sections.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>

                        {/* Subject */}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Subject
                            </Typography>
                            <TextField
                                select
                                fullWidth
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        bgcolor: "#e0e0e0",
                                        "& fieldset": {
                                            borderColor: "transparent",
                                        },
                                    },
                                }}
                                SelectProps={{
                                    displayEmpty: true,
                                    renderValue: (value) => (value ? value : "Subject"),
                                }}
                            >
                                <MenuItem disabled value="">
                                    Subject
                                </MenuItem>
                                {subjects.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>

                        {/* Title */}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Title
                            </Typography>
                            <TextField
                                fullWidth
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Title"
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        bgcolor: "#e0e0e0",
                                        "& fieldset": {
                                            borderColor: "transparent",
                                        },
                                    },
                                }}
                            />
                        </Box>

                        {/* Description */}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                Description
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={isMobile ? 4 : 5}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Description"
                                size={isMobile ? "small" : "medium"}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        bgcolor: "#e0e0e0",
                                        "& fieldset": {
                                            borderColor: "transparent",
                                        },
                                    },
                                }}
                            />
                        </Box>

                        {/* File Upload and Submit Button */}
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Button
                                    component="label"
                                    variant="outlined"
                                    fullWidth={isMobile}
                                    startIcon={<FileUploadIcon />}
                                    size={isMobile ? "small" : "medium"}
                                    sx={{
                                        bgcolor: "#e0e0e0",
                                        color: "text.primary",
                                        borderColor: "transparent",
                                        "&:hover": {
                                            bgcolor: "#d5d5d5",
                                            borderColor: "transparent",
                                        },
                                        textTransform: "none",
                                        mb: { xs: 2, sm: 0 }
                                    }}
                                >
                                    Upload file
                                    <input type="file" hidden onChange={handleFileChange} />
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth={isMobile}
                                    size={isMobile ? "medium" : "large"}
                                    sx={{
                                        bgcolor: "#2196f3",
                                        color: "white",
                                        "&:hover": {
                                            bgcolor: "#1976d2",
                                        },
                                        borderRadius: 4,
                                        px: { xs: 2, sm: 3 },
                                        py: { xs: 0.5, sm: 0.75 },
                                        textTransform: "none",
                                        maxWidth: { xs: '100%', sm: '200px' }
                                    }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default HomeworkCreationForm