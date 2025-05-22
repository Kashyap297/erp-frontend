import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material"

const StudentResultsComponent = () => {
  // Half yearly exam data
  const halfYearlyData = [
    { subject: "English", internal: 30, external: 65, total: 95 },
    { subject: "Social", internal: 30, external: 65, total: 95 },
    { subject: "Science", internal: 30, external: 65, total: 95 },
    { subject: "Math", internal: 30, external: 65, total: 95 },
    { subject: "Hindi", internal: 30, external: 65, total: 95 },
    { subject: "C.S", internal: 30, external: 65, total: 95 },
    { subject: "Average", internal: null, external: null, total: "95%" },
  ]

  // Final yearly exam data
  const finalYearlyData = [
    { subject: "English", internal: 30, external: 65, total: 95 },
    { subject: "Social", internal: 30, external: 65, total: 95 },
    { subject: "Science", internal: 30, external: 65, total: 95 },
    { subject: "Math", internal: 30, external: 65, total: 95 },
    { subject: "Hindi", internal: 30, external: 65, total: 95 },
    { subject: "C.S", internal: 30, external: 65, total: 95 },
    { subject: "Average", internal: null, external: null, total: "95%" },
  ]

  // Function to create the results table
  const ResultsTable = ({ data }) => (
    <TableContainer component={Paper} elevation={0} sx={{ mb: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell>Subject</TableCell>
            <TableCell align="center">Internal</TableCell>
            <TableCell align="center">External</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={
                index === data.length - 1
                  ? { backgroundColor: "#f5f5f5" }
                  : {
                      "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                    }
              }
            >
              <TableCell component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell align="center">{row.internal}</TableCell>
              <TableCell align="center">{row.external}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  return (
    <Box sx={{ width: "100%", mx: "auto", my: 4 , p: 4 , mt : 2 }}>
      {/* Half Yearly Results */}
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            backgroundColor: "#4FC3F7",
            color: "white",
            p: 1,
            borderRadius: "4px 4px 0 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Half yearly
          </Typography>
        </Box>
        <ResultsTable data={halfYearlyData} />
      </Box>

      {/* Final Yearly Results */}
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            backgroundColor: "#4FC3F7",
            color: "white",
            p: 1,
            borderRadius: "4px 4px 0 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Final yearly
          </Typography>
        </Box>
        <ResultsTable data={finalYearlyData} />
      </Box>
    </Box>
  )
}

export default StudentResultsComponent
