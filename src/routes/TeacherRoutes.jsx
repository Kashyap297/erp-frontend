import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
const TeacherRoutes = () => {
  return (
    <Routes>
      <Route index element={<TeacherDashboard />} />
      <Route path="/" element={<TeacherDashboard />} />
      {/* <Route path="/student-attendance" element={<StudentAttendance />} />
      <Route path="/attendance-status" element={<AttendanceStatus />} />
      <Route path="/homework" element={<Homework />} />
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/result" element={<Result />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/salary" element={<Salary />} />
      <Route path="/leave" element={<Leave />} />
      <Route path="/remark" element={<Remark />} />
      <Route path="/support" element={<Support />} /> */}
    </Routes>
  )
}

export default TeacherRoutes