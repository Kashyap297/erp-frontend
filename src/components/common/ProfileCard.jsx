"use client"

import { Box, Typography, LinearProgress, CircularProgress } from "@mui/material"
import { styled } from "@mui/material/styles"

const EditLink = styled(Typography)({
  color: "#0288d1",
  fontSize: "16px",
  cursor: "pointer",
  marginLeft: "8px",
})

const StyledLinearProgress = styled(LinearProgress)({
  height: 10,
  borderRadius: 10,
  backgroundColor: "#e0e0e0",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#0288d1",
  },
})

export default function ProfileCard({ data }) {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        Width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src="/teacher-profile.png"
        alt="Teacher Profile"
        sx={{
          width: 150,
          height: 150,
          borderRadius: "10%",
          objectFit: "cover",
          border: "2px solid #f5f5f5",
        }}
      />

      {/* Teacher Info */}
      <Box
        sx={{
          minWidth: 380,
          pr: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {data.name}
          </Typography>
        </Box>
        <Typography variant="body2"  sx={{ mb: 0.2, fontSize: '16px' }}>
          Teacher
        </Typography>
        <Typography variant="body2"  sx={{ mb: 0.2, fontSize: '16px' }}>
          Contact: {data.contact}
        </Typography>
        <Typography variant="body2"  sx={{ mb: 0.2 , fontSize: '16px'}}>
          E-Mail: {data.email}
        </Typography>
        <Typography variant="body2">
          Class Advisor
        </Typography>
      </Box>

      {/* Attendance Circle */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pr: 2,
          pl: 1,
          minWidth: 300,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={data.attendance}
            size={120}
            thickness={4}
            sx={{
              color: "#0288d1",
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontWeight: "bold",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {`${data.attendance}%`}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          Attendance
        </Typography>
      </Box>

      {/* Leave Balance */}
       <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ minWidth: 140 }}>
            Annual Leave Balance
          </Typography>
          <StyledLinearProgress variant="determinate" value={data.leaveBalance.annual} sx={{ flex: 1 }} />
        </Box>
        <Box
          sx={{
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ minWidth: 140 }}>
            Sick Leave Balance
          </Typography>
          <StyledLinearProgress variant="determinate" value={data.leaveBalance.sick} sx={{ flex: 1 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ minWidth: 140 }}>
            Paid Leave Balance
          </Typography>
          <StyledLinearProgress variant="determinate" value={data.leaveBalance.paid} sx={{ flex: 1 }} />
        </Box>
      </Box>
    </Box>
  )
}
