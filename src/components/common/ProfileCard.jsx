"use client"

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import profileImage from '../../assets/images/ProfileImage.png'; // adjust path as needed

const EditLink = styled(Typography)({
  color: "#0288d1",
  fontSize: "16px",
  cursor: "pointer",
  marginLeft: "8px",
});

// 3D styled linear progress - All blue now
const StyledLinearProgress = styled(Box)(({ theme }) => ({
  height: 20,
  width: '100%',
  borderRadius: 10,
  position: 'relative',
  backgroundColor: "#e0e0e0",
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.5)',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    pointerEvents: 'none',
    zIndex: 2
  }
}));

// 3D progress bar component - Now always blue
const ProgressBar3D = ({ value }) => {
  const blueColor = "#0288d1"; // Consistent blue color

  return (
    <StyledLinearProgress>
      <Box
        sx={{
          height: '100%',
          width: `${value}%`,
          borderRadius: 'inherit',
          background: `linear-gradient(to bottom, ${blueColor} 0%, ${blueColor} 70%, ${blueColor}99 100%)`,
          position: 'relative',
          transition: 'width 0.5s ease-in-out',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
            borderTopLeftRadius: 'inherit',
            pointerEvents: 'none'
          }
        }}
      />
      <Typography
        variant="caption"
        sx={{
          position: 'absolute',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
          color: value > 50 ? 'white' : 'text.primary',
          fontWeight: 'bold',
          zIndex: 1,
          textShadow: value > 50 ? '0px 1px 2px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        {`${value}%`}
      </Typography>
    </StyledLinearProgress>
  );
};

// 3D Circular Progress Component using D3 - Shadow removed
const CircularProgress3D = ({ value, size = 100 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = size;
    const height = size;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.7;
    const thickness = radius - innerRadius;

    // Create a group element
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Define gradient for 3D effect
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "circleGradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#29b6f6");

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#0288d1");

    // Background circle - No shadow
    g.append("circle")
      .attr("r", radius)
      .attr("fill", "#e0e0e0");

    // Inner circle - No shadow
    g.append("circle")
      .attr("r", innerRadius)
      .attr("fill", "white");

    // Arc generator
    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle((value / 100) * (2 * Math.PI));

    // Add the progress arc - No shadow
    g.append("path")
      .attr("d", arc)
      .attr("fill", "url(#circleGradient)");

    // Add highlight for 3D effect
    const highlightArc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(innerRadius + thickness * 0.8)
      .startAngle(0)
      .endAngle((value / 100) * (2 * Math.PI));

    g.append("path")
      .attr("d", highlightArc)
      .attr("fill", "rgba(255, 255, 255, 0.3)");

    // Add text in the center
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("font-size", radius * 0.25) // Responsive font size
      .attr("font-weight", "bold")
      .text(`${value}%`);

  }, [value, size]);

  return (
    <svg ref={svgRef} width={size} height={size}></svg>
  );
};

export default function ProfileCard({ data }) {
  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2 },
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: "0px 4px 8px rgba(0,0,0,0.15)",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: 2, sm: 3 },
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
          src={profileImage}
          alt="Teacher Profile"
          sx={{
            width: { xs: 100, sm: 120, md: 150 },
            height: { xs: 100, sm: 120, md: 150 },
            borderRadius: "10%",
            objectFit: "cover",
            border: "2px solid #f5f5f5",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
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
          <Typography variant="body2" sx={{ mb: 0.2, fontSize: { xs: '14px', sm: '16px' } }}>
            Teacher
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.2, fontSize: { xs: '14px', sm: '16px' } }}>
            Contact: {data.contact}
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.2, fontSize: { xs: '14px', sm: '16px' } }}>
            E-Mail: {data.email}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
            Class Advisor
          </Typography>
        </Box>
      </Box>

      {/* 3D Attendance Circle - Moves below on small screens */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 0, md: 2 },
          width: { xs: "100%", md: "auto" },
          order: { xs: 3, md: 2 },
          mt: { xs: 1, md: 0 },
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
          {/* Responsive size for the circular chart */}
          <CircularProgress3D
            value={data.attendance}
            size={useRef(window?.innerWidth < 600 ? 100 : 120).current}
          />
        </Box>
        <Typography variant="body2" sx={{ mt: 1, fontWeight: 'medium' }}>
          Attendance
        </Typography>
      </Box>

      {/* Leave Balance with 3D bars - All blue now */}
      <Box
        sx={{
          flex: 1,
          width: { xs: "100%", md: "auto" },
          order: { xs: 4, md: 3 },
          mt: { xs: 1, md: 0 },
        }}
      >
        <Box
          sx={{
            mb: { xs: 1.5, sm: 2 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 0.5, sm: 2 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              minWidth: { xs: "100%", sm: 120 },
              fontWeight: 'medium',
              fontSize: { xs: '14px', sm: '16px' },
              mb: { xs: 0.5, sm: 0 }
            }}
          >
            Annual Leave Balance
          </Typography>
          {/* Blue progress bar */}
          <Box sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}>
            <ProgressBar3D value={data.leaveBalance.annual} />
          </Box>
        </Box>
        <Box
          sx={{
            mb: { xs: 1.5, sm: 2 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 0.5, sm: 2 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              minWidth: { xs: "100%", sm: 120 },
              fontWeight: 'medium',
              fontSize: { xs: '14px', sm: '16px' },
              mb: { xs: 0.5, sm: 0 }
            }}
          >
            Sick Leave Balance
          </Typography>
          {/* Blue progress bar */}
          <Box sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}>
            <ProgressBar3D value={data.leaveBalance.sick} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 0.5, sm: 2 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              minWidth: { xs: "100%", sm: 120 },
              fontWeight: 'medium',
              fontSize: { xs: '14px', sm: '16px' },
              mb: { xs: 0.5, sm: 0 }
            }}
          >
            Paid Leave Balance
          </Typography>
          {/* Blue progress bar */}
          <Box sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}>
            <ProgressBar3D value={data.leaveBalance.paid} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}