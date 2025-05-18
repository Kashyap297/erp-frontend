import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import AttendanceMarking from '../pages/teacher/AttendanceMarking';
import TeacherTimeTable from '../pages/teacher/TeacherTimeTable';
import ResultUpload from '../components/Teacher/ResultUpload';
import EventsList from '../components/common/EventsList';
import PaySlips from '../components/Teacher/PaySlips';
import LeaveApplication from '../components/Teacher/LeaveApplication';
import RemarkForm from '../components/common/Remark';
import AttendanceStatus from '../components/Teacher/AttendanceStatus';
import Homework from '../components/Teacher/Homework';
import HomeworkCreationForm from '../components/Teacher/HomeworkCreationForm';
import LeaveHistory from '../components/Teacher/LeaveHistory';
import LeaveApplicationDetails from '../components/Teacher/LeaveDescription';
import ChatInterface from '../components/common/ChatInterface';
import ProfileCard from '../components/common/ProfileCard';
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
      <Route path="/leave/history" element={<LeaveHistory />} />
      <Route path="/leave/:id" element={<LeaveApplicationDetails />} />
      <Route path="/remark" element={<RemarkForm />} />
      <Route path="/attendance-status" element={<AttendanceStatus />} />
      <Route path="/homework" element={<Homework />} />
      <Route path="/homework/create" element={<HomeworkCreationForm />} />
      <Route path="/support" element={<ChatInterface />} />
      <Route path="/profile" element={<ProfileCard />} />
    </Routes>
  )
}

export default TeacherRoutes