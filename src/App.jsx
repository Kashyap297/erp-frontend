import React from 'react';
import AppRoutes from './routes/AppRoutes';
import AppLayout from './components/layout/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
};

export default App;
