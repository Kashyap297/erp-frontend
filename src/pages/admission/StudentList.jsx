import { Box, Typography, Checkbox, Button, Chip } from "@mui/material"
import { styled } from "@mui/material/styles"
// import { ChevronRight } from "lucide-react"
// import studentImage from '../../assets/images/student.png'

const StudentCard = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2.5),
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    marginBottom: theme.spacing(1.5),
}))

const ViewDetailButton = styled(Typography)({
    color: "#0288d1",
    fontSize: "14px",
    cursor: "pointer",
    marginLeft: "auto",
})

const StatusChip = styled(Chip)(({ status }) => ({
    fontSize: "12px",
    height: "24px",
    backgroundColor: status === "Active" ? "#e8f5e9" : status === "On leave" ? "#fff8e1" : "#ffebee",
    color: status === "Active" ? "#2e7d32" : status === "On leave" ? "#ff8f00" : "#c62828",
    fontWeight: 500,
    borderRadius: "4px",
    padding: "0 8px",
}))

export default function StudentList({ students }) {
    return (
        <Box sx={{ bgcolor: "white", mt: 2 }}>
            {students.map((student) => (
                <StudentCard key={student.id}>
                    <Checkbox
                        size="medium"
                        sx={{
                            mr: 2,
                            color: "#bdbdbd",
                            "&.Mui-checked": {
                                color: "#0288d1",
                            },
                        }}
                    />
                    {/* <Box
                        component="img"
                        src={studentImage}
                        alt={student.name}
                        sx={{
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                            objectFit: "cover",
                            mr: 2,
                        }}
                    /> */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body2" component="div" sx={{ fontWeight: 500 }}>
                            Name - {student.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div" sx={{ mt: 0.5 }}>
                            Date - {student.date}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 4, ml: 2 }}>
                        <StatusChip label={student.status} status={student.status} size="small" />
                        <ViewDetailButton>View detail</ViewDetailButton>
                    </Box>
                </StudentCard>
            ))}
            <Button
                fullWidth
                sx={{
                    color: "white",
                    bgcolor: "#0288d1",
                    py: 1.2,
                    borderRadius: "8px",
                    textTransform: "none",
                    mt: 1,
                    "&:hover": {
                        bgcolor: "#0277bd",
                    },
                }}
                // endIcon={<ChevronRight size={16} />}
            >
                See more
            </Button>
        </Box>
    )
}
