import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FinanceDashboard from '../pages/finance/FinanceDashboard';
import FeesManagement from '../components/Finance/FeesManagement';
import StudentFees from '../components/Finance/StudentFees';
import FeesStructure from '../components/Finance/FeesStructure';
import FineLateFee from '../components/Finance/FineLateFee';
import PaymentTracking from '../components/Finance/PaymentTracking';
import ReceiptGeneration from '../components/Finance/ReceiptGeneration';
import FeesVerification from '../components/Finance/FeesVerification';
import RemarkForm from '../components/common/Remark';
import ChatInterface from '../components/common/ChatInterface';

const FinanceRouts = () => {
  return (
    <Routes>
      <Route index element={<FinanceDashboard />} />
      <Route path="/" element={<FinanceDashboard />} />
      <Route path="/fees-management" element={<FeesManagement />} />
      <Route path="/student-fees" element={<StudentFees />} />
      <Route path="/fees-structure" element={<FeesStructure />} />
      <Route path="/late-fees" element={<FineLateFee />} />
      <Route path="/payment-tracking" element={<PaymentTracking />} />
      <Route path="/receipt-generation" element={<ReceiptGeneration />} />
      <Route path="/fees-verification" element={<FeesVerification />} />
      <Route path="/remark" element={<RemarkForm />} />
       <Route path="/support" element={<ChatInterface />} />
    </Routes>
  )
}

export default FinanceRouts