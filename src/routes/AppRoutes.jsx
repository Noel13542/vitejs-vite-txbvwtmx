// src/routes/AppRoutes.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// 按需异步加载页面
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Orders = lazy(() => import('../pages/Orders/Orders'));
const Procurement = lazy(() => import('../pages/Procurement/Procurement'));
const Inventory = lazy(() => import('../pages/Inventory/Inventory'));
const Logistics = lazy(() => import('../pages/Logistics/Logistics'));
const Payment = lazy(() => import('../pages/Payment/Payment'));
const Analytics = lazy(() => import('../pages/Analytics/Analytics'));
const Admin = lazy(() => import('../pages/Admin/Admin'));
const Approval = lazy(() => import('../pages/Approval/Approval'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>页面加载中...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
