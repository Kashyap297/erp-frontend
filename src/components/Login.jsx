import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  School,
  Person,
  AttachMoney,
  SupervisorAccount,
  Assignment,
  AdminPanelSettings,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';

const RoleButton = ({ icon, label, selected, onClick }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        border: selected ? '2px solid #1976d2' : '1px solid #e0e0e0',
        borderRadius: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: '#1976d2',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }
      }}
      onClick={onClick}
    >
      {icon}
      <Typography variant="body2" sx={{ mt: 1 }}>
        {label}
      </Typography>
    </Paper>
  );
};

export default function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const roles = [
    { label: 'Teacher', icon: <School fontSize="medium" /> },
    { label: 'Principal', icon: <Person fontSize="medium" /> },
    { label: 'Finance', icon: <AttachMoney fontSize="medium" /> },
    { label: 'Coordinator', icon: <SupervisorAccount fontSize="medium" /> },
    { label: 'Admission', icon: <Assignment fontSize="medium" /> },
    { label: 'Super Admin', icon: <AdminPanelSettings fontSize="medium" /> },
  ];

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', overflow: 'hidden', boxShadow: 3, borderRadius: 2 }}>
        <Grid container>
          {/* Left blue panel */}
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            sx={{
              background: 'linear-gradient(180deg, #1976d2 0%, #1565c0 100%)',
              color: 'white',
              py: 5,
              px: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            //   backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 10px, transparent 10px, transparent 20px)'
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                p: 2,
                mb: 2
              }}
            >
              <School sx={{ fontSize: 40 }} />
            </Box>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Educational ERP
            </Typography>
          </Grid>

          {/* Right login form */}
          <Grid item xs={12} sm={8} md={7}>
            <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Welcome Back
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Please sign in to access your ERP dashboard
              </Typography>

              <Box component="form" noValidate sx={{ mt: 2 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  sx={{ mb: 3 }}
                />

                <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                    <Button color="primary" sx={{ p: 0 }}>
                      Forget Password?
                    </Button>
                  </Box>
                </FormControl>

                <Typography variant="body1" sx={{ mb: 2 }}>
                  Select your role
                </Typography>

                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {roles.map((role) => (
                    <Grid item xs={6} sm={4} key={role.label}>
                      <RoleButton
                        icon={role.icon}
                        label={role.label}
                        selected={selectedRole === role.label}
                        onClick={() => setSelectedRole(role.label)}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    borderRadius: 8,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    backgroundColor: '#42a5f5',
                    '&:hover': {
                      backgroundColor: '#1976d2'
                    }
                  }}
                >
                  Sign in
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}