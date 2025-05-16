import TimeTable from "../../components/common/TimeTable"
import { Box, Typography, IconButton } from "@mui/material"
import { CalendarToday as CalendarIcon } from "@mui/icons-material"

const TeacherTimeTable = () => {
    return (
        <Box sx={{ }}>
            {/* First TimeTable */}
            <TimeTable />

            {/* Search Section */}
            <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography sx={{ mr: 1 }}>Search timetable</Typography>
                <IconButton size="small">
                    <CalendarIcon />
                </IconButton>
            </Box>

            {/* Second TimeTable */}
            <TimeTable />
        </Box>
    )
}

export default TeacherTimeTable
