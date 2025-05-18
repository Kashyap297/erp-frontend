import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledTableCell = styled(TableCell)({
  padding: "8px 16px",
  fontSize: "14px",
})

const ActionButton = styled(Button)({
  minWidth: "32px",
  height: "24px",
  padding: "0 8px",
  fontSize: "12px",
  marginRight: "4px",
})

export default function InterviewTable({ interviews }) {
  return (
    <Box sx={{ p: 2, bgcolor: "white", mt : 2 }}>
      <TableContainer component={Paper} elevation={0}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Subject</StyledTableCell>
              <StyledTableCell>Interview Date</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interviews.map((interview) => (
              <TableRow key={interview.id}>
                <StyledTableCell>{interview.name}</StyledTableCell>
                <StyledTableCell>{interview.subject}</StyledTableCell>
                <StyledTableCell>{interview.interviewDate}</StyledTableCell>
                <StyledTableCell>
                  <ActionButton
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ bgcolor: "#4caf50", "&:hover": { bgcolor: "#388e3c" } }}
                  >
                    Accept
                  </ActionButton>
                  <ActionButton
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ bgcolor: "#f44336", "&:hover": { bgcolor: "#d32f2f" } }}
                  >
                   Reject
                  </ActionButton>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}