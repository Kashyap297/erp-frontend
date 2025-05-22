
  import { useState } from "react"
  import {
    Box,
    Typography,
    IconButton,
    Divider,
    List,
    ListItem,
    Paper,
    Select,
    MenuItem,
    FormControl,
  } from "@mui/material"
  import NotificationsIcon from "@mui/icons-material/Notifications"
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

  const AttendanceTracker = () => {
    const [month, setMonth] = useState("November")

    // Mock data for attendance records
    const attendanceRecords = [
      { id: 1, date: "19/11/24", status: "Absent" },
      { id: 2, date: "19/11/24", status: "Absent" },
      { id: 3, date: "19/11/24", status: "Leave" },
      { id: 4, date: "19/11/24", status: "Leave" },
      { id: 5, date: "19/11/24", status: "Leave" },
      { id: 6, date: "19/11/24", status: "Leave" },
      { id: 7, date: "19/11/24", status: "Leave" },
      { id: 8, date: "19/11/24", status: "Leave" },
      { id: 9, date: "19/11/24", status: "Present" },
      { id: 10, date: "19/11/24", status: "Present" },
      { id: 11, date: "19/11/24", status: "Present" },
      { id: 12, date: "19/11/24", status: "Leave" },
      { id: 13, date: "19/11/24", status: "Leave" },
      { id: 14, date: "19/11/24", status: "Leave" },
      { id: 15, date: "19/11/24", status: "Present" },
    ]

    const handleMonthChange = (event) => {
      setMonth(event.target.value)
    }

    // Function to get status badge color
    const getStatusColor = (status) => {
      switch (status) {
        case "Present":
          return "#2e7d32" // Green
        case "Absent":
          return "#d32f2f" // Red
        case "Leave":
          return "#ed6c02" // Orange
        default:
          return "#757575" // Grey
      }
    }

    return (
      <Box sx={{ width: "100%", mt: 4, px: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h5" component="h1" fontWeight="regular">
            Attendance
          </Typography>
          <IconButton aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <FormControl sx={{ minWidth: 150 }}>
            <Select
              value={month}
              onChange={handleMonthChange}
              displayEmpty
              renderValue={() => "Select Month"}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                borderRadius: 8,
                height: 40,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                ".MuiOutlinedInput-notchedOutline": { border: "none" },
                bgcolor: "#f5f5f5",
                pl: 1,
              }}
            >
              <MenuItem value="January">January</MenuItem>
              <MenuItem value="February">February</MenuItem>
              <MenuItem value="March">March</MenuItem>
              <MenuItem value="April">April</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="June">June</MenuItem>
              <MenuItem value="July">July</MenuItem>
              <MenuItem value="August">August</MenuItem>
              <MenuItem value="September">September</MenuItem>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="December">December</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <List sx={{ p: 0, width: "100%" }}>
          {attendanceRecords.map((record) => (
            <ListItem
              key={record.id}
              sx={{
                p: 0,
                mb: 1.5,
                display: "block",
                width: "100%",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  borderRadius: 8,
                  border: "1px solid #e0e0e0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1.5,
                  px: 3,
                }}
              >
                <Typography variant="body1" color="#2196f3" fontWeight="medium">
                  {record.date}
                </Typography>
                <Box
                  sx={{
                    bgcolor: getStatusColor(record.status),
                    color: "white",
                    borderRadius: "16px",
                    px: 2,
                    py: 0.5,
                    fontSize: "0.875rem",
                    fontWeight: "medium",
                  }}
                >
                  {record.status}
                </Box>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }

  export default AttendanceTracker
