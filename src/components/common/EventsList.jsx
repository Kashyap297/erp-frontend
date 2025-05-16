import { Box, Typography, Paper, List, ListItem } from "@mui/material"

const EventsList = () => {
    // Mock data for events
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
        <Box sx={{ width: "100%", maxWidth: "100%", py: 2, p: 4 }}>
            <List sx={{ p: 0 }}>
                {events.map((event) => (
                    <ListItem
                        key={event.id}
                        sx={{
                            p: 0,
                            mb: 2,
                            display: "block",
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                width: "100%",
                                borderRadius: 2,
                                border: "1px solid #ccc",
                            }}
                        >
                            <Typography variant="subtitle1" component="div" color="error" sx={{ fontWeight: "bold", mb: 0.5 }}>
                                {event.title}
                            </Typography>
                            <Typography variant="body1">{event.description}</Typography>
                        </Paper>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default EventsList