import { useState } from "react"
import { Box, Typography, TextField, Select, MenuItem, Button, InputAdornment } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const ScheduleExamForm = () => {
    // Initial time slot structure
    const initialTimeSlot = {
        title: "",
        class: "",
        sec: "",
        subject: "",
        date: "",
        timeFrom: "",
        timeTo: "",
    }

    // State for time slots
    const [timeSlots, setTimeSlots] = useState([{ ...initialTimeSlot }])

    // Handle input change for a specific time slot
    const handleChange = (index, field, value) => {
        const updatedTimeSlots = [...timeSlots]
        updatedTimeSlots[index] = {
            ...updatedTimeSlots[index],
            [field]: value,
        }
        setTimeSlots(updatedTimeSlots)
    }

    // Add a new time slot
    const addTimeSlot = () => {
        setTimeSlots([...timeSlots, { ...initialTimeSlot }])
    }

    // Remove the last time slot
    const removeTimeSlot = () => {
        if (timeSlots.length > 1) {
            const updatedTimeSlots = [...timeSlots]
            updatedTimeSlots.pop()
            setTimeSlots(updatedTimeSlots)
        }
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", timeSlots)
        // Here you would typically send the data to your backend
    }

    // Render a single time slot
    const renderTimeSlot = (timeSlot, index) => (
        <Box key={index} sx={{ mb: 4 }}>
            {/* Title Field */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Title
                </Typography>
                <TextField
                    fullWidth
                    value={timeSlot.title}
                    onChange={(e) => handleChange(index, "title", e.target.value)}
                    placeholder="Title"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            bgcolor: "#e0e0e0",
                            borderRadius: 1,
                            "& fieldset": {
                                borderColor: "transparent",
                            },
                            "&:hover fieldset": {
                                borderColor: "transparent",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "transparent",
                            },
                        },
                    }}
                />
            </Box>

            {/* Class and Sec Row */}
            <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
                <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Class
                    </Typography>
                    <Select
                        fullWidth
                        value={timeSlot.class}
                        onChange={(e) => handleChange(index, "class", e.target.value)}
                        displayEmpty
                        renderValue={(selected) => (selected ? selected : "Class")}
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                            width: "180px",
                            bgcolor: "#e0e0e0",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Class 1">Class 1</MenuItem>
                        <MenuItem value="Class 2">Class 2</MenuItem>
                        <MenuItem value="Class 3">Class 3</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Sec
                    </Typography>
                    <Select
                        fullWidth
                        value={timeSlot.sec}
                        onChange={(e) => handleChange(index, "sec", e.target.value)}
                        displayEmpty
                        renderValue={(selected) => (selected ? selected : "Sec")}
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                            width: "180px",
                            bgcolor: "#e0e0e0",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="B">B</MenuItem>
                        <MenuItem value="C">C</MenuItem>
                    </Select>
                </Box>
            </Box>

            {/* Subject, Date, Time From, Time To Row */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Subject
                    </Typography>
                    <Select
                        fullWidth
                        value={timeSlot.subject}
                        onChange={(e) => handleChange(index, "subject", e.target.value)}
                        displayEmpty
                        renderValue={(selected) => (selected ? selected : "Subject")}
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                            width: "180px",
                            bgcolor: "#e0e0e0",
                            borderRadius: 1,
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "transparent",
                            },
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Mathematics">Mathematics</MenuItem>
                        <MenuItem value="Science">Science</MenuItem>
                        <MenuItem value="English">English</MenuItem>
                    </Select>
                </Box>
                <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Date
                    </Typography>
                    <TextField
                        value={timeSlot.date}
                        onChange={(e) => handleChange(index, "date", e.target.value)}
                        placeholder="DD/MM/YYYY"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            width: "180px",
                            "& .MuiOutlinedInput-root": {
                                bgcolor: "#e0e0e0",
                                borderRadius: 1,
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Time From
                    </Typography>
                    <TextField
                        value={timeSlot.timeFrom}
                        onChange={(e) => handleChange(index, "timeFrom", e.target.value)}
                        placeholder="00:00 Am"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <AccessTimeIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            width: "180px",
                            "& .MuiOutlinedInput-root": {
                                bgcolor: "#e0e0e0",
                                borderRadius: 1,
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Time To
                    </Typography>
                    <TextField
                        value={timeSlot.timeTo}
                        onChange={(e) => handleChange(index, "timeTo", e.target.value)}
                        placeholder="00:00 Am"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <AccessTimeIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            width: "180px",
                            "& .MuiOutlinedInput-root": {
                                bgcolor: "#e0e0e0",
                                borderRadius: 1,
                                "& fieldset": {
                                    borderColor: "transparent",
                                },
                                "&:hover fieldset": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                },
                            },
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            <Box component="form" onSubmit={handleSubmit}>
                {/* Render all time slots */}
                {timeSlots.map((timeSlot, index) => renderTimeSlot(timeSlot, index))}

                {/* Add and Remove Buttons */}
                <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={addTimeSlot}
                        sx={{
                            bgcolor: "#4dabf5",
                            color: "white",
                            borderRadius: 2,
                            textTransform: "none",
                            px: 3,
                            py: 1,
                            "&:hover": {
                                bgcolor: "#3d8bd5",
                            },
                            boxShadow: "none",
                        }}
                    >
                        Add
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<RemoveIcon />}
                        onClick={removeTimeSlot}
                        sx={{
                            bgcolor: "#4dabf5",
                            color: "white",
                            borderRadius: 2,
                            textTransform: "none",
                            px: 3,
                            py: 1,
                            "&:hover": {
                                bgcolor: "#3d8bd5",
                            },
                            boxShadow: "none",
                        }}
                    >
                        Remove
                    </Button>
                </Box>

                {/* Schedule Button */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            bgcolor: "#4dabf5",
                            color: "white",
                            borderRadius: 2,
                            textTransform: "none",
                            px: 6,
                            py: 1,
                            width: "300px",
                            "&:hover": {
                                bgcolor: "#3d8bd5",
                            },
                            boxShadow: "none",
                        }}
                    >
                        Schedule
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ScheduleExamForm