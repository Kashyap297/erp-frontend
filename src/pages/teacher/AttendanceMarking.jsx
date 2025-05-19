import { useState } from "react"
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Grid,
  Divider,
  Stack,
} from "@mui/material"

const AttendanceMarking = () => {
  // Mock data for students
  const initialStudents = [
    {
      id: 1,
      rollNo: "01",
      name: "Alice Miller",
      isPresent: null,
      history: ["present", "present", "present", "absent", "no-record"],
    },
    {
      id: 2,
      rollNo: "02",
      name: "Alice Miller",
      isPresent: null,
      history: ["present", "present", "absent", "present", "no-record"],
    },
    {
      id: 3,
      rollNo: "03",
      name: "Alice Miller",
      isPresent: null,
      history: ["present", "present", "present", "absent", "no-record"],
    },
    {
      id: 4,
      rollNo: "04",
      name: "Alice Miller",
      isPresent: null,
      history: ["present", "absent", "present", "present", "no-record"],
    },
    {
      id: 5,
      rollNo: "05",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 6,
      rollNo: "06",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 7,
      rollNo: "07",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 8,
      rollNo: "08",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 9,
      rollNo: "09",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 10,
      rollNo: "10",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 11,
      rollNo: "11",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 12,
      rollNo: "12",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 13,
      rollNo: "13",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 14,
      rollNo: "14",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 15,
      rollNo: "15",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 16,
      rollNo: "16",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 17,
      rollNo: "17",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
    {
      id: 18,
      rollNo: "18",
      name: "Alice Miller",
      isPresent: null,
      history: ["absent", "present", "present", "absent", "no-record"],
    },
  ]

  const [students, setStudents] = useState(initialStudents)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

  // Mark student as present or absent
  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          return { ...student, isPresent: status }
        }
        return student
      }),
    )
  }

  // Mark all students as present
  const markAllPresent = () => {
    setStudents(
      students.map((student) => {
        return { ...student, isPresent: true }
      }),
    )
  }

  // Submit attendance
  const submitAttendance = () => {
    console.log("Submitting attendance:", students)
    // Here you would typically send the data to your backend
    alert("Attendance submitted successfully!")
  }

  // Render attendance history dots
  const renderHistoryDots = (history) => (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {history.map((status, index) => (
        <Box
          key={index}
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            bgcolor: status === "present" ? "#1CA401" : status === "absent" ? "#D80303" : "#bdbdbd",
          }}
        />
      ))}
    </Box>
  )

  // Render attendance buttons
  const renderAttendanceButtons = (student) => (
    <Box sx={{ display: "flex", gap: 1, flexDirection: isMobile ? "column" : "row", width: isMobile ? "100%" : "auto" }}>
      <Button
        variant={student.isPresent === true ? "contained" : "outlined"}
        color="success"
        size={isMobile ? "medium" : "small"}
        onClick={() => markAttendance(student.id, true)}
        fullWidth={isMobile}
        sx={{
          borderRadius: "5px",
          textTransform: "none",
          minWidth: isMobile ? "100%" : 100,
          bgcolor: student.isPresent === true ? "#1CA401" : "transparent",
          color: student.isPresent === true ? "white" : "#2DB500",
          borderColor: "#1CA401",
        }}
      >
        Present
      </Button>
      <Button
        variant={student.isPresent === false ? "contained" : "outlined"}
        color="error"
        size={isMobile ? "medium" : "small"}
        onClick={() => markAttendance(student.id, false)}
        fullWidth={isMobile}
        sx={{
          borderRadius: "5px",
          textTransform: "none",
          minWidth: isMobile ? "100%" : 100,
          bgcolor: student.isPresent === false ? "#D80303" : "transparent",
          color: student.isPresent === false ? "white" : "#EB2E2E",
          borderColor: "#EB2E2E",
        }}
      >
        Absent
      </Button>
    </Box>
  )

  // Mobile view - card layout
  const renderMobileView = () => (
    <Stack spacing={2}>
      {students.map((student) => (
        <Card key={student.id} elevation={1} sx={{ borderRadius: 1 }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="subtitle2" fontWeight="bold">
                  Roll No.
                </Typography>
                <Typography variant="body2">{student.rollNo}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" fontWeight="bold">
                  Student Name
                </Typography>
                <Typography variant="body2">{student.name}</Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                  Attendance
                </Typography>
                {renderAttendanceButtons(student)}
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                  History (Last Week)
                </Typography>
                {renderHistoryDots(student.history)}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )

  // Tablet/Desktop view - table layout
  const renderTableView = () => (
    <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 1 }}>
      <Table sx={{ minWidth: isTablet ? 500 : 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", width: isTablet ? "15%" : "10%" }}>Roll No.</TableCell>
            <TableCell sx={{ fontWeight: "bold", width: isTablet ? "20%" : "25%" }}>Student Name</TableCell>
            <TableCell sx={{ fontWeight: "bold", width: isTablet ? "35%" : "35%" }}>Attendance</TableCell>
            <TableCell sx={{ fontWeight: "bold", width: isTablet ? "30%" : "30%" }}>History (Last Week)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell sx={{ borderBottom: "none" }}>{student.rollNo}</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>{student.name}</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>{renderAttendanceButtons(student)}</TableCell>
              <TableCell sx={{ borderBottom: "none" }}>{renderHistoryDots(student.history)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  return (
    <Box sx={{ width: "100%", mt: 0, px: { xs: 1, sm: 2, md: 3 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mb: 3,
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h5" component="h1" fontWeight="medium" sx={{ mb: { xs: 1, sm: 0 } }}>
          Today's Attendance: Class 8A
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            variant="contained"
            onClick={markAllPresent}
            fullWidth={isMobile}
            sx={{
              textTransform: "none",
              borderRadius: "5px",
              background: "#1CA401",
              "&:hover": { background: "#168c01" },
            }}
          >
            Mark all present
          </Button>
          <Button
            variant="contained"
            onClick={submitAttendance}
            fullWidth={isMobile}
            sx={{
              textTransform: "none",
              borderRadius: "5px",
              background: "#1399FF",
              "&:hover": { background: "#0f7fd8" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {isMobile ? renderMobileView() : renderTableView()}
    </Box>
  )
}

export default AttendanceMarking