import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  createTheme,
  ThemeProvider
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ClassIcon from "@mui/icons-material/Class";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1399FF',
    },
    secondary: {
      main: '#7E69AB',
    },
  },
});

const TimeTable = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [activeDay, setActiveDay] = useState("monday");

  const timeSlots = [
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
  ];

  const days = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
  ];

  const classData = [
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Physics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Chemistry",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Biology",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Computer Science",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "",
      class: "",
      room: "",
      type: "",
      isLunch: true,
    },
    {
      subject: "History",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "English",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
  ];

  const handleCellClick = (index) => {
    setSelectedSlot(selectedSlot === index ? null : index);
  };

  const handleDayChange = (event, newValue) => {
    setActiveDay(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ my: 3, px: { xs: 1, sm: 2, md: 3 } }}>
        <Typography variant="h5" component="h1" sx={{ mb: { xs: 1.5, sm: 2 }, fontWeight: 500 }}>
          Time Table
        </Typography>

        <Tabs
          value={activeDay}
          onChange={handleDayChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 2,
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTab-root': {
              px: 2
            }
          }}
        >
          {days.map((day) => (
            <Tab key={day.id} label={day.label} value={day.id} />
          ))}
        </Tabs>

        {isMobile ? (
          // Mobile Cards View
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {classData.map((data, index) => (
              <Card
                key={`mobile-card-${index}`}
                sx={{
                  borderRadius: '12px',
                  backgroundColor: data.isLunch ? theme.palette.primary.light : 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  borderLeft: `4px solid ${data.isHighlighted ? theme.palette.primary.main : 'transparent'}`
                }}
                onClick={() => handleCellClick(index)}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {timeSlots[index]}
                    </Typography>
                    {!data.isLunch && (
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          borderRadius: '4px',
                          textTransform: 'none',
                          px: 1.5,
                          py: 0.5,
                          fontSize: '0.75rem'
                        }}
                      >
                        {data.type}
                      </Button>
                    )}
                  </Box>

                  {data.isLunch ? (
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Lunch Break
                    </Typography>
                  ) : (
                    <>
                      <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                        {data.subject}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <ClassIcon fontSize="small" color="action" />
                          <Typography variant="body2">{data.class}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <MeetingRoomIcon fontSize="small" color="action" />
                          <Typography variant="body2">{data.room}</Typography>
                        </Box>
                      </Box>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          // Desktop Grid View
          <Box sx={{ overflowX: 'auto', pb: 2 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${timeSlots.length}, minmax(150px, 1fr))`,
                width: 'max-content',
                minWidth: 0,
                width: 'max-content',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #e0e0e0',
              }}
            >
              {timeSlots.map((slot, index) => (
                <Box
                  key={`header-${index}`}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    borderRight: index < timeSlots.length - 1 ? '1px solid #e0e0e0' : 'none',
                    borderBottom: '1px solid #e0e0e0',
                    fontWeight: 400,
                    backgroundColor: selectedSlot === index ? theme.palette.primary.main : '#fff',
                    color: selectedSlot === index ? 'white' : 'inherit',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <AccessTimeIcon sx={{ fontSize: '1rem' }} />
                    <Typography variant="body2" sx={{ fontSize: '1rem' }}>{slot}</Typography>
                  </Box>
                </Box>
              ))}

              {classData.map((data, index) => (
                <Box
                  key={`cell-${index}`}
                  sx={{
                    p: 2,
                    borderRight: index < classData.length - 1 ? '1px solid #e0e0e0' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '150px',
                    backgroundColor:
                      selectedSlot === index
                        ? theme.palette.primary.main
                        : data.isHighlighted
                          ? theme.palette.primary.main
                          : data.isLunch
                            ? theme.palette.primary.light
                            : 'white',
                    color: selectedSlot === index || data.isHighlighted ? 'white' : 'inherit',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onClick={() => handleCellClick(index)}
                >
                  {data.isLunch ? (
                    <Typography variant="body1" sx={{ fontWeight: 400 }}>
                      Lunch Break
                    </Typography>
                  ) : (
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            fontSize: '1.2rem',
                            color: selectedSlot === index ? 'white' : 'inherit',
                          }}
                        >
                          {data.subject}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '1.2rem',
                            color: selectedSlot === index ? 'white' : 'inherit',
                          }}
                        >
                          Class: {data.class}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '1.2rem',
                            color: selectedSlot === index ? 'white' : 'inherit',
                          }}
                        >
                          Room: {data.room}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        size="bigger"
                        sx={{
                          backgroundColor: selectedSlot === index ? 'white' : theme.palette.primary.main,
                          color: selectedSlot === index ? theme.palette.primary.main : 'white',
                          borderRadius: '4px',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: selectedSlot === index ? '#0072c9' : theme.palette.primary.dark,
                          },
                        }}
                      >
                        {data.type}
                      </Button>
                    </>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default TimeTable;