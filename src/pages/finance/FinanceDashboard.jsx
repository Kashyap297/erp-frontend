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
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ProfileCard from "../../components/common/ProfileCard"

const FinanceDashboard = () => {

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

    return (
        <Box sx={{ width: "100%", mt: 2 }}>
            {/* Fee Summary Section */}
            <Box sx={{ mb: 4 }}>
                <ProfileCard data={Data} />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 4,
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    gap: { xs: 3, md: 0 },
                }}
            >
                <Box sx={{ width: { xs: "100%", md: "33%" } }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Total fees
                    </Typography>
                    <Typography variant="h5" fontWeight="medium">
                        {feeSummary.totalFees}
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: "100%", md: "33%" } }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Pending Fees
                    </Typography>
                    <Typography variant="h5" fontWeight="medium">
                        {feeSummary.pendingFees}
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: "100%", md: "33%" } }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Late Fees
                    </Typography>
                    <Typography variant="h5" fontWeight="medium">
                        {feeSummary.lateFees}
                    </Typography>
                </Box>
            </Box>

            {/* Recent Transactions Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Recent Fee Transactions
                </Typography>
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
                    }}
                >
                    See more
                </Button>
            </Box>
        </Box>
    )
}

export default FinanceDashboard