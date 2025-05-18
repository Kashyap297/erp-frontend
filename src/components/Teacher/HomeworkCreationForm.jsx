"use client"

import { useState } from "react"
import { Box, Typography, TextField, Button, MenuItem, Paper, IconButton } from "@mui/material"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import { useNavigate } from "react-router-dom"

const HomeworkCreationForm = () => {
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
        <Box sx={{ width: "100%", p: 2 }}>
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    position: "relative",
                }}
            >
                {/* Calendar Icon */}
                <IconButton
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                    }}
                >
                    <CalendarMonthIcon />
                </IconButton>

                <Box component="form" onSubmit={handleSubmit}>
                    {/* Class and Section Row */}
                    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
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
                        </Box>

                        <Box sx={{ flex: 1 }}>
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
                        </Box>
                    </Box>

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
                            Tittle
                        </Typography>
                        <TextField
                            fullWidth
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Tittle"
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
                            rows={5}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Description"
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

                    {/* File Upload */}
                    <Box sx={{ mb: 3 }}>
                        <Button
                            component="label"
                            variant="outlined"
                            startIcon={<FileUploadIcon />}
                            sx={{
                                bgcolor: "#e0e0e0",
                                color: "text.primary",
                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: "#d5d5d5",
                                    borderColor: "transparent",
                                },
                                textTransform: "none",
                            }}
                        >
                            Upload file
                            <input type="file" hidden onChange={handleFileChange} />
                        </Button>
                    </Box>

                    {/* Submit Button */}
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                bgcolor: "#2196f3",
                                color: "white",
                                "&:hover": {
                                    bgcolor: "#1976d2",
                                },
                                borderRadius: 4,
                                px: 3,
                                py: 0.75,
                                textTransform: "none",
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default HomeworkCreationForm