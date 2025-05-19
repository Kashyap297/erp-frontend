"use client"

import { useState } from "react"
import { Box, Typography, Button, Paper } from "@mui/material"
import { useNavigate } from "react-router-dom" // Add this import
import AssignmentIcon from "@mui/icons-material/Assignment"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"

const Homework = () => {
  const navigate = useNavigate() // Initialize navigate
  
  // Mock data for homework assignments
  const homeworkAssignments = Array(6).fill({
    id: 1,
    title: "Calculus Problem Set 3",
    subject: "Mathematics",
    description: "Complete problems 15-30 from Chapter 4",
    dueDate: "4/28/2025",
  })

  const handleNewHomeworkClick = () => {
    navigate('/teacher/homework/create') // Navigate to create route
  }

  return (
    <Box sx={{ width: "100%", py: 3, px: 2 }}>
      {/* New Homework Button */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          startIcon={<AssignmentIcon />}
          onClick={handleNewHomeworkClick}
          sx={{
            bgcolor: "#0091ea",
            "&:hover": {
              bgcolor: "#0277bd",
            },
            borderRadius: '7px',
            textTransform: "none",
            px: 6,
            py: 2,
          }}
        >
          New homework
        </Button>
      </Box>

      {/* Homework list */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {homeworkAssignments.map((homework, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "#D9D9D9",
              borderRadius: 1,
              borderTop: "5px solid #2196f3",
              borderBottom: "1px solid #2196f3",
              "&:hover": {
                bgcolor: "#e0e0e0",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontWeight: "medium" }}>
              {homework.title}
            </Typography>
            <Typography variant="body2" color="#2196f3" sx={{ mb: 0.5 }}>
              {homework.subject}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {homework.description}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5, color: "#757575", fontSize: "0.9rem" }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.9rem" }}>
                Due {homework.dueDate}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}

export default Homework