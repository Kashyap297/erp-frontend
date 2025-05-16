import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdmissionRoutes from './AdmissionRoutes';
import CoordinatorRoutes from './CoordinatorRoutes';
import FinanceRouts from './FinanceRouts';
import PrincipalRouts from './PrincipalRouts';
import TeacherRoutes from './TeacherRoutes';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/attendance" element={<div>Attendance Page</div>} />
            <Route path="/timetable" element={<div>Timetable Page</div>} />
            <Route path="/notices" element={<div>Notice Page</div>} />
            <Route path="/admission" element={<AdmissionRoutes />} />
            <Route path="/coordinator" element={<CoordinatorRoutes />} />
            <Route path="/finance" element={<FinanceRouts />} />
            <Route path="/principal" element={<PrincipalRouts />} />
            <Route path="/teacher" element={<TeacherRoutes />} />
        </Routes>
    );
};

export default AppRoutes;
