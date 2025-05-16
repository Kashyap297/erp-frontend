import React, { useEffect, useState } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, useMediaQuery, useTheme, Stack, Button, TableBody, Paper } from "@mui/material";
import renderAttendanceHistory from "./renderAttendanceHistory";


const initialStudents = Array.from({ length: 18 }, (_, index) => ({
    rollNo: String(index + 1).padStart(2, '0'),
    name: 'Alice Miller',
    isPresent: false,
    history: [
      index < 3 ? 'present' : 'absent',
      'present',
      'present',
      index % 4 === 3 ? 'present' : 'absent',
      'none'
    ]
  }));

const MarkAttendanceCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const [students, setStudents] = useState(initialStudents);

    const toggleAttendance = (index, status) => {
        const updatedStudents = [...students];
        updatedStudents[index].isPresent = status === 'present';
        setStudents(updatedStudents);
    };

    return (
        <TableContainer component={Paper} variant="outlined">
            <Table size={isMobile ? "small" : "medium"}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ width: '10%' }}>Roll No.</TableCell>
                        <TableCell sx={{ width: '30%' }}>Student Name</TableCell>
                        <TableCell align="center" sx={{ width: '30%' }}>Attendance</TableCell>
                        {!isMobile && (
                            <TableCell align="center" sx={{ width: '30%' }}>History (Last Week)</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student, index) => (
                        <TableRow key={student.rollNo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">{student.rollNo}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell align="center">
                                <Stack direction="row" spacing={1} justifyContent="center">
                                    <Button
                                        variant="outlined"
                                        color="success"
                                        size="small"
                                        sx={{
                                            minWidth: { xs: '70px', sm: '80px' },
                                            backgroundColor: student.isPresent ? 'rgba(76, 175, 80, 0.1)' : 'transparent'
                                        }}
                                        onClick={() => toggleAttendance(index, 'present')}
                                    >
                                        Present
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="small"
                                        sx={{
                                            minWidth: { xs: '70px', sm: '80px' },
                                            backgroundColor: !student.isPresent ? 'rgba(244, 67, 54, 0.1)' : 'transparent'
                                        }}
                                        onClick={() => toggleAttendance(index, 'absent')}
                                    >
                                        Absent
                                    </Button>
                                </Stack>
                            </TableCell>
                            {!isMobile && (
                                <TableCell align="center">
                                    {renderAttendanceHistory(student.history)}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MarkAttendanceCard;