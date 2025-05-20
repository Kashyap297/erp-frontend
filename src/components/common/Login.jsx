import { useState } from "react";
import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    TextField,
    Typography,
    Link,
    Paper,
    styled,
    useMediaQuery,
    useTheme
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupsIcon from "@mui/icons-material/Groups";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

// Custom styled components
const RoleCard = styled(Paper)(({ theme, selected }) => ({
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    height: "100%",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    backgroundColor: selected ? "#F0F7FF" : "#fff",
    "&:hover": {
        borderColor: theme.palette.primary.main,
        backgroundColor: "#F5FAFF"
    },
}));

export default function Login() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedRole, setSelectedRole] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const roles = [
        { id: "teacher", name: "Teacher", icon: <SchoolIcon /> },
        { id: "principal", name: "Principal", icon: <PersonIcon /> },
        { id: "finance", name: "Finance", icon: <CurrencyRupeeIcon /> },
        { id: "coordinator", name: "Coordinator", icon: <GroupsIcon /> },
        { id: "admission", name: "Admission", icon: <HowToRegIcon /> },
        { id: "superAdmin", name: "Super Admin", icon: <AdminPanelSettingsIcon />, highlight: true },
    ];

    const handleRoleSelect = (roleId) => {
        setSelectedRole(roleId);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt with:", { username, password, role: selectedRole });
        // Add your authentication logic here
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: isMobile ? 2 : 3,
                py: 4,
            }}
        >
            <Card
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
            >
                {/* Left side - Logo and Brand */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "40%" },
                        minHeight: { xs: "200px", md: "auto" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, #1976d2 0%, #2C9EF4 100%)",
                        position: "relative",
                        overflow: "hidden",
                        p: 4
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

                    <Box sx={{ position: "relative", textAlign: "center", color: "white", zIndex: 1 }}>
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
                        <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                            Comprehensive school management system
                        </Typography>
                    </Box>
                </Box>

                {/* Right side - Login Form */}
                <Box sx={{
                    width: { xs: "100%", md: "60%" },
                    p: { xs: 3, sm: 4, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                    <Box component="form" onSubmit={handleSubmit}>
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
                            size={isMobile ? "small" : "medium"}
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
                            size={isMobile ? "small" : "medium"}
                        />

                        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                            <Link href="/forget-password" variant="body2" color="#2C9EF4" underline="hover">
                                Forget Password?
                            </Link>
                        </Box>

                        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                            Select your role
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            <Grid container spacing={2}>
                                {roles.map((role) => (
                                    <Grid item xs={6} sm={4} key={role.id}>
                                        <RoleCard
                                            selected={selectedRole === role.id}
                                            onClick={() => handleRoleSelect(role.id)}
                                            elevation={0}
                                            sx={{
                                                border: selectedRole === role.id
                                                    ? '2px solid #2C9EF4'
                                                    : '1px solid #e0e0e0',
                                                color: selectedRole === role.id ? '#2C9EF4' : 'text.primary',
                                            }}
                                        >
                                            <Box sx={{
                                                width: 24,
                                                height: 24,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mb: 1,
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 24,
                                                    color: selectedRole === role.id ? '#2C9EF4' : '#757575'
                                                }
                                            }}>
                                                {role.icon}
                                            </Box>
                                            <Typography variant="body2" sx={{
                                                fontWeight: selectedRole === role.id ? 600 : 500,
                                                textAlign: 'center',
                                                fontSize: { xs: '0.875rem', sm: '0.9375rem' }
                                            }}>
                                                {role.name}
                                            </Typography>
                                        </RoleCard>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={!selectedRole}
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
                                "&:disabled": {
                                    backgroundColor: "#e0e0e0",
                                    color: "#9e9e9e"
                                }
                            }}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Container>
    );
}