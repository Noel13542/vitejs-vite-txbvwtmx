// src/components/Layout/TopNav.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Layout.module.css';

export default function TopNav() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={styles.topNav}>
      <h1>特斯拉供应链系统 PRO</h1>
      <div className={styles.userInfo}>欢迎, {currentUser.username} ({currentUser.role})</div>
    </div>
  );
}
