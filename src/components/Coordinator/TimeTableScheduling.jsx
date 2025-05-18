import { useState } from "react"
import {
    Box,
    Typography,
    TextField,
    Select,
    MenuItem,
    InputAdornment,
    Grid,
    Paper,
    IconButton,
    FormControl,
    OutlinedInput,
} from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import EditIcon from "@mui/icons-material/Edit"
import AddIcon from "@mui/icons-material/Add"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const TimeTableScheduling = () => {
    const [selectedTeacher, setSelectedTeacher] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [selectedSection, setSelectedSection] = useState("")
    const [selectedDate, setSelectedDate] = useState("")

    // Days of the week
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // Time slots
    const timeSlots = [
        "9:00 - 10:30",
        "10:30 - 12:00",
        "12:00 - 1:30",
        "Lunch",
        "2:30 - 4:00",
        "4:00 - 5:30",
        "5:30 - 7:00",
    ]

    // Generate timetable data
    const generateTimetableData = () => {
        const data = {}

        timeSlots.forEach((time) => {
            data[time] = {}

            days.forEach((day) => {
                if (time === "Lunch") {
                    data[time][day] = { type: "lunch" }
                } else if ((day === "Tuesday" && time !== "9:00 - 10:30") || (day === "Wednesday" && time !== "9:00 - 10:30")) {
                    data[time][day] = { type: "empty" }
                } else if (day === "Wednesday" && time === "9:00 - 10:30") {
                    data[time][day] = { type: "dropdown" }
                } else {
                    data[time][day] = {
                        type: "class",
                        subject: "English",
                        class: "Class 4B",
                    }
                }
            })
        })

        return data
    }

    const timetableData = generateTimetableData()

    // Render a timetable cell based on its type
    const renderCell = (cellData) => {
        switch (cellData.type) {
            case "empty":
                return (
                    <Box
                        sx={{
                            height: "80px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#a9b4c0",
                            border: "2px dashed #6e7a8a",
                            borderRadius: "4px",
                            width: "100%",
                        }}
                    >
                        <AddIcon sx={{ color: "white", fontSize: "24px" }} />
                    </Box>
                )

            case "lunch":
                return (
                    <Box
                        sx={{
                            height: "80px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#0091ea",
                            color: "white",
                            borderRadius: "4px",
                            width: "100%",
                        }}
                    >
                        <Typography variant="body1">Lunch</Typography>
                    </Box>
                )

            case "dropdown":
                return (
                    <Box
                        sx={{
                            height: "80px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#a9b4c0",
                            borderRadius: "4px",
                            padding: "8px",
                            width: "100%",
                        }}
                    >
                        <Box sx={{ display: "flex", width: "100%", mb: 1 }}>
                            <FormControl fullWidth size="small">
                                <Select
                                    value="English"
                                    displayEmpty
                                    sx={{
                                        backgroundColor: "white",
                                        ".MuiOutlinedInput-notchedOutline": { border: "none" },
                                        fontSize: "14px",
                                        height: "30px",
                                    }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Typography variant="caption" sx={{ color: "#666", fontSize: "12px" }}>
                                                Select subject
                                            </Typography>
                                        </InputAdornment>
                                    }
                                    IconComponent={KeyboardArrowDownIcon}
                                >
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="Math">Math</MenuItem>
                                    <MenuItem value="Science">Science</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
                            <TextField
                                size="small"
                                placeholder="Class"
                                value="4B"
                                sx={{
                                    flex: 1,
                                    backgroundColor: "white",
                                    ".MuiOutlinedInput-notchedOutline": { border: "none" },
                                    "& input": { fontSize: "14px", height: "14px", padding: "8px" },
                                }}
                            />
                            <IconButton
                                size="small"
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "4px",
                                    width: "30px",
                                    height: "30px",
                                }}
                            >
                                <EditIcon sx={{ fontSize: "16px", color: "#0091ea" }} />
                            </IconButton>
                        </Box>
                    </Box>
                )

            case "class":
                return (
                    <Box
                        sx={{
                            height: "80px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            backgroundColor: "#0091ea",
                            color: "white",
                            borderRadius: "4px",
                            padding: "12px",
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", mb: 0.5 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                {cellData.subject}
                            </Typography>
                            <IconButton
                                size="small"
                                sx={{
                                    color: "white",
                                    padding: 0,
                                    position: "absolute",
                                    top: "8px",
                                    right: "8px",
                                }}
                            >
                                <EditIcon sx={{ fontSize: "18px" }} />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" sx={{ fontSize: "13px" }}>
                            {cellData.class}
                        </Typography>
                    </Box>
                )

            default:
                return null
        }
    }

    return (
        <Box sx={{ mt: 2, margin: "0 auto" }}>
            {/* Filter Section */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={3}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 400 }}>
                        Select Teacher
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Select Teacher"
                        value={selectedTeacher}
                        onChange={(e) => setSelectedTeacher(e.target.value)}
                        sx={{
                            backgroundColor: "#e0e0e0",
                            borderRadius: "8px",
                            "& .MuiOutlinedInput-root": {
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
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 400 }}>
                        Class
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            displayEmpty
                            input={
                                <OutlinedInput
                                    sx={{
                                        backgroundColor: "#e0e0e0",
                                        borderRadius: "8px",
                                        "& fieldset": { borderColor: "transparent" },
                                    }}
                                />
                            }
                            renderValue={(selected) => {
                                if (!selected) {
                                    return <Typography sx={{ color: "text.secondary" }}>Class</Typography>
                                }
                                return selected
                            }}
                            IconComponent={KeyboardArrowDownIcon}
                        >
                            <MenuItem value="Class 1">Class 1</MenuItem>
                            <MenuItem value="Class 2">Class 2</MenuItem>
                            <MenuItem value="Class 3">Class 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 400 }}>
                        Sec
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            value={selectedSection}
                            onChange={(e) => setSelectedSection(e.target.value)}
                            displayEmpty
                            input={
                                <OutlinedInput
                                    sx={{
                                        backgroundColor: "#e0e0e0",
                                        borderRadius: "8px",
                                        "& fieldset": { borderColor: "transparent" },
                                    }}
                                />
                            }
                            renderValue={(selected) => {
                                if (!selected) {
                                    return <Typography sx={{ color: "text.secondary" }}>Sec</Typography>
                                }
                                return selected
                            }}
                            IconComponent={KeyboardArrowDownIcon}
                        >
                            <MenuItem value="A">A</MenuItem>
                            <MenuItem value="B">B</MenuItem>
                            <MenuItem value="C">C</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 400 }}>
                        Select Date
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Select Date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CalendarTodayIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            backgroundColor: "#e0e0e0",
                            borderRadius: "8px",
                            "& .MuiOutlinedInput-root": {
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
                </Grid>
            </Grid>

            {/* Timetable Heading */}
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
                Weekly Timetable
            </Typography>

            {/* Timetable using Grid layout instead of Table */}
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden" }}>
                <Box sx={{ overflowX: "auto" }}>
                    <Box sx={{ minWidth: 900, display: "flex", flexDirection: "column" }}>
                        {/* Header row with days */}
                        <Box sx={{ display: "flex", borderBottom: "2px solid #e0e0e0" }}>
                            {/* Empty cell for time column header */}
                            <Box
                                sx={{
                                    width: "15%",
                                    p: 2,
                                    fontWeight: "bold",
                                    borderRight: "1px solid #e0e0e0",
                                }}
                            >
                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                    Time
                                </Typography>
                            </Box>

                            {/* Day headers */}
                            {days.map((day, index) => (
                                <Box
                                    key={day}
                                    sx={{
                                        width: `${85 / days.length}%`,
                                        p: 2,
                                        textAlign: "center",
                                        borderRight: index < days.length - 1 ? "1px solid #e0e0e0" : "none",
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                        {day}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Time slots and class cells */}
                        {timeSlots.map((time, timeIndex) => (
                            <Box
                                key={time}
                                sx={{
                                    display: "flex",
                                    borderBottom: timeIndex < timeSlots.length - 1 ? "1px solid #e0e0e0" : "none",
                                }}
                            >
                                {/* Time slot */}
                                <Box
                                    sx={{
                                        width: "15%",
                                        p: 2,
                                        borderRight: "1px solid #e0e0e0",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: time === "Lunch" ? "bold" : "normal" }}>
                                        {time}
                                    </Typography>
                                </Box>

                                {/* Class cells for each day */}
                                {days.map((day, dayIndex) => (
                                    <Box
                                        key={`${day}-${time}`}
                                        sx={{
                                            width: `${85 / days.length}%`,
                                            p: 1,
                                            borderRight: dayIndex < days.length - 1 ? "1px solid #e0e0e0" : "none",
                                        }}
                                    >
                                        {renderCell(timetableData[time][day])}
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default TimeTableScheduling