import { Box, Typography, LinearProgress, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const EditLink = styled(Typography)({
  color: "#0288d1",
  fontSize: "16px",
  cursor: "pointer",
  marginLeft: "8px",
});

const StyledLinearProgress = styled(LinearProgress)({
  height: 10,
  borderRadius: 10,
  backgroundColor: "#e0e0e0",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#0288d1",
  },
});

export default function ProfileCard({ data }) {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: 3, md: 2 },
      }}
    >
      {/* Profile Image and Basic Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: 2, sm: 3 },
          width: { xs: "100%", md: "auto" },
        }}
      >
        {/* Profile Image */}
        <Box
          component="img"
          src="/teacher-profile.png"
          alt="Teacher Profile"
          sx={{
            width: { xs: 120, sm: 150 },
            height: { xs: 120, sm: 150 },
            borderRadius: "10%",
            objectFit: "cover",
            border: "2px solid #f5f5f5",
          }}
        />

        {/* Teacher Info */}
        <Box
          sx={{
            minWidth: { xs: "100%", sm: 200, md: 250 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", sm: "flex-start" }, mb: 0.5 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {data.name}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 0.2, fontSize: '16px' }}>
            Teacher
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.2, fontSize: '16px' }}>
            Contact: {data.contact}
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.2, fontSize: '16px' }}>
            E-Mail: {data.email}
          </Typography>
          <Typography variant="body2">
            Class Advisor
          </Typography>
        </Box>
      </Box>

      {/* Attendance Circle - Moves below on small screens */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 0, md: 2 },
          width: { xs: "100%", md: "auto" },
          order: { xs: 3, md: 2 },
          mt: { xs: 2, md: 0 },
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
            size={100}
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

      {/* Leave Balance - Moves to bottom on small screens */}
      <Box
        sx={{
          flex: 1,
          width: { xs: "100%", md: "auto" },
          order: { xs: 4, md: 3 },
          mt: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            mb: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography variant="body2" sx={{ minWidth: { xs: "100%", sm: 100 } }}>
            Annual Leave Balance
          </Typography>
          <StyledLinearProgress
            variant="determinate"
            value={data.leaveBalance.annual}
            sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}
          />
        </Box>
        <Box
          sx={{
            mb: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography variant="body2" sx={{ minWidth: { xs: "100%", sm: 100 } }}>
            Sick Leave Balance
          </Typography>
          <StyledLinearProgress
            variant="determinate"
            value={data.leaveBalance.sick}
            sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography variant="body2" sx={{ minWidth: { xs: "100%", sm: 100 } }}>
            Paid Leave Balance
          </Typography>
          <StyledLinearProgress
            variant="determinate"
            value={data.leaveBalance.paid}
            sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}
          />
        </Box>
      </Box>
    </Box>
  );
}