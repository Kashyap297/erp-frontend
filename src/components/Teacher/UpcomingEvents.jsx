import { Box, Typography, Paper, List, ListItem } from "@mui/material"

const UpcomingEvents = () => {
    // Mock data
    const events = [
        {
            id: 1,
            title: "Event !",
            description: "Preparation for 26 jan for every class . Prepare for event",
        },
        {
            id: 2,
            title: "Event !",
            description: "Preparation for 26 jan for every class . Prepare for event",
        },
        {
            id: 3,
            title: "Event !",
            description: "Preparation for 26 jan for every class . Prepare for event",
        },
    ]

    return (
        <Box>
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                Upcoming Events
            </Typography>
            <List sx={{ p: 0 }}>
                {events.map((event) => (
                    <ListItem
                        key={event.id}
                        sx={{
                            p: 0,
                            mb: 2,
                        }}
                    >
                        <Paper
                            elevation={1}
                            sx={{
                                p: 2,
                                width: "100%",
                                borderRadius: 2,
                                border: "1px solid #e0e0e0",
                            }}
                        >
                            <Typography variant="subtitle1" component="div" color="error" sx={{ fontWeight: "bold" }}>
                                {event.title}
                            </Typography>
                            <Typography variant="body2">{event.description}</Typography>
                        </Paper>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default UpcomingEvents