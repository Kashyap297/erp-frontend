import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const TableContainer = styled(Box)(({ theme }) => ({
 
  borderRadius: "4px",
  marginTop: theme.spacing(2),
  padding: theme.spacing(4),
}))

const TableRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #e0e0e0",
  padding: "16px",
})

const HeaderRow = styled(TableRow)({
  fontWeight: 600,
  backgroundColor: "#fafafa",
})

const TableCell = styled(Box)({
  flex: 1,
  display: "flex",
  alignItems: "center",
})

const AcceptButton = styled(Button)({
  backgroundColor: " #23D000",
  color: "white",
  textTransform: "none",
  padding: "6px 16px",
  fontSize: "14px",
  marginRight: "8px",
  "&:hover": {
    backgroundColor: "#43a047",
  },
})

const RejectButton = styled(Button)({
  backgroundColor: "#D80303",
  color: "white",
  textTransform: "none",
  padding: "6px 16px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#e53935",
  },
})

export default function InterviewTable() {
  // Sample data based on the image
  const interviews = [
    {
      id: 1,
      name: "John Doe",
      subject: "Math",
      interviewDate: "Not assigned",
    },
    {
      id: 2,
      name: "John Doe",
      subject: "Math",
      interviewDate: "Not assigned",
    },
    {
      id: 3,
      name: "John Doe",
      subject: "Math",
      interviewDate: "Not assigned",
    },
    {
      id: 4,
      name: "John Doe",
      subject: "Math",
      interviewDate: "Not assigned",
    },
    {
      id: 5,
      name: "John Doe",
      subject: "Math",
      interviewDate: "Not assigned",
    },
  ]

  return (
    <TableContainer>
      <HeaderRow>
        <TableCell>
          <Typography variant="subtitle1">Name</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">Subject</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">Interview Date</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">Actions</Typography>
        </TableCell>
      </HeaderRow>

      {interviews.map((interview) => (
        <TableRow key={interview.id}>
          <TableCell>
            <Typography>{interview.name}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{interview.subject}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{interview.interviewDate}</Typography>
          </TableCell>
          <TableCell sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <AcceptButton variant="contained" size="small">
                Accept
              </AcceptButton>
              <RejectButton variant="contained" size="small">
                Reject
              </RejectButton>
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableContainer>
  )
}
