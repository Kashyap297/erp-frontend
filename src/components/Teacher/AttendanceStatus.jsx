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
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Chip,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const AttendanceStatus = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

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
      <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 0.75, md: 1 } }}>
        {history.map((status, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: 12, sm: 16, md: 20 },
              height: { xs: 12, sm: 16, md: 20 },
              borderRadius: "50%",
              bgcolor:
                status === "present"
                  ? "#1CA401" // Updated green for present
                  : status === "absent"
                    ? "#D80303" // Updated red for absent
                    : "#bdbdbd", // Gray for no record
            }}
          />
        ))}
      </Box>
    )
  }

  // Mobile card view for each student
  const renderMobileStudentCard = (student, index) => (
    <Card key={index} sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Student ID</Typography>
            <Typography variant="body1">{student.id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Attendance</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>{student.attendance}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>{student.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Grade</Typography>
            <Typography variant="body1">{student.grade}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Parent Contact</Typography>
            <Typography variant="body1">{student.parentContact}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Typography variant="body2" color="text.secondary">History (Last Week)</Typography>
            {renderAttendanceDots(student.history)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

  return (
    <Box sx={{ width: "100%", p: { xs: 1, sm: 2 } }}>
      {/* Search and Filter Section */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {/* Search field */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "#D9D9D9C2",
                "& fieldset": {
                  borderColor: "#000",
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
        </Grid>

        {/* Filter buttons */}
        <Grid item xs={6} sm={3} md={2}>
          <Button
            fullWidth
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleFilterClick}
            sx={{
              borderRadius: 2,
              borderColor: "#000",
              color: "text.primary",
              bgcolor: "#D9D9D9C2",
              "&:hover": {
                bgcolor: "#e0e0e0",
                borderColor: "#bdbdbd",
              },
              height: '100%',
            }}
          >
            Filter
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleFilterClose}>
            <MenuItem onClick={handleFilterClose}>Grade</MenuItem>
            <MenuItem onClick={handleFilterClose}>Attendance</MenuItem>
            <MenuItem onClick={handleFilterClose}>Date</MenuItem>
          </Menu>
        </Grid>

        {/* Reset Filter button */}
        <Grid item xs={6} sm={3} md={2}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleResetFilter}
            sx={{
              borderRadius: 2,
              borderColor: "#000",
              color: "text.primary",
              bgcolor: "#D9D9D9C2",
              "&:hover": {
                bgcolor: "#e0e0e0",
                borderColor: "#bdbdbd",
              },
              height: '100%',
            }}
          >
            Reset Filter
          </Button>
        </Grid>
      </Grid>

      {/* Responsive Table/Card View */}
      {isMobile ? (
        // Mobile view - Cards
        <Box>
          {students.map((student, index) => renderMobileStudentCard(student, index))}
        </Box>
      ) : (
        // Tablet and Desktop view - Table
        <TableContainer 
          component={Paper} 
          elevation={0} 
          sx={{ 
            borderRadius: 1,
            overflowX: "auto"
          }}
        >
          <Table sx={{ minWidth: { sm: 650, md: 800 } }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap" }}>Student ID</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap" }}>Student Name</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap" }}>Grade</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap" }}>Parent Contact</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap" }}>Attendance</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap" }}>History (Last Week)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1.5, md: 2 }, fontSize: { sm: '0.875rem', md: '1rem' } }}>{student.id}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1.5, md: 2 }, fontSize: { sm: '0.875rem', md: '1rem' } }}>{student.name}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1.5, md: 2 }, fontSize: { sm: '0.875rem', md: '1rem' } }}>{student.grade}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1.5, md: 2 }, fontSize: { sm: '0.875rem', md: '1rem' } }}>{student.parentContact}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1.5, md: 2 }, fontSize: { sm: '0.875rem', md: '1rem' } }}>
                    <Chip 
                      label={student.attendance} 
                      size={isTablet ? "small" : "medium"}
                      sx={{ 
                        bgcolor: parseInt(student.attendance) > 90 ? '#e8f5e9' : '#ffebee',
                        color: parseInt(student.attendance) > 90 ? '#2e7d32' : '#c62828',
                        fontWeight: 'medium'
                      }} 
                    />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1.5, md: 2 } }}>{renderAttendanceDots(student.history)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}

export default AttendanceStatus