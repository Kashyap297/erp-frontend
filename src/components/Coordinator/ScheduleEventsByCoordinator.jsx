import { useState } from "react"
import { Box, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"

const ScheduleEventsByCoordinator = () => {
    const [formData, setFormData] = useState({
        subject: "",
        from: "",
        to: "",
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
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mx: "auto",
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            {/* Subject Field */}
            <Box>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                    Subject
                </Typography>
                <TextField
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#f0f0f0",
                            borderRadius: "4px",
                        },
                    }}
                />
            </Box>

            {/* Date Fields */}
            <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                        From
                    </Typography>
                    <TextField
                        fullWidth
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        placeholder="DD/MM/YYYY"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#f0f0f0",
                                borderRadius: "4px",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <CalendarTodayIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                        To
                    </Typography>
                    <TextField
                        fullWidth
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        placeholder="DD/MM/YYYY"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#f0f0f0",
                                borderRadius: "4px",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <CalendarTodayIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>

            {/* Description Field */}
            <Box>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
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
                            backgroundColor: "#f0f0f0",
                            borderRadius: "4px",
                        },
                    }}
                />
            </Box>

            {/* Schedule Button */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: "200px",
                        py: 1.5,
                        backgroundColor: "#4dabf5",
                        color: "White",
                        borderRadius: "4px",
                        textTransform: "none",
                        fontSize: "1rem",
                        "&:hover": {
                            backgroundColor: "#3d8bd5",
                        },
                    }}
                >
                    Schedule
                </Button>
            </Box>
        </Box>
    )
}

export default ScheduleEventsByCoordinator