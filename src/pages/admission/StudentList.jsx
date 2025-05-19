import { Box, Typography, Checkbox, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const StudentCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3),
  border: "1px solid black",
  borderRadius: "8px",
  marginBottom: theme.spacing(1.5),
  backgroundColor: "white",
  width: "100%",
}))

const ViewDetailButton = styled(Typography)({
  color: "#2196f3",
  fontSize: "14px",
  cursor: "pointer",
})

const StatusText = styled(Typography)(({ status }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: status === "Active" ? "#4caf50" : status === "On leave" ? "#f44336" : "#f44336",
}))

export default function StudentList() {
  // Sample data based on the image
  const students = [
    {
      id: 1,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Active",
      image: "/student-yellow-glasses.png",
    },
    {
      id: 2,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "On leave",
      image: "/student-yellow-glasses.png",
    },
    {
      id: 3,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Pass out",
      image: "/student-yellow-glasses.png",
    },
    {
      id: 4,
      name: "Arlene Simons",
      date: "26/10/2006",
      status: "Active",
      image: "/student-yellow-glasses.png",
    },
  ]

  return (
    <Box sx={{ mt: 2 ,}}>
      {students.map((student) => (
        <StudentCard key={student.id}>
          <Checkbox
            size="medium"
            sx={{
              color: "#bdbdbd",
              "&.Mui-checked": {
                color: "#0288d1",
              },
              padding: 0,
              mr: 3,
            }}
          />
          <Box
            component="img"
            src={student.image}
            alt={student.name}
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              objectFit: "cover",
              mr: 3,
              border: "2px solid #FFC107",
              backgroundColor: "#FFC107",
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" component="div" sx={{ fontWeight: 500, fontSize: "16px" }}>
              Name - {student.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div" sx={{ mt: 0.5 }}>
              Date - {student.date}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <StatusText status={student.status}>{student.status}</StatusText>
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
      >
        See more
      </Button>
    </Box>
  )
}
