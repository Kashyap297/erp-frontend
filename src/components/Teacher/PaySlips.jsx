"use client"

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
} from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"

const PaySlips = () => {
    // Mock data for pay slips
    const paySlips = [
        {
            id: 1,
            month: "Mar2025",
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

    return (
        <Box sx={{ width: "100%", mt: 2, px: 2, p: 4 }}>
            <Typography variant="h5" component="h1" fontWeight="regular" sx={{ mb: 2 }}>
                Recent Pay slips
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
                <Table sx={{ minWidth: 650 }}>
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
                                <TableCell>{slip.grossSalary.toFixed(2)}</TableCell>
                                <TableCell>{slip.deductions.toFixed(2)}</TableCell>
                                <TableCell>{slip.netSalary.toFixed(2)}</TableCell>
                                <TableCell>{slip.status}</TableCell>
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
        </Box>
    )
}

export default PaySlips