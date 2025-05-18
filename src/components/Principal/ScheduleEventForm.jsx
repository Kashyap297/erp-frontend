
import { useState } from "react"
import { Box, Typography, IconButton, Divider, TextField, Button, InputAdornment, MenuItem } from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const ScheduleEventForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        fromDate: "",
        toDate: "",
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
        alert("Event scheduled successfully!")
    }

    // Sample title options
    const titleOptions = ["Meeting", "Exam", "Workshop", "Holiday", "Conference"]

    // Sample subject options
    const subjectOptions = ["Mathematics", "Science", "English", "History", "Geography"]

    return (
        <Box sx={{ width: "100%", mt: 1 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Tittle
                    </Typography>
                    <TextField
                        select
                        fullWidth
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Tittle"
                        SelectProps={{
                            IconComponent: KeyboardArrowDownIcon,
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                bgcolor: "#e0e0e0",
                                borderRadius: 1,
                                "& fieldset": {
                                    border: "none",
                                },
                            },
                        }}
                    >
                        {titleOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box sx={{ mb: 3 }}>
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
                        SelectProps={{
                            IconComponent: KeyboardArrowDownIcon,
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                bgcolor: "#e0e0e0",
                                borderRadius: 1,
                                "& fieldset": {
                                    border: "none",
                                },
                            },
                        }}
                    >
                        {subjectOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            From
                        </Typography>
                        <TextField
                            fullWidth
                            name="fromDate"
                            value={formData.fromDate}
                            onChange={handleChange}
                            placeholder="DD/MM/YYYY"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CalendarTodayIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    bgcolor: "#e0e0e0",
                                    borderRadius: 1,
                                    "& fieldset": {
                                        border: "none",
                                    },
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            To
                        </Typography>
                        <TextField
                            fullWidth
                            name="toDate"
                            value={formData.toDate}
                            onChange={handleChange}
                            placeholder="DD/MM/YYYY"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <CalendarTodayIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    bgcolor: "#e0e0e0",
                                    borderRadius: 1,
                                    "& fieldset": {
                                        border: "none",
                                    },
                                },
                            }}
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
                        rows={5}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                bgcolor: "#e0e0e0",
                                borderRadius: 1,
                                "& fieldset": {
                                    border: "none",
                                },
                            },
                        }}
                    />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "220px",
                            borderRadius: 1,
                            py: 1.5,
                            textTransform: "none",
                            fontSize: "1rem",
                            bgcolor: "#2196f3",
                            "&:hover": {
                                bgcolor: "#1976d2",
                            },
                        }}
                    >
                        Schedule
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ScheduleEventForm