import React from 'react';
import AppRoutes from './routes/AppRoutes';
import AppLayout from './components/layout/AppLayout';
import { Route, Routes } from 'react-router-dom';
import Login from './components/common/Login';
import ForgotPassword from './components/common/ForgotPassword';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
      </Routes>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </>
  );
};

export default App;
