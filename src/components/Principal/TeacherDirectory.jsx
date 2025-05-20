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
    Container,
    Card,
    CardContent,
    Divider,
    useTheme,
    useMediaQuery,
    IconButton,
    Chip,
    Stack,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import SchoolIcon from "@mui/icons-material/School"
import BadgeIcon from "@mui/icons-material/Badge"
import WorkIcon from "@mui/icons-material/Work"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import ProfileImage from "../../assets/images/profileImage.png"

const TeacherDirectory = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [showFilters, setShowFilters] = useState(!isMobile)

    // Mock data for teachers with more details
    const teachers = [
        {
            name: "Esther Howard",
            employeeId: "#98216265",
            department: "Mathematics",
            qualification: "PhD Mathematics",
            email: "esther.howard@school.edu",
            phone: "(555) 123-4567",
            subjects: ["Algebra", "Calculus", "Statistics"],
            image: "/placeholder.svg?height=80&width=80&query=teacher",
            experience: "8 years"
        },
        {
            name: "Robert Johnson",
            employeeId: "#76543210",
            department: "Science",
            qualification: "MSc Physics",
            email: "robert.johnson@school.edu",
            phone: "(555) 987-6543",
            subjects: ["Physics", "Chemistry"],
            image: "/placeholder.svg?height=80&width=80&query=male teacher",
            experience: "5 years"
        },
        {
            name: "Sarah Williams",
            employeeId: "#12398745",
            department: "English",
            qualification: "MA Literature",
            email: "sarah.williams@school.edu",
            phone: "(555) 456-7890",
            subjects: ["Literature", "Grammar", "Creative Writing"],
            image: "/placeholder.svg?height=80&width=80&query=female teacher",
            experience: "7 years"
        },
        {
            name: "Michael Chen",
            employeeId: "#45678912",
            department: "Computer Science",
            qualification: "PhD Computer Science",
            email: "michael.chen@school.edu",
            phone: "(555) 234-5678",
            subjects: ["Programming", "Data Structures", "Algorithms"],
            image: "/placeholder.svg?height=80&width=80&query=asian teacher",
            experience: "10 years"
        },
        {
            name: "Jennifer Lopez",
            employeeId: "#87654321",
            department: "History",
            qualification: "PhD History",
            email: "jennifer.lopez@school.edu",
            phone: "(555) 876-5432",
            subjects: ["World History", "American History"],
            image: "/placeholder.svg?height=80&width=80&query=history teacher",
            experience: "12 years"
        },
        {
            name: "David Wilson",
            employeeId: "#23456789",
            department: "Mathematics",
            qualification: "MSc Mathematics",
            email: "david.wilson@school.edu",
            phone: "(555) 345-6789",
            subjects: ["Geometry", "Trigonometry"],
            image: "/placeholder.svg?height=80&width=80&query=math teacher",
            experience: "6 years"
        },
        {
            name: "Amanda Garcia",
            employeeId: "#34567890",
            department: "Art",
            qualification: "MFA Fine Arts",
            email: "amanda.garcia@school.edu",
            phone: "(555) 567-8901",
            subjects: ["Drawing", "Painting", "Art History"],
            image: "/placeholder.svg?height=80&width=80&query=art teacher",
            experience: "9 years"
        }
    ]

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleResetFilter = () => {
        setClassFilter("")
        setSearchTerm("")
    }

    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    // Filter teachers based on search term and class filter
    const filteredTeachers = teachers.filter(teacher => {
        const matchesSearch =
            teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.email.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesClass = !classFilter ||
            teacher.subjects.some(subject => subject.toLowerCase().includes(classFilter.toLowerCase()))

        return matchesSearch && matchesClass
    })

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 0 } }}>
            <Box sx={{ width: "100%" }}>
                {/* Search and Filter Row */}
                <Grid container spacing={2} sx={{ mb: { xs: 2, sm: 3 } }}>
                    {/* Search Field */}
                    <Grid item xs={12} sm={showFilters ? 6 : 9} md={showFilters ? 6 : 9}>
                        <TextField
                            placeholder="Search by name, ID, department or email"
                            value={searchTerm}
                            onChange={handleSearch}
                            fullWidth
                            size={isMobile ? "small" : "large"}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 1,
                                    bgcolor: "#f5f5f5",
                                    "& fieldset": {
                                        borderColor: "#e0e0e0",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#bdbdbd",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#2196f3",
                                    },
                                    width: { xs: '100%', sm: '300px', md: '400px' }
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    {/* Filter Toggle Button (Mobile) */}
                    <Grid item xs={12} sm={3} md={3} sx={{ display: { xs: 'block', sm: 'block' } }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={showFilters ? <FilterAltOffIcon /> : <FilterAltIcon />}
                            onClick={toggleFilters}
                            size={isMobile ? "small" : "medium"}
                            sx={{
                                borderRadius: 1,
                                borderColor: "#e0e0e0",
                                color: "text.secondary",
                                bgcolor: "#f5f5f5",
                                height: isMobile ? '40px' : '56px',
                                "&:hover": {
                                    bgcolor: "#e0e0e0",
                                    borderColor: "#bdbdbd",
                                },
                                textTransform: "none",
                            }}
                        >
                            {showFilters ? "Hide Filters" : "Show Filters"}
                        </Button>
                    </Grid>

                    {/* Filters */}
                    {showFilters && (
                        <>
                            {/* Class Filter */}
                            <Grid item xs={6} sm={6} md={6}>
                                <Select
                                    value={classFilter}
                                    onChange={(e) => setClassFilter(e.target.value)}
                                    displayEmpty
                                    fullWidth
                                    size={isMobile ? "small" : "medium"}
                                    renderValue={(selected) => selected ? selected : "Subject"}
                                    IconComponent={KeyboardArrowDownIcon}
                                    sx={{
                                        borderRadius: 1,
                                        bgcolor: "#f5f5f5",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#e0e0e0",
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#bdbdbd",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#2196f3",
                                        },
                                    }}
                                    MenuProps={{
                                        PaperProps: {
                                            elevation: 2,
                                            sx: { mt: 0.5, borderRadius: 1 },
                                        },
                                    }}
                                >
                                    <MenuItem value="">All Subjects</MenuItem>
                                    <MenuItem value="Algebra">Algebra</MenuItem>
                                    <MenuItem value="Calculus">Calculus</MenuItem>
                                    <MenuItem value="Physics">Physics</MenuItem>
                                    <MenuItem value="Chemistry">Chemistry</MenuItem>
                                    <MenuItem value="Literature">Literature</MenuItem>
                                    <MenuItem value="Programming">Programming</MenuItem>
                                    <MenuItem value="History">History</MenuItem>
                                </Select>
                            </Grid>

                            {/* Reset Filter Button */}
                            <Grid item xs={6} sm={6} md={6}>
                                <Button
                                    variant="outlined"
                                    onClick={handleResetFilter}
                                    fullWidth
                                    size={isMobile ? "small" : "medium"}
                                    sx={{
                                        borderRadius: 1,
                                        borderColor: "#e0e0e0",
                                        color: "text.secondary",
                                        bgcolor: "#f5f5f5",
                                        height: isMobile ? '40px' : '56px',
                                        "&:hover": {
                                            bgcolor: "#e0e0e0",
                                            borderColor: "#bdbdbd",
                                        },
                                        textTransform: "none",
                                    }}
                                >
                                    Reset Filters
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>

                {/* Results Count */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        Showing {filteredTeachers.length} teachers
                    </Typography>
                </Box>

                {/* Teacher List */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    gap: 2.5,
                    alignItems: 'stretch'
                }}>
                    {filteredTeachers.map((teacher, index) => (
                        <Card
                            key={index}
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                border: "1px solid",
                                borderColor: "divider",
                                transition: "all 0.2s ease-in-out",
                                "&:hover": {
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                    borderColor: "primary.light",
                                },
                                height: '100%' // Ensure cards in the same row have equal height
                            }}
                        >
                            <CardContent sx={{ p: { xs: 2, md: 3 }, "&:last-child": { pb: { xs: 2, md: 3 } } }}>
                                <Grid container spacing={2} alignItems="flex-start">
                                    {/* Teacher Avatar */}
                                    <Grid item xs={3} sm={2} md={1.5}>
                                        <Avatar
                                            src={ProfileImage}
                                            alt={teacher.name}
                                            sx={{
                                                width: { xs: 64, sm: 72, md: 120 },
                                                height: { xs: 64, sm: 72, md: 120 },
                                                border: "2px solid",
                                                borderColor: "divider",
                                                bgcolor: "background.paper"
                                            }}
                                        />
                                    </Grid>

                                    {/* Teacher Information */}
                                    <Grid item xs={9} sm={10} md={10.5}>
                                        {/* Header Section */}
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', sm: 'row' },
                                            justifyContent: 'space-between',
                                            alignItems: { xs: 'flex-start', sm: 'center' },
                                            mb: 2,
                                            gap: 1
                                        }}>
                                            <Typography
                                                variant="h6"
                                                component="h2"
                                                fontWeight={600}
                                                sx={{
                                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {teacher.name}
                                            </Typography>

                                            <Chip
                                                label={teacher.department}
                                                size="small"
                                                sx={{
                                                    bgcolor: 'primary.lighter',
                                                    color: 'primary.dark',
                                                    fontWeight: 600,
                                                    fontSize: '0.75rem',
                                                    height: 24
                                                }}
                                            />
                                        </Box>

                                        {/* Details Section */}
                                        <Grid container spacing={{ xs: 1.5, sm: 3 }}>
                                            {/* Left Column */}
                                            <Grid item xs={12} sm={6}>
                                                <Stack spacing={1.5}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <BadgeIcon fontSize="small" color="action" sx={{ opacity: 0.8 }} />
                                                        <Box>
                                                            <Typography variant="caption" color="text.secondary" display="block">
                                                                Employee ID
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                {teacher.employeeId}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <SchoolIcon fontSize="small" color="action" sx={{ opacity: 0.8 }} />
                                                        <Box>
                                                            <Typography variant="caption" color="text.secondary" display="block">
                                                                Qualification
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                {teacher.qualification}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <WorkIcon fontSize="small" color="action" sx={{ opacity: 0.8 }} />
                                                        <Box>
                                                            <Typography variant="caption" color="text.secondary" display="block">
                                                                Experience
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                {teacher.experience}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </Grid>

                                            {/* Right Column */}
                                            <Grid item xs={12} sm={6}>
                                                <Stack spacing={1.5}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <EmailIcon fontSize="small" color="action" sx={{ opacity: 0.8 }} />
                                                        <Box sx={{ overflow: 'hidden' }}>
                                                            <Typography variant="caption" color="text.secondary" display="block">
                                                                Email
                                                            </Typography>
                                                            <Typography variant="body2" noWrap sx={{ maxWidth: '100%', textOverflow: 'ellipsis' }}>
                                                                {teacher.email}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <PhoneIcon fontSize="small" color="action" sx={{ opacity: 0.8 }} />
                                                        <Box>
                                                            <Typography variant="caption" color="text.secondary" display="block">
                                                                Phone
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                {teacher.phone}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                                                        <MenuBookIcon fontSize="small" color="action" sx={{ opacity: 0.8, mt: 0.3 }} />
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 0.5 }}>
                                                                Subjects
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                                                {teacher.subjects.map((subject, idx) => (
                                                                    <Chip
                                                                        key={idx}
                                                                        label={subject}
                                                                        size="small"
                                                                        sx={{
                                                                            bgcolor: 'action.selected',
                                                                            fontSize: '0.6875rem',
                                                                            height: 24,
                                                                            '& .MuiChip-label': { px: 1 }
                                                                        }}
                                                                    />
                                                                ))}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                {/* Empty State */}
                {filteredTeachers.length === 0 && (
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 6,
                            px: 2,
                            bgcolor: '#f5f5f5',
                            borderRadius: 2,
                            mt: 2
                        }}
                    >
                        <SchoolIcon sx={{ fontSize: 48, color: '#bdbdbd', mb: 2 }} />
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            No teachers found
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Try adjusting your search or filter criteria
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={handleResetFilter}
                            sx={{
                                mt: 2,
                                borderColor: "#bdbdbd",
                                color: "text.secondary",
                                textTransform: "none",
                            }}
                        >
                            Clear all filters
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    )
}

export default TeacherDirectory