import { useState } from "react"
import { Box, Button, Card, Container, TextField, Typography } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"

export default function ForgotPassword() {
    const [username, setUsername] = useState("")
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Password reset attempt with:", { username, otp, newPassword })
        // Add your password reset logic here
    }

    return (
        <Container maxWidth="md" sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card
                sx={{
                    display: "flex",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
            >
                {/* Left side - Logo and Brand */}
                <Box
                    sx={{
                        width: "40%",
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #1976d2 0%, #2C9EF4 100%)",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Wavy pattern overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0.2,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wavyPattern' patternUnits='userSpaceOnUse' width='40' height='10' patternTransform='scale(1) rotate(0)'%3E%3Cpath d='M0 5 Q10 0, 20 5 T 40 5' stroke='%23ffffff' fill='none' strokeWidth='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23wavyPattern)'/%3E%3C/svg%3E")`,
                            backgroundSize: "40px 10px",
                        }}
                    />

                    <Box sx={{ position: "relative", textAlign: "center", color: "white" }}>
                        <Box
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                borderRadius: "50%",
                                width: "80px",
                                height: "80px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            <SchoolIcon sx={{ fontSize: 40 }} />
                        </Box>
                        <Typography variant="h5" component="h1" fontWeight="bold">
                            Educational ERP
                        </Typography>
                    </Box>
                </Box>

                {/* Right side - Forgot Password Form */}
                <Box sx={{ width: { xs: "100%", md: "60%" }, p: 4 }}>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                            Forgot Password
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Enter your email address or username below and we'll send you a link to reset your password.
                        </Typography>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="otp"
                            label="OTP"
                            id="otp"
                            placeholder="_ _ _ _ _ _"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            sx={{ mb: 2 }}
                            inputProps={{
                                maxLength: 6,
                            }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="newPassword"
                            label="New password"
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            sx={{ mb: 3 }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                py: 1.5,
                                borderRadius: 1,
                                textTransform: "none",
                                fontSize: "1rem",
                                backgroundColor: "#2C9EF4",
                                "&:hover": {
                                    backgroundColor: "#1976d2",
                                },
                            }}
                        >
                            Update password
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Container>
    )
}