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
    Button,
    Paper,
    Divider,
    Container,
    useTheme,
    useMediaQuery,
    Grid,
    Card,
    CardContent,
    Stack,
} from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"

const PaySlips = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    // Mock data for pay slips
    const paySlips = [
        {
            id: 1,
            month: "Mar 2025",
            grossSalary: 7500.0,
            deductions: 2250.0,
            netSalary: 5250.0,
            status: "Paid",
        },
        {
            id: 2,
            month: "Feb 2025",
            grossSalary: 7500.0,
            deductions: 2250.0,
            netSalary: 5250.0,
            status: "Paid",
        },
        {
            id: 3,
            month: "Jan 2025",
            grossSalary: 7500.0,
            deductions: 2250.0,
            netSalary: 5250.0,
            status: "Paid",
        },
        {
            id: 4,
            month: "Dec 2024",
            grossSalary: 7500.0,
            deductions: 2250.0,
            netSalary: 5250.0,
            status: "Paid",
        },
    ]

    const handleDownload = (id) => {
        console.log(`Downloading pay slip ${id}`)
        // Here you would typically trigger a download of the pay slip
        alert(`Pay slip ${id} downloaded successfully!`)
    }

    // Mobile card view for each pay slip
    const renderMobilePaySlipCard = (slip) => (
        <Card
            key={slip.id}
            elevation={0}
            sx={{
                mb: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 1,
            }}
        >
            <CardContent sx={{ p: 2 }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">Month</Typography>
                        <Typography variant="body1" fontWeight="medium">{slip.month}</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'right' }}>
                        <Box
                            sx={{
                                display: 'inline-block',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1,
                                bgcolor: '#e8f5e9',
                                color: '#2e7d32',
                                fontSize: '0.75rem',
                                fontWeight: 'medium'
                            }}
                        >
                            {slip.status}
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider sx={{ my: 1 }} />
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">Gross Salary</Typography>
                        <Typography variant="body1">${slip.grossSalary.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">Deductions</Typography>
                        <Typography variant="body1">${slip.deductions.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">Net Salary</Typography>
                        <Typography variant="body1" fontWeight="medium">${slip.netSalary.toFixed(2)}</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<DownloadIcon />}
                            onClick={() => handleDownload(slip.id)}
                            sx={{
                                borderRadius: 1,
                                borderColor: "#e0e0e0",
                                color: "text.secondary",
                                textTransform: "none",
                                mt: 1,
                                "&:hover": {
                                    bgcolor: "#f5f5f5",
                                    borderColor: "#bdbdbd",
                                },
                            }}
                        >
                            Download Pay Slip
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )

    return (
        <Container maxWidth="" disableGutters>
            <Box sx={{
                width: "100%",
                p: { xs: 2, sm: 3, md: 0 }
            }}>
                <Typography
                    variant={isMobile ? "h6" : "h5"}
                    component="h1"
                    fontWeight="regular"
                    sx={{ mb: { xs: 1.5, sm: 2 } }}
                >
                    Recent Pay slips
                </Typography>

                <Divider sx={{ mb: { xs: 2, sm: 3 } }} />

                {isMobile ? (
                    // Mobile view - Cards
                    <Stack spacing={2}>
                        {paySlips.map(renderMobilePaySlipCard)}
                    </Stack>
                ) : (
                    // Tablet and Desktop view - Table
                    <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{
                            border: "1px solid #e0e0e0",
                            borderRadius: 1,
                        }}
                    >
                        <Table size={isTablet ? "small" : "medium"}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "medium" }}>Month</TableCell>
                                    <TableCell sx={{ fontWeight: "medium" }}>Gross Salary</TableCell>
                                    <TableCell sx={{ fontWeight: "medium" }}>Deductions</TableCell>
                                    <TableCell sx={{ fontWeight: "medium" }}>Net Salary</TableCell>
                                    <TableCell sx={{ fontWeight: "medium" }}>Status</TableCell>
                                    <TableCell sx={{ fontWeight: "medium" }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paySlips.map((slip) => (
                                    <TableRow key={slip.id}>
                                        <TableCell>{slip.month}</TableCell>
                                        <TableCell>${slip.grossSalary.toFixed(2)}</TableCell>
                                        <TableCell>${slip.deductions.toFixed(2)}</TableCell>
                                        <TableCell>${slip.netSalary.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    display: 'inline-block',
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: 1,
                                                    bgcolor: '#e8f5e9',
                                                    color: '#2e7d32',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 'medium'
                                                }}
                                            >
                                                {slip.status}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                startIcon={<DownloadIcon />}
                                                onClick={() => handleDownload(slip.id)}
                                                sx={{
                                                    borderRadius: 1,
                                                    borderColor: "#e0e0e0",
                                                    color: "text.secondary",
                                                    textTransform: "none",
                                                    "&:hover": {
                                                        bgcolor: "#f5f5f5",
                                                        borderColor: "#bdbdbd",
                                                    },
                                                }}
                                            >
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Container>
    )
}

export default PaySlips