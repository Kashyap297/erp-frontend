"use client"

import { useState } from "react"
import {
    Box,
    TextField,
    Button,
    Select,
    MenuItem,
    InputAdornment,
    Paper,
    Typography,
    Avatar,
    Grid,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const TeacherDirectory = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")

    // Mock data for teachers
    const teachers = Array(7).fill({
        name: "Esther Howard",
        employeeId: "#98216265",
        department: "Mathematics",
        qualification: "PhD Mathematics",
        email: "emily.johnson@school.edu",
        phone: "(555) 123-4567",
        subjects: "Algebra, Calculus",
        image: "/teacher-profile.jpg",
    })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleResetFilter = () => {
        setClassFilter("")
    }

    return (
        <Box sx={{ width: "100%" }}>
            {/* Search and Filter Row */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                {/* Search Field */}
                <TextField
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                    sx={{
                        flex: 1,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                            bgcolor: "#e0e0e0",
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
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Class Filter */}
                <Select
                    value={classFilter}
                    onChange={(e) => setClassFilter(e.target.value)}
                    displayEmpty
                    renderValue={() => "Class"}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                        width: 150,
                        borderRadius: 1,
                        bgcolor: "#e0e0e0",
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
                    <MenuItem value="">All Classes</MenuItem>
                    <MenuItem value="math101">Math 101</MenuItem>
                    <MenuItem value="math201">Math 201</MenuItem>
                    <MenuItem value="algebra">Algebra</MenuItem>
                    <MenuItem value="calculus">Calculus</MenuItem>
                </Select>

                {/* Reset Filter Button */}
                <Button
                    variant="outlined"
                    onClick={handleResetFilter}
                    sx={{
                        width: 150,
                        borderRadius: 1,
                        borderColor: "transparent",
                        color: "text.primary",
                        bgcolor: "#e0e0e0",
                        "&:hover": {
                            bgcolor: "#d5d5d5",
                            borderColor: "transparent",
                        },
                        textTransform: "none",
                    }}
                >
                    Reset Filter
                </Button>
            </Box>

            {/* Teacher List */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {teachers.map((teacher, index) => (
                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: "#f5f5f5",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {/* Teacher Avatar */}
                        <Avatar
                            src=""
                            alt={teacher.name}
                            sx={{ width: 80, height: 80, mr: 2 }}
                        />

                        {/* Teacher Information */}
                        <Grid container spacing={2}>
                            {/* Left Column */}
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: "medium", mb: 0.5 }}>
                                        Teacher Name: {teacher.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Employee ID: {teacher.employeeId}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Department: {teacher.department}
                                    </Typography>
                                    <Typography variant="body2">Qualification: {teacher.qualification}</Typography>
                                </Box>
                            </Grid>

                            {/* Right Column */}
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Email: {teacher.email}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Phone: {teacher.phone}
                                    </Typography>
                                    <Typography variant="body2">Subjects: {teacher.subjects}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Box>
        </Box>
    )
}

export default TeacherDirectory