import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material"

const TodaysAttendance = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            display: "flex",
            flexDirection: isSmallScreen ? 'column' : 'row',
            justifyContent: "space-between",
            alignItems: isSmallScreen ? 'flex-start' : 'center',
            gap: isSmallScreen ? 2 : 0,
            my: 2,
            width: '100%'
        }}>
            <Typography
                variant={isSmallScreen ? "subtitle1" : "h6"}
                component="div"
                sx={{
                    fontWeight: 500,
                    fontSize: isSmallScreen ? '1rem' : '1.25rem'
                }}
            >
                Today's Attendance: Class 8A
            </Typography>
            <Button
                variant="contained"
                sx={{
                    borderRadius: 1,
                    textTransform: "none",
                    backgroundColor: "#1Ca401",
                    px: 3,
                    width: isSmallScreen ? '100%' : 'auto',
                    '&:hover': {
                        backgroundColor: '#168A01'
                    }
                }}
                size={isSmallScreen ? "medium" : "small"}
            >
                Mark Attendance
            </Button>
        </Box>
    )
}

export default TodaysAttendance