import React from 'react'
import Sidebar from './components/SideBar';
import Login from './components/Login';
import Attendance from './pages/Attendace';
import TimeTable from './components/TimeTable';
import { Box, Paper, Container, Grid, Card } from '@mui/material';
import LeaveApplication from './components/LeaveApplication';
import UploadResult from './components/UploadResult';
import NoticeCard from './components/NoticeCard';
import AppBarComponent from './components/AppBarComponent';
import RemarkForm from './components/Remark';
import MedicalIssueList from './components/LeaveHistory';
import LeaveApplicationDetails from './components/LeaveDescription';
import ViewAttendance from './components/ViewAttendance';
import StudentSearch from './components/StudentSearch';
import StudentDetailsModel from './components/StudentDetailModel';
import ScheduleEventForm from './components/ScheduleEventForm';
import LeaveRequest from './components/LeaveRequest';
import LeaveRequestDetailsModel from './components/LeaveRequestDetailsModel';
import StudentResultsComponent from './components/StudentResultsComponent';
import FeesHistoryDetails from './components/FeesHistoryDetails';
import Dashboard from './pages/Dashboard';
import MarkAttendanceCard from './components/MarkAttendanceCard';

const App = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main" width={'100%'}>
            <AppBarComponent />
          {/* <Attendance /> */}
          {/* <LeaveApplication /> */}
          {/* <UploadResult /> */}
          {/* <TimeTable /> */}
          {/* <StudentSearch /> */}
          {/* <StudentDetailsModel open={true} /> */}
          {/* <NoticeCard /> */}
          {/* <RemarkForm /> */}
          {/* <MedicalIssueList /> */}
          {/* <LeaveApplicationDetails /> */}
          {/* <ViewAttendance /> */}
          {/* <ScheduleEventForm /> */}
          {/* <LeaveRequest /> */}
          {/* <LeaveRequestDetailsModel open={true}  /> */}
          {/* <StudentResultsComponent /> */}
          {/* <FeesHistoryDetails /> */}
          <Dashboard />
        </Box>
      </Box>
      {/* <Login /> */}
    </>

  )
}

export default App;