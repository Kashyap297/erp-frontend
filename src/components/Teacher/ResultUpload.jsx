"use client"

import { useState } from "react"
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Paper,
    useTheme,
    useMediaQuery,
    Card,
    CardContent,
    Grid,
    Container,
    Divider,
} from "@mui/material"

const ResultUpload = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    // Mock data for students
    const initialStudents = [
        { id: "CS22045", name: "Alex Thompson", internal: "", external: "" },
        { id: "CS22046", name: "Emma Rodriguez", internal: "", external: "" },
        { id: "CS22047", name: "Michael Chen", internal: "", external: "" },
        { id: "CS22048", name: "Sophia Patel", internal: "", external: "" },
        { id: "CS22049", name: "James Wilson", internal: "", external: "" },
        { id: "CS22050", name: "Olivia Martinez", internal: "", external: "" },
        { id: "CS22051", name: "Noah Johnson", internal: "", external: "" },
        { id: "CS22052", name: "Ava Williams", internal: "", external: "" },
        { id: "CS22053", name: "Ethan Brown", internal: "", external: "" },
        { id: "CS22054", name: "Isabella Jones", internal: "", external: "" },
        { id: "CS22055", name: "Lucas Garcia", internal: "", external: "" },
        { id: "CS22056", name: "Mia Miller", internal: "", external: "" },
        { id: "CS22057", name: "Benjamin Davis", internal: "", external: "" },
    ]

    const [students, setStudents] = useState(initialStudents)

    // Handle input change
    const handleInputChange = (index, field, value) => {
        const updatedStudents = [...students]
        updatedStudents[index][field] = value
        setStudents(updatedStudents)
    }

    // Handle form submission
    const handleSubmit = () => {
        console.log("Submitted data:", students)
        // Here you would typically send the data to your backend
        alert("Results submitted successfully!")
    }

    // Mobile card view for each student
    const renderMobileStudentCard = (student, index) => (
        <Card key={index} sx={{ mb: 2, borderRadius: 1, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: 2 }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={4}>
                        <Typography variant="caption" color="text.secondary">ID</Typography>
                        <Typography variant="body2">{student.id}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="caption" color="text.secondary">Student Name</Typography>
                        <Typography variant="body2">{student.name}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider sx={{ my: 1 }} />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: 'block' }}>
                            Internal
                        </Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={student.internal}
                            onChange={(e) => handleInputChange(index, "internal", e.target.value)}
                            InputProps={{
                                sx: {
                                    bgcolor: "#e0e0e0",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: 'block' }}>
                            External
                        </Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={student.external}
                            onChange={(e) => handleInputChange(index, "external", e.target.value)}
                            InputProps={{
                                sx: {
                                    bgcolor: "#e0e0e0",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )

    return (
        <Container maxWidth="" disableGutters>
            <Box sx={{
                width: "100%",
                mt: { xs: 2, sm: 3, md: 0 },
                px: { xs: 1.5, sm: 2 },
                pb: { xs: 2, sm: 3, md: 0 }
            }}>
                <Typography
                    variant={isMobile ? "h6" : "h5"}
                    component="h1"
                    fontWeight="regular"
                    sx={{ mb: { xs: 2, sm: 3, md: 4 } }}
                >
                    Upload result
                </Typography>

                {isMobile ? (
                    // Mobile view - Cards
                    <Box sx={{ mb: 3 }}>
                        {students.map((student, index) => renderMobileStudentCard(student, index))}
                    </Box>
                ) : (
                    // Tablet and Desktop view - Table
                    <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{
                            mb: 3,
                            border: '1px solid #e0e0e0',
                            borderRadius: 1,
                            overflowX: "auto"
                        }}
                    >
                        <Table size={isTablet ? "small" : "medium"} sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "medium", width: "15%" }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: "medium", width: "35%" }}>Student Name</TableCell>
                                    <TableCell sx={{ fontWeight: "medium", width: "25%" }}>Internal</TableCell>
                                    <TableCell sx={{ fontWeight: "medium", width: "25%" }}>External</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{student.id}</TableCell>
                                        <TableCell>{student.name}</TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                value={student.internal}
                                                onChange={(e) => handleInputChange(index, "internal", e.target.value)}
                                                InputProps={{
                                                    sx: {
                                                        bgcolor: "#e0e0e0",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            border: "none",
                                                        },
                                                    },
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                value={student.external}
                                                onChange={(e) => handleInputChange(index, "external", e.target.value)}
                                                InputProps={{
                                                    sx: {
                                                        bgcolor: "#e0e0e0",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            border: "none",
                                                        },
                                                    },
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

                <Box sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "flex-end" },
                    mb: { xs: 2, sm: 3, md: 4 }
                }}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth={isMobile}
                        sx={{
                            bgcolor: "#2C9EF4",
                            color: "white",
                            "&:hover": {
                                bgcolor: "#1976d2",
                            },
                            borderRadius: 1,
                            px: { xs: 3, sm: 4 },
                            py: { xs: 0.75, sm: 1 },
                            maxWidth: { xs: '100%', sm: '200px' }
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default ResultUpload