import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PrincipalDashboard from '../pages/principal/PrincipalDashboard';
import StudentList from '../components/Principal/StudentList';
import StudentAttendanceList from '../components/Principal/StudentAttendanceList';
import LeaveApproval from '../components/Principal/LeaveApproval';
import TeacherDirectory from '../components/Principal/TeacherDirectory';
import ScheduleEventForm from '../components/Principal/ScheduleEventForm';
import ScheduleExamForm from '../components/Principal/ScheduleExamForm';
import RemarkForm from '../components/common/Remark';
import ChatInterface from '../components/common/ChatInterface';

const PrincipalRouts = () => {
  return (
    <Routes>
      <Route index element={<PrincipalDashboard />} />
      <Route path="/" element={<PrincipalDashboard />} />
      {/* <Route path="/feees" element={<PrincipalDashboard />} /> */}
      <Route path="/student-search" element={<StudentList />} />
      <Route path="/attendance-status" element={<StudentAttendanceList />} />
      <Route path="/leave-approval" element={<LeaveApproval />} />
      <Route path="/teacher-status" element={<TeacherDirectory />} />
      <Route path="/schedule-event" element={<ScheduleEventForm />} />
      <Route path="/schedule-exam" element={<ScheduleExamForm />} />
      <Route path="/remark" element={<RemarkForm />} />
      <Route path="/support" element={<ChatInterface />} />
    </Routes>
  )
}

export default PrincipalRouts