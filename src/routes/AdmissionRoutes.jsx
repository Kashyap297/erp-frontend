import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdmissionDashboard from '../pages/admission/AdmissionDashboard';
import StudentManagement from '../components/Admission/StudentManagement';
import StudentRegistrationForm from '../components/Admission/StudentRegistrationForm';
import ChatInterface from '../components/common/ChatInterface';
import InterviewManagement from '../components/Admission/InterviewManagement';
import TransferRequestManagement from '../components/Admission/TransferRequestManagement';

const AdmissionRoutes = () => {
  return (
    <Routes>
      <Route index element={<AdmissionDashboard />} />
      <Route path="dashboard" element={<AdmissionDashboard />} />
      <Route path="student-registration" element={<StudentManagement />} />
      <Route path="student-registration/form" element={<StudentRegistrationForm />} />
      <Route path="interview-management" element={<InterviewManagement />} />
      <Route path="transfer-management" element={<TransferRequestManagement />} />
      <Route path="support" element={<ChatInterface />} />
    </Routes>
  )
}

export default AdmissionRoutes