import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FinanceDashboard from '../pages/finance/FinanceDashboard';
import RemarkForm from '../components/common/Remark';
import ChatInterface from '../components/common/ChatInterface';
import CoordinateDashboard from '../pages/coordinator/CoordinateDashboard';
import TimeTableScheduling from '../components/Coordinator/TimeTableScheduling';
import ScheduleEventsByCoordinator from '../components/Coordinator/ScheduleEventsByCoordinator';
import LeaveApproval from '../components/Principal/LeaveApproval';
import EventsList from '../components/common/EventsList';
import PaySlips from '../components/Teacher/PaySlips';
import StudentList from '../components/Principal/StudentList';
import UpadteAttendance from '../components/Coordinator/UpadteAttendance';
import StudentAttendanceTable from '../components/Coordinator/StudentAttendanceTable';



const CoordinatorRoutes = () => {
  return (
    <Routes>
      <Route index element={<CoordinateDashboard />} />
      <Route path="" element={<CoordinateDashboard />} />
      <Route path="timetable" element={<TimeTableScheduling />} />
      <Route path="schedule-event" element={<ScheduleEventsByCoordinator />} />
      <Route path="assign-class" element={<FinanceDashboard />} />
      <Route path="leave-approval" element={<LeaveApproval />} />
      <Route path="notices" element={<EventsList />} />
      <Route path="salary" element={<PaySlips />} />
      <Route path="student-data" element={<StudentList />} />



      
      <Route path="update-attendance" element={<UpadteAttendance />} />
      <Route path="update-attendance/update/:studentId" element={<StudentAttendanceTable />} />
      <Route path="remark" element={<RemarkForm />} />
      <Route path="support" element={<ChatInterface />} />
    </Routes>
  )
}

export default CoordinatorRoutes