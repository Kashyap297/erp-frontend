"use client"

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
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
} from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import EditIcon from "@mui/icons-material/Edit"
import AddIcon from "@mui/icons-material/Add"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SubjectIcon from "@mui/icons-material/Subject"

const TimeTableScheduling = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const [selectedTeacher, setSelectedTeacher] = useState("")
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedSection, setSelectedSection] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [activeDay, setActiveDay] = useState(0)

  // Days of the week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Time slots - Define this BEFORE generateTimetableData
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
  function generateTimetableData() {
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

  // State to track timetable data - Initialize AFTER the function is defined
  const [timetableData, setTimetableData] = useState(generateTimetableData())

  const handleDayChange = (event, newValue) => {
    setActiveDay(newValue)
  }

  // Handle click on empty cell (+ icon)
  const handleAddClass = (timeSlot, day) => {
    console.log(`Adding class at ${timeSlot} on ${day}`)
    const updatedData = { ...timetableData }
    updatedData[timeSlot][day] = { type: "dropdown" }
    setTimetableData(updatedData)
  }

  // Handle edit of existing class
  const handleEditClass = (timeSlot, day) => {
    console.log(`Editing class at ${timeSlot} on ${day}`)
    const updatedData = { ...timetableData }
    const currentCell = updatedData[timeSlot][day]

    // Save the current values to restore them in the dropdown
    updatedData[timeSlot][day] = {
      type: "dropdown",
      subject: currentCell.subject || "English",
      class: currentCell.class?.replace("Class ", "") || "4B",
    }

    setTimetableData(updatedData)
  }

  // Handle subject selection from dropdown
  const handleSubjectChange = (timeSlot, day, subject) => {
    console.log(`Changing subject to ${subject} at ${timeSlot} on ${day}`)
    const updatedData = { ...timetableData }
    const currentCell = updatedData[timeSlot][day]

    // Update the subject while keeping other properties
    if (currentCell.type === "dropdown") {
      currentCell.subject = subject
    }

    setTimetableData(updatedData)
  }

  // Handle class input change
  const handleClassChange = (timeSlot, day, className) => {
    console.log(`Changing class to ${className} at ${timeSlot} on ${day}`)
    const updatedData = { ...timetableData }
    const currentCell = updatedData[timeSlot][day]

    // Update the class while keeping other properties
    if (currentCell.type === "dropdown") {
      currentCell.class = className
    }

    setTimetableData(updatedData)
  }

  // Handle save after selecting subject and class
  const handleSaveClass = (timeSlot, day) => {
    console.log(`Saving class at ${timeSlot} on ${day}`)
    const updatedData = { ...timetableData }
    const currentCell = updatedData[timeSlot][day]

    if (currentCell.type === "dropdown") {
      updatedData[timeSlot][day] = {
        type: "class",
        subject: currentCell.subject || "English",
        class: `Class ${currentCell.class || "4B"}`,
      }
    }

    setTimetableData(updatedData)
  }

  // Render a timetable cell based on its type
  const renderCell = (cellData, timeSlot, day, isMobileView = false) => {
    if (!cellData) {
      console.error(`No cell data for ${timeSlot} on ${day}`)
      return null
    }

    switch (cellData.type) {
      case "empty":
        return (
          <Box
            sx={{
              height: isMobileView ? "60px" : "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#a9b4c0",
              border: "2px dashed #6e7a8a",
              borderRadius: "4px",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={() => handleAddClass(timeSlot, day)}
          >
            <AddIcon sx={{ color: "white", fontSize: isMobileView ? "20px" : "24px" }} />
          </Box>
        )

      case "lunch":
        return (
          <Box
            sx={{
              height: isMobileView ? "60px" : "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0091ea",
              color: "white",
              borderRadius: "4px",
              width: "100%",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: isMobileView ? "0.875rem" : "1rem" }}>
              Lunch
            </Typography>
          </Box>
        )

      case "dropdown":
        return (
          <Box
            sx={{
              height: isMobileView ? "auto" : "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#a9b4c0",
              borderRadius: "4px",
              padding: isMobileView ? "6px" : "8px",
              width: "100%",
              position: "relative", // Added to ensure proper stacking context
              zIndex: 1, // Added to ensure dropdown appears above other elements
            }}
          >
            <Box sx={{ display: "flex", width: "100%", mb: isMobileView ? 0.5 : 1 }}>
              <FormControl fullWidth size="small" sx={{ zIndex: 2 }}>
                {" "}
                {/* Increased z-index */}
                <Select
                  value={cellData.subject || "English"}
                  onChange={(e) => {
                    // Direct function call instead of using the handler
                    const newSubject = e.target.value
                    console.log(`Direct select change: ${newSubject} at ${timeSlot} on ${day}`)

                    const updatedData = { ...timetableData }
                    const currentCell = updatedData[timeSlot][day]

                    if (currentCell.type === "dropdown") {
                      currentCell.subject = newSubject
                    }

                    setTimetableData(updatedData)
                  }}
                  displayEmpty
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        zIndex: 9999, // Very high z-index to ensure it's on top
                      },
                    },
                  }}
                  sx={{
                    backgroundColor: "white",
                    ".MuiOutlinedInput-notchedOutline": { border: "none" },
                    fontSize: isMobileView ? "12px" : "14px",
                    height: isMobileView ? "24px" : "30px",
                    zIndex: 2, // Added to ensure dropdown appears above other elements
                  }}
                  startAdornment={
                    !isMobileView && (
                      <InputAdornment position="start">
                        <Typography variant="caption" sx={{ color: "#666", fontSize: "12px" }}>
                          Select subject
                        </Typography>
                      </InputAdornment>
                    )
                  }
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Math">Math</MenuItem>
                  <MenuItem value="Science">Science</MenuItem>
                  <MenuItem value="History">History</MenuItem>
                  <MenuItem value="Geography">Geography</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", width: "100%", gap: 1 }}>
              <TextField
                size="small"
                placeholder="Class"
                value={cellData.class || "4B"}
                onChange={(e) => {
                  // Direct function call instead of using the handler
                  const newClass = e.target.value
                  console.log(`Direct class change: ${newClass} at ${timeSlot} on ${day}`)

                  const updatedData = { ...timetableData }
                  const currentCell = updatedData[timeSlot][day]

                  if (currentCell.type === "dropdown") {
                    currentCell.class = newClass
                  }

                  setTimetableData(updatedData)
                }}
                sx={{
                  flex: 1,
                  backgroundColor: "white",
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& input": {
                    fontSize: isMobileView ? "12px" : "14px",
                    height: isMobileView ? "10px" : "14px",
                    padding: isMobileView ? "6px" : "8px",
                  },
                }}
              />
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  width: isMobileView ? "24px" : "30px",
                  height: isMobileView ? "24px" : "30px",
                }}
                onClick={() => handleSaveClass(timeSlot, day)}
              >
                <EditIcon sx={{ fontSize: isMobileView ? "14px" : "16px", color: "#0091ea" }} />
              </IconButton>
            </Box>
          </Box>
        )

      case "class":
        return (
          <Box
            sx={{
              height: isMobileView ? "60px" : "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#0091ea",
              color: "white",
              borderRadius: "4px",
              padding: isMobileView ? "8px" : "12px",
              position: "relative",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", mb: 0.5 }}>
              <Typography variant="body1" sx={{ fontWeight: 500, fontSize: isMobileView ? "0.875rem" : "1rem" }}>
                {cellData.subject}
              </Typography>
              <IconButton
                size="small"
                sx={{
                  color: "white",
                  padding: 0,
                  position: "absolute",
                  top: isMobileView ? "4px" : "8px",
                  right: isMobileView ? "4px" : "8px",
                }}
                onClick={() => handleEditClass(timeSlot, day)}
              >
                <EditIcon sx={{ fontSize: isMobileView ? "14px" : "18px" }} />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ fontSize: isMobileView ? "11px" : "13px" }}>
              {cellData.class}
            </Typography>
          </Box>
        )

      default:
        console.error(`Unknown cell type: ${cellData.type}`)
        return null
    }
  }

  // Mobile view - single day at a time
  const renderMobileView = () => (
    <>
      <Tabs
        value={activeDay}
        onChange={handleDayChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 2,
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTab-root": {
            minWidth: "auto",
            px: 2,
          },
        }}
      >
        {days.map((day, index) => (
          <Tab key={day} label={day} id={`tab-${index}`} />
        ))}
      </Tabs>

      <Box sx={{ mb: 3 }}>
        {timeSlots.map((time, timeIndex) => (
          <Box
            key={time}
            sx={{
              display: "flex",
              mb: 2,
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "35%", pr: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: time === "Lunch" ? "bold" : "normal",
                  fontSize: "0.875rem",
                }}
              >
                {time}
              </Typography>
            </Box>
            <Box sx={{ width: "65%" }}>
              {renderCell(timetableData[time][days[activeDay]], time, days[activeDay], true)}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )

  // Tablet view - scrollable horizontal table
  const renderTabletView = () => (
    <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden" }}>
      <Box sx={{ overflowX: "auto" }}>
        <Box sx={{ minWidth: 700, display: "flex", flexDirection: "column" }}>
          {/* Header row with days */}
          <Box sx={{ display: "flex", borderBottom: "2px solid #e0e0e0" }}>
            {/* Empty cell for time column header */}
            <Box
              sx={{
                width: "18%",
                p: 1.5,
                fontWeight: "bold",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Time
              </Typography>
            </Box>

            {/* Day headers */}
            {days.map((day, index) => (
              <Box
                key={day}
                sx={{
                  width: `${82 / days.length}%`,
                  p: 1.5,
                  textAlign: "center",
                  borderRight: index < days.length - 1 ? "1px solid #e0e0e0" : "none",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
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
                  width: "18%",
                  p: 1.5,
                  borderRight: "1px solid #e0e0e0",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: time === "Lunch" ? "bold" : "normal" }}>
                  {time}
                </Typography>
              </Box>

              {/* Class cells for each day */}
              {days.map((day, dayIndex) => (
                <Box
                  key={`${day}-${time}`}
                  sx={{
                    width: `${82 / days.length}%`,
                    p: 0.75,
                    borderRight: dayIndex < days.length - 1 ? "1px solid #e0e0e0" : "none",
                    position: "relative", // Added to ensure proper stacking context
                  }}
                >
                  {/* Fixed: Pass time and day parameters to renderCell */}
                  {renderCell(timetableData[time][day], time, day, false)}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  )

  // Desktop view - full table
  const renderDesktopView = () => (
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
                    position: "relative", // Added to ensure proper stacking context
                  }}
                >
                  {renderCell(timetableData[time][day], time, day, false)}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  )

  return (
    <Box sx={{ mt: 2, margin: "0 auto", px: { xs: 1, sm: 2, md: 0 } }}>
      {/* Filter Section */}
      <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 400, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
            Select Teacher
          </Typography>
          <TextField
            fullWidth
            placeholder="Select Teacher"
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            size={isMobile ? "small" : "medium"}
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

        <Grid item xs={6} sm={6} md={3}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 400, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
            Class
          </Typography>
          <FormControl fullWidth>
            <Select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              displayEmpty
              size={isMobile ? "small" : "medium"}
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
                  return (
                    <Typography sx={{ color: "text.secondary", fontSize: isMobile ? "0.875rem" : "1rem" }}>
                      Class
                    </Typography>
                  )
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

        <Grid item xs={6} sm={6} md={3}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 400, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
            Sec
          </Typography>
          <FormControl fullWidth>
            <Select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              displayEmpty
              size={isMobile ? "small" : "medium"}
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
                  return (
                    <Typography sx={{ color: "text.secondary", fontSize: isMobile ? "0.875rem" : "1rem" }}>
                      Sec
                    </Typography>
                  )
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

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 400, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
            Select Date
          </Typography>
          <TextField
            fullWidth
            placeholder="Select Date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            size={isMobile ? "small" : "medium"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayIcon sx={{ fontSize: isMobile ? "1.25rem" : "1.5rem" }} />
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
      <Typography
        variant={isMobile ? "subtitle1" : "h6"}
        sx={{
          mb: { xs: 1.5, sm: 2, md: 3 },
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <SubjectIcon sx={{ mr: 1, display: { xs: "inline", sm: "none" } }} />
        Weekly Timetable
      </Typography>

      {/* Responsive Timetable Views */}
      {isMobile ? renderMobileView() : isTablet ? renderTabletView() : renderDesktopView()}
    </Box>
  )
}

export default TimeTableScheduling
