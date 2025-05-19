"use client"

import { useState } from "react"
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
  IconButton
} from "@mui/material"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import ClassIcon from "@mui/icons-material/Class"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"
import MenuBookIcon from "@mui/icons-material/MenuBook"

const TimeTable = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  
  // State to track which time slot is selected
  const [selectedSlot, setSelectedSlot] = useState(null)
  
  // State to track active day tab (for mobile view)
  const [activeDay, setActiveDay] = useState(0)

  // Time slots for the header row
  const timeSlots = [
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
  ]

  // Days of the week (for mobile view)
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  // Class data for each time slot
  const classData = [
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
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
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
  ]

  // Handle click on a class cell
  const handleCellClick = (index) => {
    setSelectedSlot(index)
  }
  
  // Handle day tab change (for mobile view)
  const handleDayChange = (event, newValue) => {
    setActiveDay(newValue)
  }

  // Mobile view - vertical cards for each time slot
  const renderMobileView = () => (
    <>
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
            minWidth: 'auto',
            px: 2
          }
        }}
      >
        {days.map((day, index) => (
          <Tab key={day} label={day} id={`tab-${index}`} />
        ))}
      </Tabs>
      
      <Box sx={{ mt: 2 }}>
        {timeSlots.map((slot, index) => (
          <Card 
            key={`mobile-slot-${index}`}
            elevation={1}
            sx={{ 
              mb: 2, 
              borderRadius: 2,
              border: selectedSlot === index ? `2px solid ${theme.palette.primary.main}` : '1px solid #e0e0e0',
              overflow: 'hidden'
            }}
            onClick={() => handleCellClick(index)}
          >
            <Box 
              sx={{ 
                p: 1.5, 
                backgroundColor: selectedSlot === index ? theme.palette.primary.main : '#f5f5f5',
                color: selectedSlot === index ? 'white' : 'inherit',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AccessTimeIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {slot}
              </Typography>
            </Box>
            
            <CardContent sx={{ p: 2 }}>
              {classData[index].isLunch ? (
                <Typography variant="body1" sx={{ fontWeight: 500, textAlign: 'center', py: 2 }}>
                  Lunch Break
                </Typography>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <MenuBookIcon sx={{ mr: 1, color: 'text.secondary', fontSize: '1.2rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {classData[index].subject}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <ClassIcon sx={{ mr: 1, color: 'text.secondary', fontSize: '1.2rem' }} />
                    <Typography variant="body2">
                      Class: {classData[index].class}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MeetingRoomIcon sx={{ mr: 1, color: 'text.secondary', fontSize: '1.2rem' }} />
                    <Typography variant="body2">
                      Room: {classData[index].room}
                    </Typography>
                  </Box>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      borderRadius: '4px',
                      py: 0.75,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    {classData[index].type}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  )

  // Tablet view - scrollable horizontal grid
  const renderTabletView = () => (
    <Box sx={{ overflowX: 'auto', pb: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${timeSlots.length}, minmax(150px, 1fr))`,
          width: 'max-content',
          minWidth: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid #9e9e9e',
        }}
      >
        {/* Header row with time slots */}
        {timeSlots.map((slot, index) => (
          <Box
            key={`header-${index}`}
            sx={{
              p: 1.5,
              textAlign: 'center',
              borderRight: index < timeSlots.length - 1 ? '1px solid #9e9e9e' : 'none',
              borderBottom: selectedSlot === index ? 'none' : '1px solid #9e9e9e',
              fontWeight: 400,
              fontSize: '0.9rem',
              backgroundColor: selectedSlot === index ? '#2196f3' : 'transparent',
              color: selectedSlot === index ? 'white' : 'inherit',
            }}
          >
            {slot}
          </Box>
        ))}

        {/* Class data cells */}
        {classData.map((data, index) => (
          <Box
            key={`cell-${index}`}
            sx={{
              p: 1.5,
              borderRight: index < classData.length - 1 ? '1px solid #9e9e9e' : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '150px',
              backgroundColor:
                selectedSlot === index
                  ? '#2196f3'
                  : data.isHighlighted
                    ? '#2196f3'
                    : data.isLunch
                      ? '#bbdefb'
                      : 'transparent',
              color: selectedSlot === index || data.isHighlighted ? 'white' : 'inherit',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onClick={() => handleCellClick(index)}
          >
            {data.isLunch ? (
              <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '0.95rem' }}>
                Lunch
              </Typography>
            ) : (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    mb: 0.5,
                    fontSize: '0.95rem',
                    color: data.isHighlighted || (selectedSlot === index && !data.isLunch) ? 'white' : 'inherit',
                    textAlign: 'center',
                  }}
                >
                  {data.subject}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 0.5,
                    fontSize: '0.85rem',
                    color: data.isHighlighted || (selectedSlot === index && !data.isLunch) ? 'white' : 'inherit',
                  }}
                >
                  Class: {data.class}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    fontSize: '0.85rem',
                    color: data.isHighlighted || (selectedSlot === index && !data.isLunch) ? 'white' : 'inherit',
                  }}
                >
                  Room: {data.room}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: selectedSlot === index || data.isHighlighted ? 'white' : '#2196f3',
                    color: selectedSlot === index || data.isHighlighted ? '#2196f3' : 'white',
                    border: 'none',
                    borderRadius: '4px',
                    py: 0.5,
                    px: 2,
                    textTransform: 'none',
                    fontSize: '0.85rem',
                    '&:hover': {
                      backgroundColor:
                        data.isHighlighted || (selectedSlot === index && !data.isLunch) ? '#f5f5f5' : '#1976d2',
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
  )

  // Desktop view - full grid
  const renderDesktopView = () => (
    <Paper
      elevation={0}
      sx={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #9e9e9e',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          width: '100%',
        }}
      >
        {/* Header row with time slots */}
        {timeSlots.map((slot, index) => (
          <Box
            key={`header-${index}`}
            sx={{
              p: 2,
              textAlign: 'center',
              borderRight: index < timeSlots.length - 1 ? '1px solid #9e9e9e' : 'none',
              borderBottom: selectedSlot === index ? 'none' : '1px solid #9e9e9e',
              fontWeight: 400,
              fontSize: '0.95rem',
              backgroundColor: selectedSlot === index ? '#2196f3' : 'transparent',
              color: selectedSlot === index ? 'white' : 'inherit',
            }}
          >
            {slot}
          </Box>
        ))}

        {/* Class data cells */}
        {classData.map((data, index) => (
          <Box
            key={`cell-${index}`}
            sx={{
              p: 2,
              borderRight: index < classData.length - 1 ? '1px solid #9e9e9e' : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '180px',
              backgroundColor:
                selectedSlot === index
                  ? '#2196f3'
                  : data.isHighlighted
                    ? '#2196f3'
                    : data.isLunch
                      ? '#bbdefb'
                      : 'transparent',
              color: selectedSlot === index || data.isHighlighted ? 'white' : 'inherit',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onClick={() => handleCellClick(index)}
          >
            {data.isLunch ? (
              <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '1rem' }}>
                Lunch
              </Typography>
            ) : (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    mb: 0.5,
                    color: data.isHighlighted || (selectedSlot === index && !data.isLunch) ? 'white' : 'inherit',
                  }}
                >
                  {data.subject}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 0.5,
                    color: data.isHighlighted || (selectedSlot === index && !data.isLunch) ? 'white' : 'inherit',
                  }}
                >
                  Class: {data.class}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    color: data.isHighlighted || (selectedSlot === index && !data.isLunch) ? 'white' : 'inherit',
                  }}
                >
                  Room: {data.room}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: selectedSlot === index || data.isHighlighted ? 'white' : '#2196f3',
                    color: selectedSlot === index || data.isHighlighted ? '#2196f3' : 'white',
                    border: 'none',
                    borderRadius: '4px',
                    py: 1,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor:
                        data.isHighlighted || (selectedSlot === index && !data.isLunch) ? '#f5f5f5' : '#1976d2',
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
    </Paper>
  )

  return (
    <Box sx={{ my: 3, px: { xs: 1, sm: 2, md: 3 } }}>
      <Typography variant="h5" component="h1" sx={{ mb: { xs: 1.5, sm: 2 }, fontWeight: 500 }}>
        Time Table
      </Typography>

      {/* Responsive layout based on screen size */}
      {isMobile ? (
        renderMobileView()
      ) : isTablet ? (
        renderTabletView()
      ) : (
        renderDesktopView()
      )}
    </Box>
  )
}

export default TimeTable