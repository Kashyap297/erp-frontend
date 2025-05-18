import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdmissionDashboard from '../pages/admission/AdmissionDashboard';
import StudentManagement from '../components/Admission/StudentManagement';
import StudentRegistrationForm from '../components/Admission/StudentRegistrationForm';
import ChatInterface from '../components/common/ChatInterface';

const AdmissionRoutes = () => {
  return (
    <Routes>
      <Route index element={<AdmissionDashboard />} />
      <Route path="dashboard" element={<AdmissionDashboard />} />
      <Route path="student-registration" element={<StudentManagement />} />
      <Route path="student-registration/form" element={<StudentRegistrationForm />} />
      <Route path="support" element={<ChatInterface />} />
    </Routes>
  )
}

export default AdmissionRoutes