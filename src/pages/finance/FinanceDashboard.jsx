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
    Card,
    CardContent,
    useMediaQuery,
    useTheme,
    Divider,
    Grid,
    IconButton,
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ProfileCard from "../../components/common/ProfileCard"
import PersonIcon from "@mui/icons-material/Person"
import ClassIcon from "@mui/icons-material/Class"
import PaymentIcon from "@mui/icons-material/Payment"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import ScheduleIcon from "@mui/icons-material/Schedule"
import WarningIcon from "@mui/icons-material/Warning"

const FinanceDashboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const Data = {
        name: "Ranjeet Singh",
        role: "Teacher",
        contact: "+91 000000 00000",
        email: "rsingh45@gmail.com",
        classAdvisor: "Class Advisor",
        attendance: 90,
        leaveBalance: {
            annual: 60,
            sick: 40,
            paid: 20,
        },
    };
    
    // Mock data for fee summary
    const feeSummary = {
        totalFees: "₹5,248,750",
        pendingFees: "₹5,21,248",
        lateFees: "₹450,000",
    }

    // Mock data for recent transactions
    const recentTransactions = [
        {
            id: 1,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
        },
        {
            id: 2,
            studentName: "Aarav Patel",
            class: "2st",
            paymentType: "Full Fee Payment",
            amount: "+ ₹90000",
        },
        {
            id: 3,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Fee Penalty",
            amount: "+ ₹5000",
        },
        {
            id: 4,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
        },
        {
            id: 5,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
        },
        {
            id: 6,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
        },
        {
            id: 7,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
        },
        {
            id: 8,
            studentName: "Aarav Patel",
            class: "1st",
            paymentType: "Partial Payment",
            amount: "+ ₹45000",
        },
    ]
    
    // Limit displayed transactions for mobile
    const displayedTransactions = isMobile ? recentTransactions.slice(0, 5) : recentTransactions;

    // Render mobile card view for transactions
    const renderMobileTransactionCard = (transaction) => (
        <Card 
            key={transaction.id} 
            sx={{ 
                mb: 2, 
                borderRadius: 1,
                boxShadow: 'none',
                border: '1px solid #e0e0e0'
            }}
        >
            <CardContent sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon sx={{ color: 'text.secondary', mr: 1, fontSize: '1.2rem' }} />
                        <Typography variant="body1" fontWeight="medium">
                            {transaction.studentName}
                        </Typography>
                    </Box>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: "#4caf50", 
                            fontWeight: "medium" 
                        }}
                    >
                        {transaction.amount}
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ClassIcon sx={{ color: 'text.secondary', mr: 0.5, fontSize: '1rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            Class: {transaction.class}
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PaymentIcon sx={{ color: 'text.secondary', mr: 0.5, fontSize: '1rem' }} />
                        <Typography variant="body2" color="text.secondary">
                            {transaction.paymentType}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );

    return (
        <Box sx={{ width: "100%", mt: 2, px: { xs: 1, md: 2 } }}>
            {/* Profile Card Section */}
            <Box sx={{ mb: 4 }}>
                <ProfileCard data={Data} />
            </Box>

            {/* Fee Summary Section - Using flex with justify-content: space-between */}
            <Box 
                sx={{ 
                    mb: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    gap: { xs: 2, md: 3 }
                }}
            >
                {/* Total Fees Card */}
                <Card 
                    sx={{ 
                        width: { xs: '100%', md: 'calc(33% - 16px)' },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderTop: { xs: '4px solid #1976d2', md: 'none' },
                        borderLeft: { xs: 'none', md: '4px solid #1976d2' },
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                            <Box 
                                sx={{ 
                                    bgcolor: '#e3f2fd', 
                                    p: 1, 
                                    borderRadius: '50%',
                                    mr: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <AccountBalanceWalletIcon sx={{ fontSize: '1.5rem', color: '#1976d2' }} />
                            </Box>
                            <Typography variant="body1" color="text.secondary">
                                Total Fees
                            </Typography>
                        </Box>
                        
                        <Typography 
                            variant="h5" 
                            fontWeight="medium" 
                            sx={{ 
                                mt: 1,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                            }}
                        >
                            {feeSummary.totalFees}
                        </Typography>
                        
                        <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ 
                                mt: 'auto', 
                                pt: 1,
                                fontSize: { xs: '0.75rem', md: '0.875rem' }
                            }}
                        >
                            Total fees collected for the current academic year
                        </Typography>
                    </CardContent>
                </Card>

                {/* Pending Fees Card */}
                <Card 
                    sx={{ 
                        width: { xs: '100%', md: 'calc(33% - 16px)' },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderTop: { xs: '4px solid #f57c00', md: 'none' },
                        borderLeft: { xs: 'none', md: '4px solid #f57c00' },
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                            <Box 
                                sx={{ 
                                    bgcolor: '#fff3e0', 
                                    p: 1, 
                                    borderRadius: '50%',
                                    mr: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <ScheduleIcon sx={{ fontSize: '1.5rem', color: '#f57c00' }} />
                            </Box>
                            <Typography variant="body1" color="text.secondary">
                                Pending Fees
                            </Typography>
                        </Box>
                        
                        <Typography 
                            variant="h5" 
                            fontWeight="medium" 
                            sx={{ 
                                mt: 1,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                            }}
                        >
                            {feeSummary.pendingFees}
                        </Typography>
                        
                        <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ 
                                mt: 'auto', 
                                pt: 1,
                                fontSize: { xs: '0.75rem', md: '0.875rem' }
                            }}
                        >
                            Total pending fees to be collected
                        </Typography>
                    </CardContent>
                </Card>

                {/* Late Fees Card */}
                <Card 
                    sx={{ 
                        width: { xs: '100%', md: 'calc(33% - 16px)' },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderTop: { xs: '4px solid #d32f2f', md: 'none' },
                        borderLeft: { xs: 'none', md: '4px solid #d32f2f' },
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                            <Box 
                                sx={{ 
                                    bgcolor: '#ffebee', 
                                    p: 1, 
                                    borderRadius: '50%',
                                    mr: 1.5,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <WarningIcon sx={{ fontSize: '1.5rem', color: '#d32f2f' }} />
                            </Box>
                            <Typography variant="body1" color="text.secondary">
                                Late Fees
                            </Typography>
                        </Box>
                        
                        <Typography 
                            variant="h5" 
                            fontWeight="medium" 
                            sx={{ 
                                mt: 1,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                            }}
                        >
                            {feeSummary.lateFees}
                        </Typography>
                        
                        <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ 
                                mt: 'auto', 
                                pt: 1,
                                fontSize: { xs: '0.75rem', md: '0.875rem' }
                            }}
                        >
                            Total late fees penalties applied
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Recent Transactions Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Recent Fee Transactions
                </Typography>
                
                {isMobile ? (
                    // Mobile card view for transactions
                    <Box>
                        {displayedTransactions.map(transaction => renderMobileTransactionCard(transaction))}
                    </Box>
                ) : (
                    // Desktop table view for transactions
                    <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ "& th": { fontWeight: "bold", bgcolor: "#f5f5f5" } }}>
                                    <TableCell>Student name</TableCell>
                                    <TableCell>Class</TableCell>
                                    <TableCell>Payment type</TableCell>
                                    <TableCell>Fees</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recentTransactions.map((transaction) => (
                                    <TableRow key={transaction.id}>
                                        <TableCell>{transaction.studentName}</TableCell>
                                        <TableCell>{transaction.class}</TableCell>
                                        <TableCell>{transaction.paymentType}</TableCell>
                                        <TableCell sx={{ color: "#4caf50", fontWeight: "medium" }}>{transaction.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon fontSize="small" />}
                    fullWidth
                    sx={{
                        mt: 0,
                        bgcolor: "#1976d2",
                        "&:hover": {
                            bgcolor: "#1565c0",
                        },
                        textTransform: "none",
                        borderRadius: 0,
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        py: { xs: 1.5, md: 1 }
                    }}
                >
                    See more
                </Button>
            </Box>
        </Box>
    )
}

export default FinanceDashboard