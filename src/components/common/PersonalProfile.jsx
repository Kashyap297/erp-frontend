import { useState } from "react";
import {
    Box,
    Button,
    Card,
    Container,
    TextField,
    Typography,
    Avatar,
    Link,
    InputAdornment,
    Modal,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function PersonalProfile() {
    const [formData, setFormData] = useState({
        empId: "",
        name: "",
        email: "",
        contactNumber: "",
        department: "",
        designation: "",
        address: "",
        creditCard: "",
        joiningDate: "",
    });

    const [editMode, setEditMode] = useState(false);
    const [openPaymentModal, setOpenPaymentModal] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [paymentData, setPaymentData] = useState({
        accountName: "",
        bankName: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", formData);
        setEditMode(false);
        // Add your form submission logic here
    };

    const handleImageUpload = () => {
        document.getElementById("profile-image-upload").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("File selected:", file.name);
        }
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        console.log("Payment updated:", paymentData);
        setOpenPaymentModal(false);
        setOpenSuccessModal(true);
        // Add payment update logic here
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4, height: "100%" }}>
            <Card sx={{ p: { xs: 2, sm: 3 }, boxShadow: "0 4px 20px rgba(0,0,0,0.0)", height: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                    <Typography variant="h6" component="h1" fontWeight="bold">
                        Personal Information
                    </Typography>
                    <Link
                        href="#"
                        color="primary"
                        underline="hover"
                        onClick={toggleEditMode}
                        sx={{ cursor: "pointer" }}
                    >
                        {editMode ? "Cancel" : "Edit"}
                    </Link>
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{ height: "100%" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 2, sm: 4 },
                            height: "100%",
                        }}
                    >
                        {/* Image upload section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: { xs: "100%", sm: "auto" },
                                mb: { xs: 2, sm: 0 },
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: { xs: 100, sm: 120, md: 150 },
                                    height: { xs: 100, sm: 120, md: 150 },
                                    mb: 1,
                                    border: "1px solid #e0e0e0",
                                }}
                            />
                            <input
                                type="file"
                                id="profile-image-upload"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                            <Button
                                variant="contained"
                                startIcon={<CloudUploadIcon />}
                                onClick={handleImageUpload}
                                size="small"
                                disabled={!editMode}
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "#2C9EF4",
                                    "&:hover": {
                                        backgroundColor: "#1976d2",
                                    },
                                    mt: 1,
                                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                                    whiteSpace: "nowrap",
                                    py: 0.5,
                                    width: { xs: "100%", sm: "auto" },
                                }}
                            >
                                Upload Image
                            </Button>
                        </Box>

                        {/* Information fields section */}
                        <Box sx={{ flex: 1, width: "100%" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: { xs: 1, sm: 2 },
                                    "& > div": {
                                        width: { xs: "100%", sm: "calc(50% - 8px)" },
                                    },
                                }}
                            >
                                {/* Form fields */}
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Emp ID
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="empId"
                                        placeholder="Emp ID"
                                        value={formData.empId}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Name
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Email
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Contact Number
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="contactNumber"
                                        placeholder="Contact Number"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Department
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="department"
                                        placeholder="Department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Designation
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="designation"
                                        placeholder="Designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                    />
                                </Box>

                                <Box sx={{ width: "100%" }}>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Address
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                    />
                                </Box>

                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Credit card
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="creditCard"
                                        placeholder="Credit card"
                                        value={formData.creditCard}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CreditCardIcon fontSize="small" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                                        Joining Date
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        name="joiningDate"
                                        placeholder="Joining Date"
                                        value={formData.joiningDate}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 1.5 }}
                                        disabled={!editMode}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CalendarTodayIcon fontSize="small" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Box>

                            {editMode && (
                                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            py: 1,
                                            borderRadius: 1,
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            backgroundColor: "#2C9EF4",
                                            "&:hover": {
                                                backgroundColor: "#1976d2",
                                            },
                                            flex: 1,
                                        }}
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => setOpenPaymentModal(true)}
                                        sx={{
                                            py: 1,
                                            borderRadius: 1,
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            flex: 1,
                                        }}
                                    >
                                        Update Payment
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Card>

            {/* Payment Update Modal */}
            <Dialog
                open={openPaymentModal}
                onClose={() => setOpenPaymentModal(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    <Typography variant="h6" fontWeight="bold">
                        Update Payment
                    </Typography>
                </DialogTitle>
                <Divider />
                <Box component="form" onSubmit={handlePaymentSubmit}>
                    <DialogContent>
                        <Typography variant="subtitle1" sx={{ mb: 2 }}>
                            Payment Method
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                            <CreditCardIcon sx={{ mr: 1 }} /> Credit card
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                Account name
                            </Typography>
                            <TextField
                                fullWidth
                                name="accountName"
                                placeholder="Enter account name"
                                value={paymentData.accountName}
                                onChange={handlePaymentChange}
                                variant="outlined"
                                size="small"
                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                Bank name
                            </Typography>
                            <TextField
                                fullWidth
                                name="bankName"
                                placeholder="Enter bank name"
                                value={paymentData.bankName}
                                onChange={handlePaymentChange}
                                variant="outlined"
                                size="small"
                            />
                        </Box>
                    </DialogContent>
                    <Divider />
                    <DialogActions sx={{ p: 2 }}>
                        <Button
                            onClick={() => setOpenPaymentModal(false)}
                            variant="outlined"
                            sx={{ textTransform: "none" }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "#2C9EF4",
                                "&:hover": {
                                    backgroundColor: "#1976d2",
                                },
                            }}
                        >
                            Update payment info
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>

            {/* Success Modal */}
            <Dialog
                open={openSuccessModal}
                onClose={() => setOpenSuccessModal(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogContent sx={{ textAlign: "center", p: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Your payment mode is updated
                    </Typography>
                    <Button
                        onClick={() => setOpenSuccessModal(false)}
                        variant="contained"
                        sx={{
                            mt: 2,
                            textTransform: "none",
                            backgroundColor: "#2C9EF4",
                            "&:hover": {
                                backgroundColor: "#1976d2",
                            },
                        }}
                    >
                        Submit
                    </Button>
                </DialogContent>
            </Dialog>
        </Container>
    );
}