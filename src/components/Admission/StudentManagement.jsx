"use client"

import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  Paper,
  Dialog,
  DialogContent,
  Avatar,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import DescriptionIcon from "@mui/icons-material/Description"
import { useNavigate } from "react-router-dom"

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [selectedStudents, setSelectedStudents] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [uploadedTC, setUploadedTC] = useState(null)
  const [uploadedResult, setUploadedResult] = useState(null)
  const [uploadedCC, setUploadedCC] = useState(null)
  const navigate = useNavigate()

  // Mock student data with more details
  const students = [
    {
      id: 1,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Active",
      gender: "Male",
      fatherName: "Westlie Simons",
      motherName: "Westlie Simons",
      contactNumber: "+91 00000 00000",
      alternateNumber: "+91 00000 00000",
      email: "dsfvhsdfsd@gmail.com",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DblgKEdxKm1PWqHiTcKY9bzonGBOGZ.png",
    },
    {
      id: 2,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "On leave",
      gender: "Male",
      fatherName: "Westlie Simons",
      motherName: "Westlie Simons",
      contactNumber: "+91 00000 00000",
      alternateNumber: "+91 00000 00000",
      email: "dsfvhsdfsd@gmail.com",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DblgKEdxKm1PWqHiTcKY9bzonGBOGZ.png",
    },
    {
      id: 3,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Pass out",
      gender: "Male",
      fatherName: "Westlie Simons",
      motherName: "Westlie Simons",
      contactNumber: "+91 00000 00000",
      alternateNumber: "+91 00000 00000",
      email: "dsfvhsdfsd@gmail.com",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DblgKEdxKm1PWqHiTcKY9bzonGBOGZ.png",
    },
    {
      id: 4,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Active",
      gender: "Male",
      fatherName: "Westlie Simons",
      motherName: "Westlie Simons",
      contactNumber: "+91 00000 00000",
      alternateNumber: "+91 00000 00000",
      email: "dsfvhsdfsd@gmail.com",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DblgKEdxKm1PWqHiTcKY9bzonGBOGZ.png",
    },
    {
      id: 5,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Active",
      gender: "Male",
      fatherName: "Westlie Simons",
      motherName: "Westlie Simons",
      contactNumber: "+91 00000 00000",
      alternateNumber: "+91 00000 00000",
      email: "dsfvhsdfsd@gmail.com",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DblgKEdxKm1PWqHiTcKY9bzonGBOGZ.png",
    },
    {
      id: 6,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Active",
      gender: "Male",
      fatherName: "Westlie Simons",
      motherName: "Westlie Simons",
      contactNumber: "+91 00000 00000",
      alternateNumber: "+91 00000 00000",
      email: "dsfvhsdfsd@gmail.com",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DblgKEdxKm1PWqHiTcKY9bzonGBOGZ.png",
    },
  ]

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClassChange = (e) => {
    setClassFilter(e.target.value)
  }

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value)
  }

  const resetFilters = () => {
    setSearchTerm("")
    setClassFilter("")
    setStatusFilter("")
  }

  const handleCheckboxChange = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId],
    )
  }

  const handleViewDetail = (student) => {
    setSelectedStudent(student)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedStudent(null)
    setUploadedTC(null)
    setUploadedResult(null)
    setUploadedCC(null)
  }

  const handleAccept = () => {
    console.log(`Accepted student ${selectedStudent?.id}`)
    handleCloseModal()
  }

  const handleReject = () => {
    console.log(`Rejected student ${selectedStudent?.id}`)
    handleCloseModal()
  }

  const handleFileUpload = (type, e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const fileUrl = URL.createObjectURL(file)

      switch (type) {
        case "tc":
          setUploadedTC(fileUrl)
          break
        case "result":
          setUploadedResult(fileUrl)
          break
        case "cc":
          setUploadedCC(fileUrl)
          break
        default:
          break
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#4CAF50" // Green
      case "On leave":
        return "#FF5722" // Orange/Red
      case "Pass out":
        return "#F44336" // Red
      default:
        return "#757575" // Gray
    }
  }

  // Filter students based on search and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = !classFilter || classFilter === "All Classes"
    const matchesStatus = !statusFilter || student.status === statusFilter

    return matchesSearch && matchesClass && matchesStatus
  })

  return (
    <Box sx={{ mt: 2, mx: "auto" }}>
      {/* Search and Filter Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {/* Search Field */}
          <TextField
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 auto" },
              bgcolor: "#f0f0f0",
              borderRadius: "10px",
              background: "#D9D9D9C2",
              border: "1px solid #d0d0d0",
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                "& fieldset": { border: "none" },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Class Filter */}
          <FormControl
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 auto" },
              bgcolor: "#f0f0f0",
              borderRadius: "10px",
              background: "#D9D9D9C2",
              border: "1px solid #d0d0d0",
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                "& fieldset": { border: "none" },
              },
            }}
          >
            <Select
              value={classFilter}
              onChange={handleClassChange}
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => {
                if (!selected) {
                  return <Typography color="text.secondary">Class</Typography>
                }
                return selected
              }}
            >
              <MenuItem value="">All Classes</MenuItem>
              <MenuItem value="Class 1">Class 1</MenuItem>
              <MenuItem value="Class 2">Class 2</MenuItem>
              <MenuItem value="Class 3">Class 3</MenuItem>
            </Select>
          </FormControl>

          {/* Status Filter */}
          <FormControl
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 auto" },
              bgcolor: "#f0f0f0",
              background: "#D9D9D9C2",
              borderRadius: "10px",
              border: "1px solid #d0d0d0",
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                "& fieldset": { border: "none" },
              },
            }}
          >
            <Select
              value={statusFilter}
              onChange={handleStatusChange}
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => {
                if (!selected) {
                  return <Typography color="text.secondary">Status</Typography>
                }
                return selected
              }}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="On leave">On leave</MenuItem>
              <MenuItem value="Pass out">Pass out</MenuItem>
            </Select>
          </FormControl>

          {/* Reset Filter Button */}
          <Button
            variant="outlined"
            onClick={resetFilters}
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 auto" },
              borderColor: "#d0d0d0",
              borderRadius: "10px",
              background: "#D9D9D9C2",
              color: "text.secondary",
              "&:hover": {
                bgcolor: "#e0e0e0",
                borderColor: "#bdbdbd",
              },
              textTransform: "none",
              height: "58px",
            }}
          >
            Reset Filter
          </Button>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/admission/student-registration/form")}
          sx={{
            background: "#1399FF",

            "&:hover": {
              bgcolor: "#1976d2",
            },
            textTransform: "none",
            borderRadius: "10px",
            py: 1.5,
            px: 3,
          }}
        >
          Add Student
        </Button>
      </Box>

      {/* Student List */}
      <Box sx={{ mt: 3 }}>
        {filteredStudents.map((student) => (
          <Paper
            key={student.id}
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              mb: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
            }}
          >
            {/* Checkbox */}
            <Checkbox
              checked={selectedStudents.includes(student.id)}
              onChange={() => handleCheckboxChange(student.id)}
              sx={{ mr: 1 }}
            />

            {/* Student Image */}
            <Box
              component="img"
              src={student.image}
              alt={student.name}
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                objectFit: "cover",
                mr: 2,
              }}
            />

            {/* Content Container with space-between */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Student Info */}
              <Box>
                <Typography variant="body1" fontWeight="medium">
                  Name - {student.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date - {student.date}
                </Typography>
              </Box>

              {/* Status */}
              <Typography
                variant="body2"
                sx={{
                  color: getStatusColor(student.status),
                }}
              >
                {student.status}
              </Typography>

              {/* View Detail Link */}
              <Button
                onClick={() => handleViewDetail(student)}
                sx={{
                  color: "#2196f3",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                View detail
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Student Details Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        PaperProps={{
          sx: {
            width: "500px",
            maxWidth: "95%",
            borderRadius: "8px",
            border: "2px solid #2196f3",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            p: 0,
            overflow: "hidden",
          },
        }}
      >
        {selectedStudent && (
          <DialogContent sx={{ p: 0 }}>
            {/* Student Basic Info Section with Avatar */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 3,
                pb: 2,
                bgcolor: "#fff",
              }}
            >
              <Avatar
                src={selectedStudent.image}
                alt={selectedStudent.name}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                  border: "3px solid #fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Name - {selectedStudent.name}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                Date - {selectedStudent.date}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                Gender - {selectedStudent.gender}
              </Typography>
            </Box>

            {/* Father and Mother Info */}
            <Box sx={{ px: 3, py: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: "medium", mb: 1 }}>
                Father Name - {selectedStudent.fatherName}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Contact Number - {selectedStudent.contactNumber}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "medium", mb: 1 }}>
                Mother Name - {selectedStudent.motherName}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Alternate Number - {selectedStudent.alternateNumber}
              </Typography>
            </Box>

            {/* Email and Address */}
            <Box sx={{ px: 3, py: 1 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Email - {selectedStudent.email}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Address - {selectedStudent.address}
              </Typography>
            </Box>

            {/* Document Upload Sections */}
            <Box sx={{ px: 3, py: 1 }}>
              {/* Upload TC */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Upload TC
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<DescriptionIcon />}
                  sx={{
                    bgcolor: "#f5f5f5",
                    borderColor: "#e0e0e0",
                    color: "text.secondary",
                    textTransform: "none",
                    borderRadius: "4px",
                    px: 2,
                    py: 0.5,
                    fontSize: "0.75rem",
                  }}
                >
                  Document
                  <input type="file" hidden onChange={(e) => handleFileUpload("tc", e)} />
                </Button>
                {uploadedTC && (
                  <Typography variant="caption" sx={{ ml: 1, color: "success.main" }}>
                    File uploaded
                  </Typography>
                )}
              </Box>

              {/* Upload Result */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Upload Result
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<DescriptionIcon />}
                  sx={{
                    bgcolor: "#f5f5f5",
                    borderColor: "#e0e0e0",
                    color: "text.secondary",
                    textTransform: "none",
                    borderRadius: "4px",
                    px: 2,
                    py: 0.5,
                    fontSize: "0.75rem",
                  }}
                >
                  Document
                  <input type="file" hidden onChange={(e) => handleFileUpload("result", e)} />
                </Button>
                {uploadedResult && (
                  <Typography variant="caption" sx={{ ml: 1, color: "success.main" }}>
                    File uploaded
                  </Typography>
                )}
              </Box>

              {/* Upload CC */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Upload CC
                </Typography>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<DescriptionIcon />}
                  sx={{
                    bgcolor: "#f5f5f5",
                    borderColor: "#e0e0e0",
                    color: "text.secondary",
                    textTransform: "none",
                    borderRadius: "4px",
                    px: 2,
                    py: 0.5,
                    fontSize: "0.75rem",
                  }}
                >
                  Document
                  <input type="file" hidden onChange={(e) => handleFileUpload("cc", e)} />
                </Button>
                {uploadedCC && (
                  <Typography variant="caption" sx={{ ml: 1, color: "success.main" }}>
                    File uploaded
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                p: 2,
                pt: 0,
                mb: 1,
              }}
            >
              <Button
                variant="contained"
                onClick={handleAccept}
                sx={{
                  bgcolor: "#4caf50",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "4px",
                  px: 3,
                  py: 0.75,
                  "&:hover": {
                    bgcolor: "#388e3c",
                  },
                  minWidth: "100px",
                }}
              >
                Accept
              </Button>
              <Button
                variant="contained"
                onClick={handleReject}
                sx={{
                  bgcolor: "#f44336",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "4px",
                  px: 3,
                  py: 0.75,
                  "&:hover": {
                    bgcolor: "#d32f2f",
                  },
                  minWidth: "100px",
                }}
              >
                Reject
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  )
}

export default StudentManagement
