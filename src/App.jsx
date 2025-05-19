import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/common/Login';
import ForgotPassword from './components/common/ForgotPassword';
import AppLayout from './components/layout/AppLayout';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Routes>
      {/* Routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgotPassword />} />

      {/* Routes with layout */}
      <Route path="*" element={<AppRoutes />} />
    </Routes>
  );
};

export default App;
