// src/components/Layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2>Tesla SCM Pro</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : '')}>
          仪表盘
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => (isActive ? styles.activeLink : '')}>
          订单管理
        </NavLink>
        <NavLink
          to="/procurement"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          采购管理
        </NavLink>
        <NavLink
          to="/inventory"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          库存管理
        </NavLink>
        <NavLink
          to="/logistics"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          物流管理
        </NavLink>
        <NavLink
          to="/payment"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          支付管理
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) => (isActive ? styles.activeLink : '')}
        >
          分析报告
        </NavLink>
        <NavLink to="/approval" className={({ isActive }) => (isActive ? styles.activeLink : '')}>
          审批中心
        </NavLink>
        <NavLink to="/admin" className={({ isActive }) => (isActive ? styles.activeLink : '')}>
          系统管理
        </NavLink>
      </nav>
    </div>
  );
}
