import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import AttendanceMarking from '../pages/teacher/AttendanceMarking';
import TimeTable from '../components/common/TimeTable';
import TeacherTimeTable from '../pages/teacher/TeacherTimeTable';
import ResultUpload from '../components/Teacher/ResultUpload';
import EventsList from '../components/common/EventsList';
import PaySlips from '../components/Teacher/PaySlips';
import LeaveApplication from '../components/Teacher/LeaveApplication';
import RemarkForm from '../components/common/Remark';
import AttendanceStatus from '../components/Teacher/AttendanceStatus';
const TeacherRoutes = () => {
  return (
    <Routes>
      <Route index element={<TeacherDashboard />} />
      <Route path="/" element={<TeacherDashboard />} />
      <Route path="/student-attendance" element={<AttendanceMarking />} />
      <Route path="/timetable" element={<TeacherTimeTable />} />
      <Route path="/result" element={<ResultUpload />} />
      <Route path="/notice" element={<EventsList />} />
      <Route path="/salary" element={<PaySlips />} />
      <Route path="/leave" element={<LeaveApplication />} />
      <Route path="/remark" element={<RemarkForm />} />
      <Route path="/attendance-status" element={<AttendanceStatus />} />
      {/* <Route path="/homework" element={<Homework />} />
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/support" element={<Support />} /> */}
    </Routes>
  )
}

export default TeacherRoutes