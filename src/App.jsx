import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNav from './components/layout-components/HeaderNav';
import SideNav from './components/layout-components/SideNav';
import AppContent from './components/layout-components/AppContent';

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderNav />
        <Layout style={{ background: '0ADD90', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <SideNav />
          <AppContent />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
