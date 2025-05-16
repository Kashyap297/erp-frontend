"use client"

import { useState } from "react"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const AttendanceStatus = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  // Mock data for students
  const students = Array(13).fill({
    id: "2024001",
    name: "Emma Rodriguez",
    grade: "11th - A",
    parentContact: "+91 00000 00000",
    attendance: "91%",
    history: ["present", "present", "present", "absent", "no-record"],
  })

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleFilterClose = () => {
    setAnchorEl(null)
  }

  const handleResetFilter = () => {
    setSearchTerm("")
    // Reset any other filter states here
  }

  // Function to render attendance history dots
  const renderAttendanceDots = (history) => {
    return (
      <Box sx={{ display: "flex", gap: 0.5 ,}}>
        {history.map((status, index) => (
          <Box
            key={index}
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              bgcolor:
                status === "present"
                  ? "#4caf50" // Green for present
                  : status === "absent"
                    ? "#f44336" // Red for absent
                    : "#bdbdbd", // Gray for no record
            }}
          />
        ))}
      </Box>
    )
  }

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        {/* Search field */}
        <TextField
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 auto" },
            maxWidth: { xs: "100%", sm: 400 },
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: "#f5f5f5",
              "& fieldset": {
                borderColor: "#e0e0e0",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Filter button */}
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleFilterClick}
          sx={{
            borderRadius: 2,
            borderColor: "#e0e0e0",
            color: "text.primary",
            bgcolor: "#f5f5f5",
            "&:hover": {
              bgcolor: "#e0e0e0",
              borderColor: "#bdbdbd",
            },
            minWidth: 100,
          }}
        >
          Filter
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleFilterClose}>
          <MenuItem onClick={handleFilterClose}>Grade</MenuItem>
          <MenuItem onClick={handleFilterClose}>Attendance</MenuItem>
          <MenuItem onClick={handleFilterClose}>Date</MenuItem>
        </Menu>

        {/* Reset Filter button */}
        <Button
          variant="outlined"
          onClick={handleResetFilter}
          sx={{
            borderRadius: 2,
            borderColor: "#e0e0e0",
            color: "text.primary",
            bgcolor: "#f5f5f5",
            "&:hover": {
              bgcolor: "#e0e0e0",
              borderColor: "#bdbdbd",
            },
            minWidth: 120,
          }}
        >
          Reset Filter
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "medium" }}>Student ID</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Student Name</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Grade</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Parent Contact</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Attendance</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>History (Last Week)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.parentContact}</TableCell>
                <TableCell>{student.attendance}</TableCell>
                <TableCell>{renderAttendanceDots(student.history)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default AttendanceStatus