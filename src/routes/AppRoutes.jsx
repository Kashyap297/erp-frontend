import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import TeacherDashboard from '../pages/dashboard/TeacherDashboard';
// import PrincipalDashboard from '../pages/dashboard/PrincipalDashboard';
// import FinanceDashboard from '../pages/dashboard/FinanceDashboard';
// import CoordinatorDashboard from '../pages/dashboard/CoordinatorDashboard';
// import AdmissionDashboard from '../pages/dashboard/AdmissionDashboard';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<TeacherDashboard />} /> */}
            <Route path="/attendance" element={<div>Attendance Page</div>} />
            <Route path="/timetable" element={<div>Timetable Page</div>} />
            {/* <Route path="/staff" element={<PrincipalDashboard />} /> */}
            <Route path="/notices" element={<div>Notice Page</div>} />
            {/* <Route path="/salary" element={<FinanceDashboard />} /> */}
            {/* <Route path="/events" element={<CoordinatorDashboard />} /> */}
            {/* <Route path="/new-students" element={<AdmissionDashboard />} /> */}
        </Routes>
    );
};

export default AppRoutes;
