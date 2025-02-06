// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import TopNav from './components/Layout/TopNav';
import AppRoutes from './routes/AppRoutes';
import styles from './components/Layout/Layout.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appLayout}>
        <Sidebar />
        <div className={styles.mainContent}>
          <TopNav />
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
