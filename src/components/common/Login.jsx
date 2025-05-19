import { useState } from "react"
import { Box, Button, Card, Container, Grid, TextField, Typography, Link, Paper, styled } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"
import PersonIcon from "@mui/icons-material/Person"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee"
import GroupsIcon from "@mui/icons-material/Groups"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"

// Custom styled components
const RoleCard = styled(Paper)(({ theme, selected }) => ({
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    height: "80px",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    transition: "all 0.2s ease",
    backgroundColor: selected ? "#fff" : "#fff",
    "&:hover": {
        borderColor: theme.palette.primary.main,
    },
}))

export default function Login() {
    const [selectedRole, setSelectedRole] = useState(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const roles = [
        { id: "teacher", name: "Teacher", icon: <SchoolIcon /> },
        { id: "principal", name: "Principal", icon: <PersonIcon /> },
        { id: "finance", name: "Finance", icon: <CurrencyRupeeIcon /> },
        { id: "coordinator", name: "Coordinator", icon: <GroupsIcon /> },
        { id: "admission", name: "Admission", icon: <HowToRegIcon /> },
        { id: "superAdmin", name: "Super Admin", icon: <AdminPanelSettingsIcon />, highlight: true },
    ]

    const handleRoleSelect = (roleId) => {
        setSelectedRole(roleId)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login attempt with:", { username, password, role: selectedRole })
        // Add your authentication logic here
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

                {/* Right side - Login Form */}
                <Box sx={{ width: { xs: "100%", md: "60%" }, p: 4 }}>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                            Welcome Back
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Please sign in to access your ERP dashboard
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
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                            <Link href="/forget-password" variant="body2" color="#2C9EF4" underline="hover">
                                Forget Password?
                            </Link>
                        </Box>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Select your role
                        </Typography>

                        <Grid container spacing={2} sx={{ mb: 3 }}>
                            {roles.map((role) => (
                                <Grid item xs={4} key={role.id}>
                                    <RoleCard
                                        selected={selectedRole === role.id}
                                        onClick={() => handleRoleSelect(role.id)}
                                        elevation={0}
                                        sx={{
                                            border:
                                                selectedRole === role.id
                                                    ? "2px solid #2C9EF4"
                                                    : role.highlight
                                                        ? "1px solid #2C9EF4"
                                                        : "1px solid #e0e0e0",
                                            color: role.highlight && selectedRole !== role.id ? "#2C9EF4" : "inherit",
                                            "& .MuiSvgIcon-root": {
                                                color: selectedRole === role.id ? "#2C9EF4" : role.highlight ? "#2C9EF4" : "inherit",
                                            },
                                        }}
                                    >
                                        {role.icon}
                                        <Typography variant="body2" sx={{ mt: 1, fontSize: "0.75rem" }}>
                                            {role.name}
                                        </Typography>
                                    </RoleCard>
                                </Grid>
                            ))}
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 2,
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
                            Sign in
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Container>
    )
}