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
  const students = [
    {
      id: "2024001",
      name: "Emma Rodriguez",
      grade: "11th - A",
      parentContact: "+91 98765 43210",
      attendance: "91%",
      history: ["present", "present", "present", "absent", "no-record"],
    },
    {
      id: "2024002",
      name: "Aarav Mehta",
      grade: "11th - B",
      parentContact: "+91 99887 77665",
      attendance: "96%",
      history: ["present", "present", "present", "present", "present"],
    },
    {
      id: "2024003",
      name: "Sophia Singh",
      grade: "11th - A",
      parentContact: "+91 98760 12345",
      attendance: "89%",
      history: ["present", "absent", "present", "present", "present"],
    },
    {
      id: "2024004",
      name: "Rohan Patel",
      grade: "11th - C",
      parentContact: "+91 99001 22334",
      attendance: "85%",
      history: ["absent", "present", "no-record", "present", "present"],
    },
    {
      id: "2024005",
      name: "Mia Fernandes",
      grade: "11th - B",
      parentContact: "+91 87654 32109",
      attendance: "94%",
      history: ["present", "present", "present", "present", "absent"],
    },
    {
      id: "2024006",
      name: "Kabir Sharma",
      grade: "11th - A",
      parentContact: "+91 93456 78901",
      attendance: "88%",
      history: ["absent", "absent", "present", "present", "no-record"],
    },
    {
      id: "2024007",
      name: "Olivia Thomas",
      grade: "11th - C",
      parentContact: "+91 99876 54123",
      attendance: "90%",
      history: ["present", "present", "absent", "present", "present"],
    },
    {
      id: "2024008",
      name: "Yash Desai",
      grade: "11th - B",
      parentContact: "+91 91234 56789",
      attendance: "87%",
      history: ["no-record", "present", "present", "absent", "present"],
    },
    {
      id: "2024009",
      name: "Isabella Khan",
      grade: "11th - A",
      parentContact: "+91 98989 12345",
      attendance: "93%",
      history: ["present", "absent", "present", "present", "present"],
    },
    {
      id: "2024010",
      name: "Arjun Iyer",
      grade: "11th - C",
      parentContact: "+91 97531 24680",
      attendance: "95%",
      history: ["present", "present", "present", "present", "present"],
    },
    {
      id: "2024011",
      name: "Zara Sheikh",
      grade: "11th - B",
      parentContact: "+91 99888 77665",
      attendance: "86%",
      history: ["absent", "no-record", "present", "present", "present"],
    },
    {
      id: "2024012",
      name: "Devansh Chauhan",
      grade: "11th - A",
      parentContact: "+91 93210 99887",
      attendance: "92%",
      history: ["present", "present", "present", "absent", "present"],
    },
    {
      id: "2024013",
      name: "Lily D’Souza",
      grade: "11th - C",
      parentContact: "+91 98712 45678",
      attendance: "90%",
      history: ["present", "absent", "present", "present", "no-record"],
    },
  ];


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
              width: { xs: 10, sm: 14, md: 16 }, // Smaller dots
              height: { xs: 10, sm: 14, md: 16 }, // Smaller dots
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
      <CardContent sx={{ p: 2 }}> {/* Reduced padding */}
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary">Student ID</Typography>
            <Typography variant="body2">{student.id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary">Attendance</Typography>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>{student.attendance}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 0.5 }}>
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>{student.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary">Grade</Typography>
            <Typography variant="body2">{student.grade}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="text.secondary">Parent Contact</Typography>
            <Typography variant="body2">{student.parentContact}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 0.5 }}>
            <Typography variant="caption" color="text.secondary">History (Last Week)</Typography>
            {renderAttendanceDots(student.history)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

  return (
    <Box sx={{ width: "100%", p: { xs: 1, sm: 2 } }}>
      {/* Search and Filter Section */}
      <Grid container spacing={1.5} sx={{ mb: 2 }}> {/* Reduced spacing */}
        {/* Search field */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small" // Smaller input size
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "#D9D9D9C2",
                "& fieldset": {
                  borderColor: "#000",
                },
                // Reduce height
                "& input": {
                  py: 1.5,
                  fontSize: '0.875rem',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" /> {/* Smaller icon */}
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
            endIcon={<KeyboardArrowDownIcon fontSize="small" />}
            onClick={handleFilterClick}
            size="small" // Smaller button
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
              fontSize: '0.875rem', // Smaller text
              py: 0.75, // Reduced padding
            }}
          >
            Filter
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleFilterClose}>
            <MenuItem dense onClick={handleFilterClose}>Grade</MenuItem> {/* Dense menu items */}
            <MenuItem dense onClick={handleFilterClose}>Attendance</MenuItem>
            <MenuItem dense onClick={handleFilterClose}>Date</MenuItem>
          </Menu>
        </Grid>

        {/* Reset Filter button */}
        <Grid item xs={6} sm={3} md={2}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleResetFilter}
            size="small" // Smaller button
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
              fontSize: '0.875rem', // Smaller text
              py: 0.75, // Reduced padding
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
          <Table size={isTablet ? "small" : "medium"} sx={{ minWidth: { sm: 650, md: 800 } }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap", py: 1.5, px: { sm: 1, md: 2 } }}>Student ID</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap", py: 1.5, px: { sm: 1, md: 2 } }}>Student Name</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap", py: 1.5, px: { sm: 1, md: 2 } }}>Grade</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap", py: 1.5, px: { sm: 1, md: 2 } }}>Parent Contact</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap", py: 1.5, px: { sm: 1, md: 2 } }}>Attendance</TableCell>
                <TableCell sx={{ fontWeight: "medium", whiteSpace: "nowrap", py: 1.5, px: { sm: 1, md: 2 } }}>History (Last Week)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1, md: 1.5 }, px: { sm: 1, md: 2 }, fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>{student.id}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1, md: 1.5 }, px: { sm: 1, md: 2 }, fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>{student.name}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1, md: 1.5 }, px: { sm: 1, md: 2 }, fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>{student.grade}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1, md: 1.5 }, px: { sm: 1, md: 2 }, fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>{student.parentContact}</TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1, md: 1.5 }, px: { sm: 1, md: 2 } }}>
                    <Chip
                      label={student.attendance}
                      size="small" // Always small chips
                      sx={{
                        bgcolor: parseInt(student.attendance) > 90 ? '#e8f5e9' : '#ffebee',
                        color: parseInt(student.attendance) > 90 ? '#2e7d32' : '#c62828',
                        fontWeight: 'medium',
                        height: 24, // Smaller height
                        '& .MuiChip-label': {
                          px: 1,
                          fontSize: '0.75rem', // Smaller text
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: { sm: 1, md: 1.5 }, px: { sm: 1, md: 2 } }}>{renderAttendanceDots(student.history)}</TableCell>
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