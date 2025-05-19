import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdmissionRoutes from './AdmissionRoutes';
import CoordinatorRoutes from './CoordinatorRoutes';
import FinanceRouts from './FinanceRouts';
import PrincipalRouts from './PrincipalRouts';
import TeacherRoutes from './TeacherRoutes';
import AppLayout from '../components/layout/AppLayout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<AppLayout />}>
                <Route path="admission/*" element={<AdmissionRoutes />} />
                <Route path="coordinator/*" element={<CoordinatorRoutes />} />
                <Route path="finance/*" element={<FinanceRouts />} />
                <Route path="principal/*" element={<PrincipalRouts />} />
                <Route path="teacher/*" element={<TeacherRoutes />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
